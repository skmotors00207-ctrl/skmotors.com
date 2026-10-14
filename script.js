const toggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
}));
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('enquiryForm').addEventListener('submit', event => {
  event.preventDefault();
  const name = document.getElementById('customerName').value.trim();
  const type = document.getElementById('vehicleType').value;
  const message = document.getElementById('message').value.trim();
  const text = `Hello SK Motor Bike & Car, my name is ${name}. I am interested in: ${type}. ${message}`;
  window.open(`https://wa.me/917569326658?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
});