canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");

var rover_x = 10;
var rover_y = 10;
var rover_width = 100;
var rover_height = 90;
var background_image_list = [
    "mars.jpg",
    "image1.jpg",
    "image2.jpg",
    "image3.jpg"
 ];

var image_number = Math.floor(Math.random() * 4);
console.log(image_number);
var rover_image = "rover.png";
var background_image = background_image_list[image_number];

function add() {
    backgroundImg = new Image();
    backgroundImg.onload = uploadbackground;
    backgroundImg.src = background_image;

    roverImg = new Image();
    roverImg.onload = uploadrover;
    roverImg.src = rover_image;
}

function uploadbackground() {
    ctx.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
    ctx.drawImage(roverImg, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if(keyPressed == "38") {
        up();
        console.log("up");
    }

    if(keyPressed == "40") {
        down();
        console.log("down");
    }

    if(keyPressed == "37") {
        left();
        console.log("left");
    }

    if(keyPressed == "39") {
        right();
        console.log("right");
    }
}

function up() {
    if(rover_y >= 0) {
        rover_y = rover_y - 10;
        console.log("When up arrow key was pressed: X = " + rover_x + " | y = " + rover_y);
        uploadbackground();
        uploadrover();
    }
}

function down() {
    if(rover_y <= 500) {
        rover_y = rover_y + 10;
        console.log("When down arrow key was pressed: X = " + rover_x + " | y = " + rover_y);
        uploadbackground();
        uploadrover();
    }
}

function left() {
    if(rover_x >= 0) {
        rover_x = rover_x - 10;
        console.log("When up left key was pressed: X = " + rover_x + " | y = " + rover_y);
        uploadbackground();
        uploadrover();
    }
}

function right() {
    if(rover_x <= 700) {
        rover_x = rover_x + 10;
        console.log("When right arrow key was pressed: X = " + rover_x + " | y = " + rover_y);
        uploadbackground();
        uploadrover();
    }
}