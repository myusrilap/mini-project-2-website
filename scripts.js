const typingSubtext = document.getElementById("typing-subtext");
const subtext = "Student of Mulawarman University";
let j = 0;

function typeSubtext() {
  if (j < subtext.length) {
    typingSubtext.innerHTML += subtext.charAt(j);
    j++;
    setTimeout(typeSubtext, 100);
  } else {
    setTimeout(eraseSubtext, 1500);
  }
}

function eraseSubtext() {
  if (j >= 0) {
    typingSubtext.innerHTML = subtext.substring(0, j);
    j--;
    setTimeout(eraseSubtext, 50);
  } else {
    j = 0;
    setTimeout(typeSubtext, 500);
  }
}

typeSubtext();
document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("contact-form");
  const successModal = new bootstrap.Modal(document.getElementById('successModal'));
  const darkModeToggle = document.getElementById("dark-mode-toggle");
  const lightModeToggle = document.getElementById("light-mode-toggle");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;

    const notificationText = `${name} mengirim pesan: "${message}"`;

    document.querySelector("#successModal .modal-body").innerText = notificationText;

    successModal.show();

    form.reset();
  });

  darkModeToggle.addEventListener("click", () => {
    document.body.classList.add("dark-mode");
    document.body.classList.remove("light-mode");
  });

  lightModeToggle.addEventListener("click", () => {
    document.body.classList.remove("dark-mode");
    document.body.classList.add("light-mode");
  });
});