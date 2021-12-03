function setup() { 
  createCanvas(windowWidth, windowHeight, WEBGL);
  
  // the simplest method to enable the camera
  createEasyCam();

  // suppress right-click context menu
  document.oncontextmenu = function() { return false; }
} 

function draw(){
  background(255);
  lights();
  fill(200, 0, 200);
  box(200);
}