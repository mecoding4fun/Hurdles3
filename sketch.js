var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var hurdle1, hurdle2;
var form, player, game;

var cars, car1, car2, car3, car4;
var c1Img,c2Img,c3Img,c4Img;
var track;
var h1Img,h2Img;

function preload(){
  track = loadImage("1.png");
  c1Img = loadImage("car1.png");
  c2Img = loadImage("car2.png");
  c3Img = loadImage("car3.png");
  c4Img = loadImage("car4.png");
  h1Img = loadImage("hur.jpg");
  h2Img = loadImage("hello.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
