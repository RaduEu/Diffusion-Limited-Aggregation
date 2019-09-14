let particles = [];
let noParticles = 1;
let maxParticles = 100000;
let speed = 50;
let size = 600;
let occupied = [];

function setup() {
  createCanvas(size, size);
  for (let i = 0; i < size; i++) {
    occupied[i] = [];
    for (let j = 0; j < size; j++) occupied[i][j] = false;
  }
  particles[0] = new particle(20, 20);
  particles[0].setDone();
  //particles[1]=new particle(width/2,10);
  //particles[1].setDone();
  background(50,30,0);
}

function draw() {
  stroke(0,100,0,40);
  //console.log(random(-1,1));
  //console.log(noParticles)
  for (let i = 0; i < speed; i++) {
    if(noParticles>=maxParticles) continue;
    //background(220);
    particles[noParticles] = new particle(0,0);
    particles[noParticles].initPos();
    while (!particles[noParticles].done) particles[noParticles].update();
    particles[noParticles].show();
    noParticles++;
  }
  /*for (let p of particles) {
    p.show();
    // console.log(particles.length);
  }*/
}