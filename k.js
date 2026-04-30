function sendMessage() {
  // Implementation for sending message
  if (document.querySelector('input[placeholder="Your Email"]').value && document.querySelector('textarea[placeholder="Your Message"]').value) {
    // Proceed with sending the message
  } else {
    alert("Please fill in all fields before sending.");
  }
}
const allButtons = document.querySelectorAll('.btn, button');

allButtons.forEach(btn => {
  btn.addEventListener('mouseover', () => {
    btn.style.boxShadow = "0 0 20px rgba(56, 189, 248, 0.6)";
  });

  btn.addEventListener('mouseout', () => {
    btn.style.boxShadow = "none";
  });
});

