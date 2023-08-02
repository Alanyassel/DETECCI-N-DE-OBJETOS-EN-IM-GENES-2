body
{
    background-size: cover;
    background-position: center;
}

canvas
{
    box-shadow: 10px 10px 10px grey;
    border-radius: 10px;
}

function setup() {
    canvas = createCanvas(640,420);
    canvas.center();
}

img = "background.jpg";

function preload(){

}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center(); 
}

function draw() {
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("Dog", 45, 75);
    noFill();
    stroke("#FF0000");
    rect(30, 60, 450, 350 );

    fill("#FF0000");
    text("Cat", 320, 120);
    noFill();
    stroke("#FF0000");
    rect(300, 90, 270, 320 );
}