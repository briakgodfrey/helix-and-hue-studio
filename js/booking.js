// Booking button: the studio is a concept, so instead of opening a real
// booking tool, confirm the tap with a message a screen reader also hears.
document.addEventListener('DOMContentLoaded', () => {
  const note = document.getElementById('booking-note');
  if (!note) return;
  document.querySelectorAll('[data-book]').forEach((button) => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      note.textContent = "You're all set to book! On a real stylist's site, this button opens her online booking tool.";
    });
  });
});
