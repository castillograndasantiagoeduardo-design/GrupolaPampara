const caja1 = document.getElementById('caja1');
const caja2 = document.getElementById('caja2');
const caja3 = document.getElementById('caja3');
const caja4 = document.getElementById('caja4');

function Cambiarestilo() {
  const color1 = getComputedStyle(caja1).backgroundColor;
  const color2 = getComputedStyle(caja2).backgroundColor;
  const color3 = getComputedStyle(caja3).backgroundColor;
  const color4 = getComputedStyle(caja4).backgroundColor;

  const texto1 = caja1.textContent;
  const texto2 = caja2.textContent;
  const texto3 = caja3.textContent;
  const texto4 = caja4.textContent;

  caja1.style.backgroundColor = color4;
  caja2.style.backgroundColor = color1;
  caja3.style.backgroundColor = color2;
  caja4.style.backgroundColor = color3;

  caja1.textContent = texto4;
  caja2.textContent = texto1;
  caja3.textContent = texto2;
  caja4.textContent = texto3;
}
function invertirPolaridad() {

  const color1 = getComputedStyle(caja1).backgroundColor;
  const color2 = getComputedStyle(caja2).backgroundColor;
  const color3 = getComputedStyle(caja3).backgroundColor;
  const color4 = getComputedStyle(caja4).backgroundColor;

  const texto1 = caja1.textContent;
  const texto2 = caja2.textContent;
  const texto3 = caja3.textContent;
  const texto4 = caja4.textContent;

  caja4.style.backgroundColor = color1;
  caja1.style.backgroundColor = color2;
  caja2.style.backgroundColor = color3;
  caja3.style.backgroundColor = color4;

  caja4.textContent = texto1;
  caja1.textContent = texto2;
  caja2.textContent = texto3;
  caja3.textContent = texto4;
}