function setup() {
   createCanvas(600, 600); 
}

function draw() {
    background(255, 0, random(180));
    //elipse//
    fill(70, 0, 250);
    noStroke();
    ellipse(300, 60, 200, 20000);
    //arco//
    fill(210);
    noStroke();
    arc(300, 220, 270, 330, 2.83, 0.28, PIE);
    //triangulo//
    fill(255);
    strokeWeight(0);
    triangle(width/2, 100, 100, 500, 500, 500);
    //cuadrilatero//
    strokeWeight(0);
    fill(random(100), 0, 100, 200);
    noStroke();
    quad(180, 220, 360, 270, 450, 450, 260, 320);
  }