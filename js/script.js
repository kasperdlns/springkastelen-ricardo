// =========================================
// Springkastelen Ricardo
// =========================================

// ---------- Hamburgermenu (gsm/tablet) ----------
const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector("#nav");

toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", open);
  toggle.setAttribute("aria-label", open ? "Menu sluiten" : "Menu openen");
});

// Menu sluiten na klik op een link
nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", false);
    toggle.setAttribute("aria-label", "Menu openen");
  });
});

// ---------- Kaartknop vult het juiste kasteel in ----------
const select = document.querySelector("#kasteel");

document.querySelectorAll("[data-kasteel]").forEach((btn) => {
  btn.addEventListener("click", () => {
    select.value = btn.dataset.kasteel;
  });
});

// ---------- Formulier versturen via Formspree ----------
const form = document.querySelector("#contact-form");
const status = document.querySelector("#form-status");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  status.className = "form__status";
  status.textContent = "Bezig met versturen...";

  try {
    const response = await fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      form.reset();
      status.classList.add("is-ok");
      status.textContent = "Bedankt! We hebben je aanvraag goed ontvangen en nemen snel contact op.";
    } else {
      throw new Error("Verzenden mislukt");
    }
  } catch (err) {
    status.classList.add("is-error");
    status.textContent = "Er ging iets mis. Probeer opnieuw of mail ons rechtstreeks.";
  }
});

// ---------- Jaartal in de footer ----------
document.querySelector("#jaar").textContent = new Date().getFullYear();
