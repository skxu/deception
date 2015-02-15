var Player = function(texture_path, entityList, container, world) {
  this.texture_path = texture_path;
  this.entityList = entityList;
  //this.stage = stage;
  this.world = world;
  this.name = "Sam";
  this.container = container;
  this.onCreate();
}

Player.prototype = Object.create(Entity.prototype);

Player.prototype.onLoop = function() {
  Entity.prototype.onLoop.call(this);
  if (Key.isDown(Key.UP)) {
      this.sprite.position.y -= 5;
  }
  if (Key.isDown(Key.DOWN)) {
      this.sprite.position.y += 5;
  }
  if (Key.isDown(Key.LEFT)) {
      this.sprite.position.x -= 5;
  }
  if (Key.isDown(Key.RIGHT)) {
      this.sprite.position.x += 5;
  }
};


Player.prototype.onCreate = function() {
  Entity.prototype.onCreate.call(this, 200, 150, 0.5);
}

