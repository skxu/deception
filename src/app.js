window.onload = function() {
  
  // create an new instance of a pixi stage
    var stage = new PIXI.Stage(0x66FF99);
 
    // create a renderer instance.
    var renderer = PIXI.autoDetectRenderer(400, 300);
 
    // add the renderer view element to the DOM
    document.body.appendChild(renderer.view);
 
    requestAnimFrame( animate );
 
    // create a texture from an image path
    var texture = PIXI.Texture.fromImage("bunny.png");
    // create a new Sprite using the texture
    var bunny = new PIXI.Sprite(texture);
 
    // center the sprites anchor point
    bunny.anchor.x = 0.5;
    bunny.anchor.y = 0.5;
 
    // move the sprite t the center of the screen
    bunny.position.x = 200;
    bunny.position.y = 150;
 
    stage.addChild(bunny);
    
    function animate() {
 
        requestAnimFrame( animate );
 
        // just for fun, lets rotate mr rabbit a little
        //bunny.rotation += 10.0;
        if (Key.isDown(Key.UP)) {
            bunny.position.y -= 5;
        }
        if (Key.isDown(Key.DOWN)) {
            bunny.position.y += 5;
        }
        if (Key.isDown(Key.LEFT)) {
            bunny.position.x -= 5;
        }
        if (Key.isDown(Key.RIGHT)) {
            bunny.position.x += 5;
        }
 
        // render the stage   
        renderer.render(stage);
    }
}