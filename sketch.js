var form;

var database;
var voter;
var voterCount = 0;

function setup() {
  createCanvas(displayWidth,displayHeight);
  database = firebase.database();

  form = new Form();
  form.display();

  voter = new UserData();
  voter.getCount();
}

function draw() {
  background(255,255,255);  
}