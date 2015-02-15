var Player = function(texture_path, entityList, stage) {
  this.texture_path = texture_path;
  this.entityList = entityList;
  this.stage = stage;
  this.name = "Sam";
}

Player.prototype = Object.create(Entity.prototype);

Player.prototype.onLoop = function() {
  console.log("called");
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
  
  Entity.prototype.onCreate.call(this);
  this.sprite.anchor.x = 0.5;
  this.sprite.anchor.y = 0.5;
  this.sprite.position.x = 200;
  this.sprite.position.y = 150;
}

