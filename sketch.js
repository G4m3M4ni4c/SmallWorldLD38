function setup() {
  createCanvas(windowWidth, windowHeight);

  this.world = new World(width * 10, height * 10, width, height);
  

  this.backStars = [];
  this.minBrightness = 150;
  randomSeed((new Date()).getMilliseconds());
  for (var i = 0; i < 200; i++) {
    this.backStars.push([createVector(random(width), random(height), random(0.2, 0.8)), createVector(random(5), random(255 - this.minBrightness))]);
  }
}

function draw() {
  background(0);

  push();

  this.backStars.forEach(function(i) {
    strokeWeight((2 + i[1].x) * i[0].z);
    stroke(i[1].y + this.minBrightness);
    point(((i[0].x - this.world.cameraPos.x * i[0].z) % width + width) % width, ((i[0].y - this.world.cameraPos.y * i[0].z) % height + height) % height);
  });

  pop();

  this.world.cameraPos.add(createVector(1, 2))
}
