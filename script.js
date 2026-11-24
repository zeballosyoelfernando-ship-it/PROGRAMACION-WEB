document.addEventListener('DOMContentLoaded', () => {
  console.log('VetClínica: Archivos HTML, CSS y JS cargados correctamente.');

  const botones = document.querySelectorAll('.btn');

  botones.forEach((boton) => {
    boton.addEventListener('click', () => {
      alert(`Botón "${boton.textContent}" presionado. (Prototipo visual de avance)`);
    });
  });
});