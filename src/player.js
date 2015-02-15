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
  this.velocity = this.body.GetLinearVelocity();
  if (Key.isDown(Key.UP)) {
      this.velocity.y = -300;
  }
  if (Key.isDown(Key.DOWN)) {
      
  }
  if (Key.isDown(Key.LEFT)) {
      this.velocity.x -= 50;
  }
  if (Key.isDown(Key.RIGHT)) {
      this.velocity.x += 50;
  }
  this.body.SetLinearVelocity(this.velocity);
};


Player.prototype.onCreate = function() {
  Entity.prototype.onCreate.call(this, 200, 150, 200.0);
}

