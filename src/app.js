window.onload = function() {
  
  // create an new instance of a pixi stage
    var stage = new PIXI.Stage(0x66FF99);
 
    // create a renderer instance.
    var renderer = PIXI.autoDetectRenderer(400, 300);
 
    // add the renderer view element to the DOM
    document.body.appendChild(renderer.view);
 
    requestAnimFrame( animate );
 
    // create a texture from an image path
    //var texture = PIXI.Texture.fromImage("bunny.png");
    // create a new Sprite using the texture
    //var bunny = new PIXI.Sprite(texture);
  
    var Entities = [];
    
    var myPlayer = new Player("images/bunny.png", Entities, stage);
    myPlayer.onCreate();
  
    console.log(Entities);
  
    // center the sprites anchor point
    //bunny.anchor.x = 0.5;
    //bunny.anchor.y = 0.5;
 
    // move the sprite t the center of the screen
    //bunny.position.x = 200;
    //bunny.position.y = 150;
 
    //stage.addChild(bunny);
    
    function animate() {
 
        requestAnimFrame( animate );
 
        for (var i = 0; i < Entities.length; i++) {
          Entities[i].onLoop();
        }
 
        // render the stage   
        renderer.render(stage);
    }
}