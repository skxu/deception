window.onload = function() {

    // create an new instance of a pixi stage
    var stage = new PIXI.Stage(0x66FF99);
    // create a renderer instance.
    var renderer = PIXI.autoDetectRenderer(400, 300);
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
    var Entities = [];
    
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
        var myPlayer = new Player("images/bunny.png", Entities, stage, world);
        var myGround = new Ground("images/bunny.png", Entities, stage, world);
        requestAnimFrame( animate );
    }
    
    loadAllAssets();
    
    function animate() {
 
        requestAnimFrame( animate );
 
        for (var i = 0; i < Entities.length; i++) {
          Entities[i].onLoop();
        }
        
        world.Step(timeStep, iteration);
 
        // render the stage   
        renderer.render(stage);
    }
    
}