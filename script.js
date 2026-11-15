const flipButton = document.getElementById('flip-Btn');

function flipColor() {
  const channels = Array.from({ length: 3 }, () => Math.floor(Math.random() * 256));
  document.body.style.backgroundColor = `rgb(${channels.join(',')})`;
}

flipButton.addEventListener('click', flipColor);
