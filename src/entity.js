var Entity = function(texture_path, entityList, stage) {
    this.texture_path = texture_path;
    this.entityList = entityList;
    this.stage = stage;  

  
};

Entity.prototype.onCreate = function() {
  // create a texture from an image path
  this.texture = PIXI.Texture.fromImage(this.texture_path);

  // create a new Sprite using the texture
  this.sprite = new PIXI.Sprite(this.texture);

  console.log("hi");
  this.entityList.push(this);
  this.stage.addChild(this.sprite);
};

Entity.prototype.onLoop = function() {

};

Entity.prototype.OnDelete = function() {

};

