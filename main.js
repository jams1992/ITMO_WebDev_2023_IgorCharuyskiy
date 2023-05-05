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
  alpha;
  speed;

  constructor(x, y, speed = 0.1, size, atmosphere = red, radius = 50) {
    this.px = x;
    this.py = y;
    this.atmosphere = atmosphere;
    this.radius = radius;
    this.size = size;
    this.speed = speed;
    this.alpha = 0;
  }

  move() {
    this.x = this.radius * Math.sin(this.alpha) + this.px;
    this.y = this.radius * Math.cos(this.alpha) + this.py;
    alpha += (this.speed * Math.PI) / 180;
  }

  render(ctx) {
    ctx.beginPath();
    ctx.fillStyle = this.atmosphere;
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
  }
}

//let x = 0;
//let y = 0;

//const R = 130;

//let alpha = 0;
//let SPEED_MULT = 0.6;

const planets = [
  new Planet(200, 200, 0.1, 30, 'red', 150),
  new Planet(200, 200, 0.2, 10, 'blue', 200),
  new Planet(200, 200, 0.3, 20, 'green', 100),
  new Planet(200, 200, 0.4, 50, 'yellow', 300),
];

let planet;

const render = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (const planetIndex in planets) {
    planet = planets[planetIndex];
    planet.move();
    planet.render(ctx);
  }

  window.requestAnimationFrame(render);
};

window.requestAnimationFrame(render);
