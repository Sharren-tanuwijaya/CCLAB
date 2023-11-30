let lukumadesImage;
let saganakiImage;
let athensImage;
let mykonosImage;
let santoriniImage;
 let zakythonosImage;




function preload() {
    lukumadesImage = loadImage("images/lukumades.png");
    saganakiImage = loadImage("images/saganaki.png");

    athensImage= loadImage("images/athens.jpeg");
    mykonosImage= loadImage("images/mykonos.jpeg");
    santoriniImage= loadImage("images/santorini.jpeg");
     zakythonosImage= loadImage("images/zakythonos.jpeg");

    // glass = new Glass;
  }
  
  function setup() {
    let cnv = createCanvas(1450,900);
    cnv.parent("canvasWrapper");
    cnv.position(0,200);
    cnv.style('z-index','-1');
  
  }
  
  function draw() {
    background(124,153,212);

    image(lukumadesImage, 20, 20, 360, 400);
    image(saganakiImage, 350, 90, 260, 300);

    image(athensImage,120, 450, 290, 240);
    image(mykonosImage, 440, 450, 290, 260);
    image(santoriniImage,750, 450, 290, 240);
    image(zakythonosImage,1060, 450, 300, 260);



    push();
    fill(0);
      stroke(168, 52, 125);
      textSize(30);
      strokeWeight(4);
      text("WHERE TO GO", 100, 400);
      pop();

      push();
      fill(0);
        stroke(168, 52, 125);
        textSize(30);
        strokeWeight(4);
        text("FOOD", 100, 90);
        pop();

  }


  
  
 