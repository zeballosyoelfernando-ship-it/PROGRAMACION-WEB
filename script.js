document.addEventListener('DOMContentLoaded', () => {
  console.log('VetClinica: Archivos HTML, CSS y JS cargados correctamente.');

  const botones = document.querySelectorAll('.btn');

  botones.forEach((boton) => {
    boton.addEventListener('click', () => {
      alert(`Boton "${boton.textContent}" presionado. (Prototipo visual de avance)`);
    });
  });
});