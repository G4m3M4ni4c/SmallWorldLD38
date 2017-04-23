function World(width, height, viewWidth, viewHeight, args) {
  if (args === undefined) args = {};
  this.cameraPos = args.cameraPos === undefined ? createVector(0, 0) : args.cameraPos;
  this.viewWidth = viewWidth;
  this.viewHeight = viewHeight;
  this.width = width;
  this.height = height;
}

World.prototype.getViewPos = function(position) {
  return createVector((position.x % this.width + this.width) % this.width - this.cameraPos.x,
                    (position.y % this.height + this.height) % this.height - this.cameraPos.y);
};

World.prototype.getGlobalPos = function(position) {
  return createVector(position.x + this.cameraPos.x, position.y + this.cameraPos.y);
};
