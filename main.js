const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Planet {
  x;
  y;
  px;
  py;
  atmosphere;
  radius;
  size;

  constructor(x, y, size, atmosphere = red, radius = 50) {
    this.px = x;
    this.py = y;
    this.atmosphere = atmosphere;
    this.radius = radius;
    this.size = size;
  }

  move() {
    this.x = this.radius * Math.sin(alpha) + this.px;
    this.y = this.radius * Math.cos(alpha) + this.py;
    alpha += (SPEED_MULT * Math.PI) / 180;
  }

  render(ctx) {
    ctx.beginPath();
    ctx.fillStyle = this.atmosphere;
    ctx.arc(this.x, this.y, this.size, 50, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
  }
}

let x = 0;
let y = 0;

const R = 130;

let alpha = 0;
let SPEED_MULT = 0.6;

const planets = [
  new Planet(200, 200, 30, 'red', 150),
  new Planet(200, 200, 10, 'blue', 200),
  new Planet(200, 200, 20, 'green', 100),
  new Planet(200, 200, 50, 'yellow', 300),
];

let planet;

const render = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();

  for (const planetIndex in planets) {
    planet = planets[planetIndex];
    planet.move();
    planet.render(ctx);
  }

  window.requestAnimationFrame(render);
};

window.requestAnimationFrame(render);
