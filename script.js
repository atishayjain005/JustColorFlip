const colorValue = document.getElementById('color-value');
const flipButton = document.getElementById('flip-Btn');

function flipColor() {
  const channels = Array.from({ length: 3 }, () => Math.floor(Math.random() * 256));
  colorValue.textContent = '#' + channels.map(channel => channel.toString(16).padStart(2, '0')).join('').toUpperCase();
  const linear = channels.map(channel => {
    const value = channel / 255;
    return value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
  });
  const luminance = linear[0] * 0.2126 + linear[1] * 0.7152 + linear[2] * 0.0722;
  document.body.style.color = luminance > 0.179 ? '#000000' : '#ffffff';
  document.body.style.backgroundColor = `rgb(${channels.join(',')})`;
}

flipButton.addEventListener('click', flipColor);
