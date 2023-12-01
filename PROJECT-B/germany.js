// let beerImage;
// // let glass;
let berlinerImage;
let pretzelsImage;
let bratwurstImage;
let rouladenImage;
let blutwurstImage;



function preload() {
    // beerImage = loadImage("images/beer.png");
    berlinerImage = loadImage("images/berliner.png");
     pretzelsImage= loadImage("images/pretzels.png");
bratwurstImage= loadImage("images/bratwurst.png");
rouladenImage= loadImage("images/rouladen.png");
 blutwurstImage= loadImage("images/blutwurst.png");

    // glass = new Glass;

  
  
  }
  
  function setup() {
    let cnv = createCanvas(1450,700);
    cnv.parent("canvasWrapper");
    cnv.position(0,200);
    cnv.style('z-index','-1');
  
  }
  
  function draw() {
    background(200);

    // image(beerImage, 90, 100, 360, 400);
    image( berlinerImage, 450, 40, 260, 300);
    image(pretzelsImage, 700, 40,  260, 300);
    image(rouladenImage, 950, 40, 260, 300);
    image(blutwurstImage, 1200, 40, 260, 300);

    fill(0);
    rect(170,320,90,120);
    fill(255);
    rect(175,320,80,109);

    push();
    fill(0);
      stroke(168, 52, 125);
      textSize(30);
      strokeWeight(4);
      text("WHERE TO GO", 500, 400);
      pop();

      push();
      fill(0);
        stroke(168, 52, 125);
        textSize(30);
        strokeWeight(4);
        text("FOOD", 500, 90);
        pop();

  }


//   function Glass(){

//     fill(0);
//     rect(100,100,20,40);
    

//   }

  
  
 