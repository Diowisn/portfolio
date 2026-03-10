document.getElementById('year').textContent = new Date().getFullYear();

function showPage(name) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
  document.getElementById('page-' + name).classList.add('active');
  document.getElementById('nav-' + name).classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleTheme() {
  const html = document.documentElement;
  html.dataset.theme = html.dataset.theme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('portfolio-theme', html.dataset.theme);
}

const saved = localStorage.getItem('portfolio-theme');
if (saved) document.documentElement.dataset.theme = saved;

// ── Ganti dengan data kamu ──
const MY_EMAIL = 'diowisnuatmawirata@gmail.com';
const MY_WA    = '6289608019919';

function getFormData() {
  const name    = document.getElementById('contact-name').value.trim();
  const email   = document.getElementById('contact-email').value.trim();
  const subject = document.getElementById('contact-subject').value.trim();
  const message = document.getElementById('contact-message').value.trim();
  return { name, email, subject, message };
}

function validateForm() {
  const { name, email, message } = getFormData();
  if (!name)    { alert('Nama tidak boleh kosong.'); return false; }
  if (!email)   { alert('Email tidak boleh kosong.'); return false; }
  if (!message) { alert('Pesan tidak boleh kosong.'); return false; }
  return true;
}

function sendViaEmail() {
  if (!validateForm()) return;
  const { name, email, subject, message } = getFormData();
  const body = `Nama: ${name}\nEmail: ${email}\n\n${message}`;
  const mailto = `mailto:${MY_EMAIL}?subject=${encodeURIComponent(subject || 'Pesan dari Portfolio')}&body=${encodeURIComponent(body)}`;
  window.location.href = mailto;
}

function sendViaWA() {
  if (!validateForm()) return;
  const { name, email, subject, message } = getFormData();
  const text = `Halo Dio! Saya ${name} (${email}).\n\n*${subject || 'Pesan dari Portfolio'}*\n\n${message}`;
  const url = `https://wa.me/${MY_WA}?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank');
}