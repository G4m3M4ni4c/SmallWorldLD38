function Entity(postion, mass, args) {
  if (args === undefined) args = {};
  this.position = position;
  this.mass = mass;
  this.velocity = args.velocity === undefined ? createVector(0, 0) : args.velocity;
}
