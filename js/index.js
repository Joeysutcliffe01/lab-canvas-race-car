
// Selectors
const startScreen = document.querySelector(".game-intro");


// variables
let bg;
let car;
let y = 560;
let x = 200;

const carWidth = 90;
const randomSize = Math.floor(Math.random() * (210 - 90 + 1)) + 90;
const randomPosition = Math.floor(Math.random() * (340 - 50 + 1)) + 50;

function setup(){

  const canvas = createCanvas(500, 693)
  canvas.parent = startScreen

  bg = loadImage('../images/road.png');
  car = loadImage('../images/car.png');
  spikes = loadImage('../images/Road Jammer.C01.watermarked.2k.png');

}

function keyPressed(){

  if (keyIsDown(LEFT_ARROW)){
    
    x -= 5;
  }
  
  if (keyIsDown(RIGHT_ARROW)){

    x += 5;
  }

  if (keyIsDown(UP_ARROW)) {
    y -= 5;
  }

  if (keyIsDown(DOWN_ARROW)) {
    y += 5;
  }
  
// console.log(x);
// console.log(y);
}

function collision(){
  // keep inside game bord

  //left and right
  if(x <= 40){
    x = 41
  }

  if(x >= 376){
    x = 375
  }

  //top and bottom
  if(y >= 560){
    y = 560
  }

  if(y <= 13){
    y = 13
  }


  if(y >=randomPosition ){
    // console.log("dead");
  }
}

// function gameOver(){

//   if(spike === car){

//     startScreen.style.display = "unset"
//   }

// }

function draw(){

  background(bg)
  image(car, x, y, carWidth, 130);
  image(spikes, randomPosition, 10, randomSize, 130);

  keyPressed()
  collision()
  spikeDrop()

  // gameOver()
}


window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {

    console.log("hello");
    startScreen.style.display = "none"
  }
  
};

//come back
// carStart.play()
// let carStart = loadSound('../sound/mixkit-car-ignition-1535.wav');