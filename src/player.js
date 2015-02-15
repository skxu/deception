var Player = function(texture_path, entityList, stage, world) {
  this.texture_path = texture_path;
  this.entityList = entityList;
  this.stage = stage;
  this.name = "Sam";
  this.bodydef = new b2BodyDef();
  console.log(this.bodydef);
  this.world = world;
  this.body = null;
  this.onCreate();
  this.velocity = null;
}

Player.prototype = Object.create(Entity.prototype);

Player.prototype.onLoop = function() {
  
  this.velocity = this.body.GetLinearVelocity();
  
  if (Key.isDown(Key.UP)) {
      //this.sprite.position.y -= 50;
      this.velocity.y = -50;
  }
  if (Key.isDown(Key.DOWN)) {
      //this.sprite.position.y += 5;
      this.velocity.y = 5;
  }
  if (Key.isDown(Key.LEFT)) {
      //this.sprite.position.x -= 50;
      this.velocity.x = -50;
  }
  if (Key.isDown(Key.RIGHT)) {
      //this.sprite.position.x += 50;
      this.velocity.x = 50;
  }
  
  console.log(this.velocity);
  this.body.SetLinearVelocity(this.velocity);

};


Player.prototype.onCreate = function() {
  Entity.prototype.onCreate.call(this);
  this.sprite.anchor.x = 0.5;
  this.sprite.anchor.y = 0.5;
  this.sprite.position.x = 200;
  this.sprite.position.y = 150;
  
  this.bodydef.position.x = this.sprite.position.x;
  this.bodydef.position.y = this.sprite.position.y;
  //console.log(this.world);
  var shapeDef = new b2BoxDef();
  shapeDef.extents.Set(25 * 0.5, 37 * 0.5);
  this.bodydef.AddShape(shapeDef);
  this.bodydef.position.Set(this.sprite.position.x, this.sprite.position.y);
  shapeDef.density = 0.5;
  shapeDef.friction = 0.4;
  shapeDef.restitution = 1.2;
  this.bodydef.rotation = 0.8;
        
  this.body = this.world.CreateBody(this.bodydef);
  this.body.m_userData = this.sprite;
}

