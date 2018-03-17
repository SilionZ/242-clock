/*
 * us p5.js to draw a clock on a 960x500 canvas
 */ 
function draw_clock(obj) {
    // draw your own clock here based on the values of obj:
    //    obj.hours goes from 0-23
    //    obj.minutes goes from 0-59
    //    obj.seconds goes from 0-59
    //    obj.millis goes from 0-1000
    //    obj.seconds_until_alarm is:
    //        < 0 if no alarm is set
    //        = 0 if the alarm is currently going off
    //        > 0 --> the number of seconds until alarm should go off
}
var img;  // Declare variable 'img'.

function setup() {
  createCanvas(720, 400);
  img = loadImage("round.png");  // Load the image
}

function draw() {
  // Displays the image at its actual size at point (0,0)
  image(img, 0, 0);
}
