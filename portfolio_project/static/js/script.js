// Animate sections on scroll only once
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible'); // Trigger animation
      observer.unobserve(entry.target); // Stop observing so it won't repeat
    }
  });
}, {
  threshold: 0.2 // 20% of the section visible
});

sections.forEach(section => {
  observer.observe(section);
});

// Handle contact form submission with AJAX
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function(event) {
  event.preventDefault();  // Prevent form's default submission behavior

  const formData = new FormData(contactForm);

  fetch("/send", {
    method: "POST",
    body: formData
  })
  .then(response => response.text())
  .then(data => {
    formMessage.textContent = data;
    formMessage.style.color = "green";
    contactForm.reset();
  })
  .catch(error => {
    formMessage.textContent = "❌ Something went wrong. Please try again.";
    formMessage.style.color = "red";
  });
});

// Smooth scroll to section by ID
function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}
