let NUM_OF_SNOW = 100; 
let snow = [];

let norwayImage;
let norwayImage2;
let norwayImage3;
let norwayImage4;

function preload() {
  norwayImage = loadImage("images/lofoten.jpeg");
  norwayImage2 = loadImage("images/northern.jpeg");
  norwayImage3 = loadImage("images/bergen.jpeg");
  norwayImage4 = loadImage("images/geiranger.jpeg");
   
    
  
  
  }
  
  function setup() {
    let cnv = createCanvas(1450, 1000);
  cnv.parent("canvasWrapper");
  cnv.position(0,0);
  cnv.style('z-index','-1');
  
  for (let i = 0; i < NUM_OF_SNOW; i++) {
    snow[i] = new Snow(random(0,1400),0, random(10,28),random(-1,2),random(1.5,3),);
  
  }
 
  
  }
  
  function draw() {
    background(137, 212, 249);

    for (let i = 0; i < snow.length; i++) {
      let s = snow[i];
      s.update();
      s.display();
    }

     fill(255);
      stroke(168, 52, 125);
      strokeWeight(4);
      text("LOFOTEN", 180, 500);
    image(norwayImage, 100, 180, 260, 300);

    fill(255);
      stroke(168, 52, 125);
      strokeWeight(4);
      text("NOTHERN NORWAY", 1050, 500);
    image(norwayImage2, 1000, 180, 260, 300);
  
    fill(255);
      stroke(168, 52, 125);
      strokeWeight(4);
      text("BERGEN", 500, 500);
    image(norwayImage3, 400, 180, 260, 300);

    fill(255);
      stroke(168, 52, 125);
      strokeWeight(4);
      text("GEIRANGERFJORD", 780, 500);
    image(norwayImage4, 700, 180, 260, 300);

push();
    fill(255);
      stroke(168, 52, 125);
      textSize(30);
      strokeWeight(4);
      text("WHERE TO GO", 100, 170);
      pop();
    
  }

class Snow {

  constructor(startX,startY,dia,speedX,speedY) {
    this.x = startX;
    this.y = startY;
    this.dia = dia;
    this.speedY=speedY;
    this.speedX=speedX
  }

  update() {
    this.y = this.y + this.speedY;
    this.x=this.x+this.speedX * 0.8;

    if(this.y>=1000){
      this.y=0

      
    }
    
  }

  display() {

    noStroke();
    circle(this.x,this.y,this.dia);


  
  }


}


  
  
 