window.onload = function() {
  
  // create an new instance of a pixi stage
    var stage = new PIXI.Stage(0x66FF99);
 
    // create a renderer instance.
    var renderer = PIXI.autoDetectRenderer(400, 300);
 
    // add the renderer view element to the DOM
    document.body.appendChild(renderer.view);
  
    var worldAABB = new b2AABB();
    worldAABB.minVertex.Set(-1000, -1000);
    worldAABB.maxVertex.Set(1000, 1000);
    // define gravity
    var gravity = new b2Vec2(0, 300);
    // body can sleep
    var doSleep = false;
    // create world
    var world = new b2World(worldAABB, gravity, doSleep);
 
    requestAnimFrame( animate );
 
    // create a texture from an image path
    //var texture = PIXI.Texture.fromImage("bunny.png");
    // create a new Sprite using the texture
    //var bunny = new PIXI.Sprite(texture);
  
    var Entities = [];
    
    var myPlayer = new Player("images/bunny.png", Entities, stage, world);
    //addBody(bunny, 200, 150, 25, 37, 0.5);
  
    console.log(Entities);
  
    // center the sprites anchor point
    //bunny.anchor.x = 0.5;
    //bunny.anchor.y = 0.5;
 
    // move the sprite t the center of the screen
    //bunny.position.x = 200;
    //bunny.position.y = 150;
 
    var timeStep = 1 / 60;
    // how many iteration for collisions calculations
    var iteration = 1;
  
    var grassTexture = PIXI.Texture.fromImage("images/bunny.png");
    // create a new ground sprite using the texture
    var ground = new PIXI.Sprite(grassTexture);  
    addBody(ground, 200, 292, 400, 16);  
    // add body to box2d world
    function addBody(sprite, x, y, width, height, density) {
        var shapeDef = new b2BoxDef();
        shapeDef.extents.Set(width * 0.5, height * 0.5);
        var bodyDef = new b2BodyDef();
        bodyDef.AddShape(shapeDef);
        bodyDef.position.Set(x, y);
        if (density) {
            shapeDef.density = density;
            shapeDef.friction = 0.4;
            shapeDef.restitution = 1.2;
            bodyDef.rotation = 0.8;
        }
        body = world.CreateBody(bodyDef);
        body.m_userData = sprite;
    }  
    
    function animate() {
 
        requestAnimFrame( animate );
 
        for (var i = 0; i < Entities.length; i++) {
          Entities[i].onLoop();
        }
        world.Step(timeStep, iteration);
        draw();
        // render the stage   
        renderer.render(stage);
    }
      function draw() {
        var body, sprite;
        //console.log("hi");
        for (body = world.m_bodyList; body; body = body.m_next) {
            sprite = body.GetUserData();
            if (sprite) {
                sprite.position = body.GetCenterPosition();
                //console.log(sprite.position);
                sprite.rotation = body.GetRotation();
            }
        }
    }
  
}