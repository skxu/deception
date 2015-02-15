window.onload = function() {

    // create an new instance of a pixi stage
    var stage = new PIXI.Stage(0x66FF99);
    // create a renderer instance.
    var renderer = PIXI.autoDetectRenderer(1280, 720);
    // add the renderer view element to the DOM
    document.body.appendChild(renderer.view);
    
    // Box2D Parameters
    var worldAABB = new b2AABB();
    worldAABB.minVertex.Set(-1000, -1000);
    worldAABB.maxVertex.Set(1000, 1000);
    // define gravity
    var gravity = new b2Vec2(0, 600);
    // body can sleep
    var doSleep = false;
    // create world
    var world = new b2World(worldAABB, gravity, doSleep);
    // frame duration
    var timeStep = 1 / 60;
    // how many iteration for collisions calculations
    var iteration = 1;

    // Game Parameters
    var entityList = [];
    var entityContainer = new PIXI.DisplayObjectContainer();
    var mask;
    var myPlayer;
  
    function loadAllAssets() { 
        var assetsToLoad = ["images/bunny.png"];
        // create a new loader
        loader = new PIXI.AssetLoader(assetsToLoad);
        // use callback
        loader.onComplete = onAssetsLoaded
        // begin load
        loader.load();
    } 
    
    function onAssetsLoaded () {
        
        
      
        
        
        var fogTexture = new PIXI.Texture.fromImage("images/darkness.jpg");
        var fogSprite = new PIXI.Sprite(fogTexture);
        stage.addChild(fogSprite);
      
        var backgroundTexture = new PIXI.Texture.fromImage("images/real_background.jpg");
        var backgroundSprite = new PIXI.Sprite(backgroundTexture);
        entityContainer.addChild(backgroundSprite);
      
        myPlayer = new Player("images/bunny.png", entityList, entityContainer, world);
        var myGround = new Ground("images/bunny.png", entityList, entityContainer, world);
      
        mask = new PIXI.Graphics();
        stage.addChild(entityContainer);
        mask.lineStyle(0);
        entityContainer.mask = mask;
        
        
        requestAnimFrame( animate );
    }
    
    loadAllAssets();
    
  
  
    function animate() {
      
        requestAnimFrame( animate );
 
        for (var i = 0; i < entityList.length; i++) {
          entityList[i].onLoop();
        }
        
        mask.clear();
        mask.beginFill(0x8bc5ff, 0.4);
        mask.drawCircle(myPlayer.sprite.position.x,myPlayer.sprite.position.y,75);
        //mask.rotation = count * 0.1;

        world.Step(timeStep, iteration);
 
        // render the stage   
        renderer.render(stage);
    }
    
}