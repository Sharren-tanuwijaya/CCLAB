let t1Image;
let t2Image;
let t3Image;
let t4Image;
let t5Image;
let t6Image;
let t7Image;
let t8Image;
let t9Image;
let t10Image;
let t11Image;
let t12Image;
let t13Image;
let t14Image;
let t15Image;
let t16Image;
let t17Image;
let t18Image;

function preload() {
  t1Image = loadImage("images/t1.jpg");
  t2Image = loadImage("images/t2.jpg");
  t3Image = loadImage("images/t3.jpg");
  t4Image = loadImage("images/t4.jpg");
  t5Image = loadImage("images/t5.jpg");
  t6Image = loadImage("images/t6.jpg");
  t7Image = loadImage("images/t7.jpg");
  t8Image = loadImage("images/t8.jpg");
  t9Image = loadImage("images/t9.jpg");
  t10Image = loadImage("images/t10.jpg");
  t11Image = loadImage("images/t11.jpg");
  t12Image = loadImage("images/t12.jpg");
  t13Image = loadImage("images/t13.jpg");
  t14Image = loadImage("images/t14.jpg");
  t15Image = loadImage("images/t15.jpg");
  t16Image = loadImage("images/t16.jpg");
  t17Image = loadImage("images/t17.jpg");
  t18Image = loadImage("images/t18.jpg");

}

function setup() {
    let cnv = createCanvas(1500,1000);
    cnv.parent("canvasWrapper")
    cnv.position(0,80);
    cnv.style('z-index','-1');
 
}

function draw() {
  background(137,212,249);

 

let msSinceStartofsketch = millis();


if (msSinceStartofsketch >= 1000) {
  image(t1Image, 25, 43, 200, 200);
  image(t7Image, 1225, 20, 250, 200);
 
}
if (msSinceStartofsketch >= 2000) {
 image(t2Image, 235, 249, 200, 200);
 image(t8Image, 1000, 91, 250, 200);

}
if (msSinceStartofsketch >= 3000) {
    image(t3Image, 36, 500, 200, 200);
    image(t9Image, 1243, 272, 250, 200);

   }
if (msSinceStartofsketch >= 4000) {
    image(t4Image, 245, 55, 200, 200);
    image(t10Image, 1016, 475, 250, 200);

   }
if (msSinceStartofsketch >= 5000) {
    image(t5Image, 40, 252, 200, 250);
    image(t11Image, 1014, 298, 250, 200);

   }
if (msSinceStartofsketch >= 6000) {
    image(t6Image, 229, 463, 200, 250);
    image(t12Image, 1264, 480, 250, 250);

   }
   if (msSinceStartofsketch >= 7000) {
    image(t13Image, 61, 701, 200, 270);
    image(t14Image, 1017, 680, 230, 200);
 
   }
   if (msSinceStartofsketch >= 8000) {
    image(t15Image, 278, 724, 250, 200);
    image(t16Image, 1242, 733, 250, 230);
 
   }
   if (msSinceStartofsketch >= 9000) {
    image(t17Image, 535, 713, 250, 220);
    image(t18Image, 796, 712, 220, 250);
 
   }

fill(0);
// showing the coordinates of x and y on the canvas
text("x:" + mouseX + "y:" + mouseY, mouseX, mouseY);

}


