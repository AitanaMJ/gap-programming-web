(() => {
  const cfg = window.GAP_CONFIG || {};
  const $ = (s) => document.querySelector(s);
  const menu = $(".menu-toggle");
  const nav = $("#main-nav");
  menu?.addEventListener("click", () => {
    const opened = nav.classList.toggle("open");
    menu.setAttribute("aria-expanded", String(opened));
    menu.textContent = opened ? "✕" : "☰";
  });
  nav?.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      nav.classList.remove("open");
      menu.setAttribute("aria-expanded", "false");
      menu.textContent = "☰";
    }),
  );
  $("#year").textContent = new Date().getFullYear();

  const wa = String(cfg.whatsapp || "").replace(/\D/g, "");

  const whatsappButtons = document.querySelectorAll(
    '#whatsapp-link, #float-whatsapp, [data-link="whatsapp"]',
  );

  if (/^\d{10,15}$/.test(wa)) {
    const mensaje =
      cfg.mensajeWhatsapp ||
      "Hola, quisiera consultar por una página web de GAP Programming.";

    const url = `https://wa.me/${wa}?text=${encodeURIComponent(mensaje)}`;

    whatsappButtons.forEach((button) => {
      button.href = url;
      button.hidden = false;
    });
  } else {
    whatsappButtons.forEach((button) => {
      button.hidden = true;
    });
  }

  if (cfg.instagram && /^https:\/\//.test(cfg.instagram))
    $("#instagram-link").href = cfg.instagram;
  else $("#instagram-link").hidden = true;
  if (cfg.email && /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(cfg.email))
    $("#email-link").href = `mailto:${cfg.email}`;
  else $("#email-link").hidden = true;
  document.querySelectorAll("[data-service]").forEach((link) =>
    link.addEventListener("click", () => {
      $("#service-select").value = link.dataset.service;
    }),
  );
  const form = $("#budget-form");
  form?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const status = $("#form-status");
    status.className = "form-status";
    if (!form.reportValidity()) return;
    const id = String(cfg.formspreeId || "").trim();
    if (!/^[a-zA-Z0-9]{6,20}$/.test(id)) {
      status.textContent =
        "El formulario aún no está configurado. Contactanos por WhatsApp o email.";
      status.classList.add("error");
      return;
    }
    const button = form.querySelector('button[type="submit"]');
    button.disabled = true;
    button.textContent = "Enviando…";
    status.textContent = "Enviando consulta…";
    try {
      const response = await fetch(`https://formspree.io/f/${id}`, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        console.error("Formspree:", response.status, data);
        throw new Error(`HTTP ${response.status}`);
      }
      form.reset();
      status.textContent =
        "¡Gracias! Tu consulta se envió correctamente. Te responderemos pronto.";
      status.classList.add("success");
    } catch (err) {
      console.error("Error al enviar:", err);
      status.textContent =
        "No se pudo enviar la consulta. Probá nuevamente o contactanos por otro medio.";
      status.classList.add("error");
    } finally {
      button.disabled = false;
      button.innerHTML = "Enviar consulta <span>↗</span>";
    }
  });
})();

// Filtros del portafolio
document.querySelectorAll("[data-project-filter]").forEach((button) => {
  button.addEventListener("click", () => {
    const category = button.dataset.projectFilter;
    document.querySelectorAll("[data-project-filter]").forEach((item) => {
      const active = item === button;
      item.classList.toggle("active", active);
      item.setAttribute("aria-pressed", String(active));
    });
    document
      .querySelectorAll(".project-card[data-category]")
      .forEach((card) => {
        card.hidden =
          category !== "todos" && card.dataset.category !== category;
      });
  });
});

// Videos de vista previa: se cargan y reproducen solo cuando la tarjeta es
// visible. Con "reducir movimiento" o ahorro de datos queda la portada fija.
(() => {
  const videos = document.querySelectorAll("video[data-autoplay]");
  if (!videos.length) return;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const saveData = navigator.connection?.saveData === true;
  const visible = new Set();
  const sync = (video) => {
    if (!reduceMotion.matches && !saveData && visible.has(video)) {
      video.muted = true;
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  };
  if (!("IntersectionObserver" in window)) {
    videos.forEach((v) => (visible.add(v), sync(v)));
  } else {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(({ target, isIntersecting }) => {
          if (isIntersecting) visible.add(target);
          else visible.delete(target);
          sync(target);
        }),
      { rootMargin: "200px 0px", threshold: 0.01 },
    );
    videos.forEach((v) => observer.observe(v));
  }
  reduceMotion.addEventListener?.("change", () => videos.forEach(sync));
})();
