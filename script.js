// Lógica del modo oscuro
const toggleButton = document.getElementById('toggleMode');
const prefersDark = localStorage.getItem('dark-mode') === 'true';

// Aplicar la preferencia guardada al cargar
if (prefersDark) {
  document.body.classList.add('dark-mode');
  toggleButton.textContent = '☀️';
}

// Alternar entre modos y guardar la preferencia
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const isDark = document.body.classList.contains('dark-mode');
  toggleButton.textContent = isDark ? '☀️' : '🌙';
  localStorage.setItem('dark-mode', isDark);
});
