class particle {
  constructor(x, y) {
    this.pos = createVector(floor(x), floor(y));
    this.vel = createVector(0, 0);
    this.done = false;
    this.size = 5;
  }

  initPos() {
    let r = floor(random(0, 4));
    if (r == 0) this.pos = createVector(10, random(height));
    if (r == 1) this.pos = createVector(width - 10, random(height));
    if (r == 2) this.pos = createVector(random(width), 10);
    if (r == 3) this.pos = createVector(random(width), height - 10);
    this.pos = createVector(floor(this.pos.x), floor(this.pos.y));
  }

  update() {
    if (this.done) return;
    let range = 10;
    //console.log(random(-1,1));
    let xOff = random(-1, 1) * range;
    let yOff = random(-1, 1) * range;
    this.vel.x = xOff;
    this.vel.y = yOff;
    this.pos.add(this.vel);
    this.pos.x=floor(this.pos.x);
    this.pos.y=floor(this.pos.y);
    if (!this.check(this.pos.x, this.pos.y)) {
      this.initPos();
    }
    if (this.collides()) this.setDone();
  }

  show() {
    strokeWeight(this.size);
    point(this.pos.x, this.pos.y);
  }

  collides() {
    /*if (!this.check(this.pos.x, this.pos.y)) {
      this.pos.x = -width * 10;
      this.pos.y = -height * 10;
      this.done = true;
      return true;
    }*/
    return occupied[this.pos.x][this.pos.y];
  }

  distSq(a, b, c, d) {
    return (a - c) * (a - c) + (b - d) * (b - d);
  }

  setDone() {
    this.done = true;
    for (let i = 0; i < this.size; i++)
      for (let j = 0; j < this.size; j++)
        if (i * i + j * j < this.size * this.size) {
          //console.log(this.pos.x,this.pos.y,i,j);
          if (this.check(this.pos.x + i, this.pos.y + j)) occupied[this.pos.x + i][this.pos.y + j] = true;
          if (this.check(this.pos.x - i, this.pos.y + j)) occupied[this.pos.x - i][this.pos.y + j] = true;
          if (this.check(this.pos.x + i, this.pos.y - j)) occupied[this.pos.x + i][this.pos.y - j] = true;
          if (this.check(this.pos.x - i, this.pos.y - j)) occupied[this.pos.x - i][this.pos.y - j] = true;
        }
  }

  check(a, b) {
    if (a <= 0 || b <= 0 || a >= width || b >= height) return false;
    return true;
  }
}