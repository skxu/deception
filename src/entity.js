var Entity = function(texture_path, entityList, stage, world) {
    this.texture_path = texture_path;
    this.entityList = entityList;
    this.stage = stage;
    this.world = world;
    this.onCreate();
};

Entity.prototype.onCreate = function(x, y, density) {
    // create a texture from an image path
    this.texture = PIXI.Texture.fromImage(this.texture_path);

    // create a new Sprite using the texture
    this.sprite = new PIXI.Sprite(this.texture);
    
    this.sprite.anchor.x = 0.5;
    this.sprite.anchor.y = 0.5;
    this.sprite.position.x = x;
    this.sprite.position.y = y;

    this.entityList.push(this);
    this.stage.addChild(this.sprite);
    
    // Add a bounding box
    this.addBoundingBox(density);
};

Entity.prototype.addBoundingBox = function(density) {
    var shapeDef = new b2BoxDef();
    shapeDef.extents.Set(this.sprite.width * 0.5, this.sprite.height * 0.5);
    this.bodyDef = new b2BodyDef();
    this.bodyDef.AddShape(shapeDef);
    shapeDef.density = density;
    this.bodyDef.position.Set(this.sprite.position.x, this.sprite.position.y);
    this.body = this.world.CreateBody(this.bodyDef);
};

Entity.prototype.onLoop = function() {
    this.sprite.position = this.body.GetCenterPosition();
    this.sprite.rotation = this.body.GetRotation();
};

Entity.prototype.OnDelete = function() {

};

