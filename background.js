const canvas = document.getElementById('bg');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let time = 0;

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < canvas.height; i += 3) {
    let wave = Math.sin(i * 0.01 + time) * 30;
    let wave2 = Math.cos(i * 0.02 + time * 1.2) * 40;
    let x = canvas.width / 2 + wave + wave2;

    let gradient = ctx.createLinearGradient(0, i, canvas.width, i);
    gradient.addColorStop(0, "rgba(219, 122, 178, 0)");
    gradient.addColorStop(0.33, "rgba(106, 57, 201, 0.2)");
    gradient.addColorStop(0.66, "rgba(173, 205, 212, 0.2)");
    gradient.addColorStop(1, "rgba(219, 122, 178, 0)");

    ctx.fillStyle = gradient;
    ctx.fillRect(x - 100, i, 200, 2);
  }

  time += 0.02;
  requestAnimationFrame(animate);
}

animate();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

