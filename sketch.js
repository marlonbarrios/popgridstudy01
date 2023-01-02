let gridSize;;
let canvas;
let cellSize = 10;

let patterns = [
  [pattern1, 2],
  [pattern2, 2],
  [pattern3, 10],
  [pattern4, 10],
  [pattern4, 1],
  [pattern4, 1]
];

function setup() {

  mbsFramework();
  credits();

  // angleMode(DEGREES);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  noStroke();
  fill(0);

  gridSize = width / cellSize;

  let margin = gridSize * 0.5;


  for (let x = margin; x < width; x += gridSize) {
    for (let y = margin; y < height; y += gridSize) {
      push();
      translate(x, y);
      drawPattern();
      pop();
    }
  }

  noLoop(); // pause 
}

function drawPattern() {

  strokeWeight(gridSize * 0.1);

  let raffle = [];
  for (let pattern of patterns) {
    // pattern[0] --> function 
    // pattern[1] --> number of tickets! (or probability)

    for (let i = 0; i < pattern[1]; i++) {
      raffle.push(pattern[0]);
    }
  }

  let selectedPattern = random(raffle);
  selectedPattern();
}

function mousePressed() {
  loop(); // unpause
}

function pattern1() {
  fill(0)
  rectMode(CENTER)
  rect(0, 0, gridSize, gridSize)
  fill(255)
  circle(0, 0, gridSize / 2)
}

function pattern2() {
  fill(255)
  rectMode(CENTER)
  rect(0, 0, gridSize, gridSize)
  fill(0)
  circle(0, 0, gridSize / 2)
}

function pattern3() {
  rectMode(CENTER)
  fill(0)
  rect(0, 0, gridSize, gridSize)
}

function pattern4() {
  rectMode(CENTER)
  fill(255)
  rect(0, 0, gridSize, gridSize)
}

function pattern5() {
  fill(0)
  circle(0, 0, gridSize / 2, gridSize / 2)
}

function pattern6() {
  fill(255)
  circle(0, 0, gridSize / 2, gridSize / 2)
}


function keyPressed() {
  let m = month();
  let d = day();
  let y = year();
  let t = hour() + ':' + minute();
  if (key == 'S' || key == 's')
    saveCanvas(canvas, 'canvas' + m + d + y + t, 'png');
}



function windowResized() {
  const windowWidth = window.innerWidth;
  if (windowWidth < 900) {
    resizeCanvas(windowWidth * 0.85, windowWidth * 0.85);
    canvas.style("margin", "auto");
    canvas.style("margin-top", "10%");

  } else {
    resizeCanvas(windowWidth, windowWidth);
  }

}

function mbsFramework() {
  //template for canvas while printing and exporting/exhition on web/minimal
  canvas = createCanvas(1024, 1024); // will export as 512x512
  canvas.style("margin", "auto");
  canvas.style("margin-top", "5%");
  canvas.style("display", "flex");
  canvas.style("justify-content", "center");
  canvas.style("align-items", "center");
  canvas.style("border-radius", "10px");
  canvas.style("position", "relative");
  canvas.style("box-shadow", "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)");
  canvas.style("zoom", "0.5");
  canvas.style('dpi', '300');
  canvas.style('bleed', '1/8');
  cursor(CROSS);
}

function credits() {
  //credits
  createP("Pop Grid Study 01");
  createP("Grid with 6 patters with probabilistic framework (lottery), Click on canvas to get a different configurations.");
  createP("Press 's' to save a png image");
  var link = createA("https://marlonbarrios.github.io/", "Programmed by Marlon Barrios Solano");

  createElement('title', 'Pop Grid Study 01')

  var allPs = selectAll("p")
  for (var i = 0; i < allPs.length; i++) {
    allPs[i].style("font-family", "Helvetica");
    allPs[i].style("justify-content", "center");
    allPs[i].style("align-items", "center");
    allPs[i].style("position", "relative");
    allPs[i].style("text-align", "center");
    allPs[i].style("display", "flex");
    allPs[i].style("font-size", "15px");
    allPs[i].style("color", "black");
    allPs[i].style("margin", "8px");
  }

  link.style("font-family", "Helvetica");
  link.style("justify-content", "center");
  link.style("align-items", "center");
  link.style("position", "relative");
  link.style("text-align", "center");
  link.style("display", "flex");
  link.style("font-size", "15px");
  link.style("color", "black");
  link.style("text-decoration", "none");
}


