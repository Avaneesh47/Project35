var form;

var database;
var voter;
var voterCount = 0;

function setup() {
  createCanvas(displayWidth-100,displayHeight);
  database = firebase.database();

  form = new Form();
  form.display();

  voter = new UserData();
  voter.getCount();
}

function draw() {
  background("yellow");  
}