// Mobile menu toggle
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// Shared WhatsApp appointment form handler (reads clinic info from form data attributes)
const bookingForm = document.getElementById("bookingForm");
const formStatus = document.getElementById("formStatus");

if (bookingForm) {
  bookingForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const clinicName = bookingForm.dataset.clinic || "Dental Clinic";
    const whatsappNumber = bookingForm.dataset.whatsapp || "";
    const name = document.getElementById("patientName").value.trim();
    const phone = document.getElementById("patientPhone").value.trim();
    const treatment = document.getElementById("treatment").value;
    const preferredTime = document.getElementById("preferredTime").value;

    const message = [
      `Hello ${clinicName}, I would like to book an appointment:`,
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Treatment: ${treatment}`,
      `Preferred Time: ${preferredTime}`,
    ].join("\n");

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    if (formStatus) {
      formStatus.textContent = "Opening WhatsApp with your appointment details...";
    }

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  });
}

// Keep footer year current automatically
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}
