import * as PIXI from 'pixi.js';
import imageCat from './images/cat.png';
import imageTileSet from './images/tileset.png';

//Aliases
let Application = PIXI.Application,
    loader = PIXI.loader,
    resources = PIXI.loader.resources,
    Sprite = PIXI.Sprite,
    Rectangle = PIXI.Rectangle,
    TextureCache = PIXI.utils.TextureCache;

//Create a Pixi Application
let app = new Application({
        width: 512,
        height: 512,
        antialias: true,
        transparent: false,
        resolution: 1
    }
);

//Add the canvas that Pixi automatically created for you to the HTML document
document.body.appendChild(app.view);

//load an image and run the `setup` function when it's done
loader
    .add(imageTileSet)
    .load(setup);

//This `setup` function will run when the image has loaded
function setup() {

    //Create the `tileset` sprite from the texture
    let texture = TextureCache[imageTileSet];

    //Create a rectangle object that defines the position and
    //size of the sub-image you want to extract from the texture
    //(`Rectangle` is an alias for `PIXI.Rectangle`)
    let rectangle = new Rectangle(192, 128, 64, 64);

    //Tell the texture to use that rectangular section
    texture.frame = rectangle;

    //Create the sprite from the texture
    let rocket = new Sprite(texture);

    //Position the rocket sprite on the canvas
    rocket.x = 32;
    rocket.y = 32;

    //Add the rocket to the stage
    app.stage.addChild(rocket);

    //Render the stage   
    renderer.render(stage);
}
