var Ground = function(texture_path, entityList, container, world) {
  this.texture_path = texture_path;
  this.entityList = entityList;
  //this.stage = stage;
  this.world = world;
  this.name = "Alvin";
  this.container = container;
  this.onCreate(200, 300);
}

Ground.prototype = Object.create(Entity.prototype);

Ground.prototype.onLoop = function() { };

Ground.prototype.onCreate = function(x, y) {
  Entity.prototype.onCreate.call(this, x, y, 0);
}

