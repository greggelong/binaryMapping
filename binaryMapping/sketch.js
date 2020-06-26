let cirL = 200;
let count = 0;




function setup() {
  createCanvas(600, 500);
  background(0);
  stroke(255, 0, 0);
  strokeWeight(1);
  noFill();
  textSize(40);
  frameRate(3);
  drawcircle(width / 2, height / 4, 200);
}


// recursive function
function drawcircle(x, y, sz) {

  ellipse(x, y, sz);
  if (sz > 10) {
    drawcircle(x + (sz / 2), y, sz / 2);
    drawcircle(x - (sz / 2), y, sz / 2);
     
  }
}


function draw() {
  background(0);
  // translate(width/2,height/2);
  strokeWeight(3);
  branch(frameCount % 64, 200);
  //branch(floor(random(1,511)),75);
  //print(count,frameCount);
  strokeWeight(2);
  drawcircle(width / 2, height / 4, 200)
}


function branch(targetNumber, cirL) {

  /*
  In computer science the topic of recursion is often collocated with phrases like 'leap of faith' or words like 'magic'. And it is easy to see why, as recursion can in a few lines of code in a well designed function solve problems like, towers of Hanoi or draw complicated images like the nested circles in red above. The problem is that these functions are a back box during the processing. Things are put on the stack and taken off and returned and you don't have access to them until the end. That means for creative visualization you can't show the animation.
Here I am using a binary mapping technique to draw the nested circles without recursion. The function is more complicated but you can animate it. The function takes in an integer, converts it to a binary string, then splits it to an array. I use that array to plot circles according to simple rules. the initial 1 is the center circle, if the next digit is zero plot a circle to the left or if that digit is one plot a circle to the right. Then repeat for the rest of the array. For example, 5 in binary is 101 so plot the center circle, then since the next digit is 0 plot a smaller circle to the left, finally the last digit is 1 so plot a smaller circle to the right. Continue this process 64 times and you create the nested circle image! #creativecoding #P5js #coding #computerscience #recursion
  */

  let binString = targetNumber.toString(2); // eg. 30 to '11110'
  let binArr = binString.split(""); // eg. '11110' to [1,1,1,1,0]
  binArr.shift(); // take off the first element it will always be 1 and the first circle will be set directly
  push()
  // place the first circle in center of screen
  translate(width / 2, height-height / 4); // move to the middle of screen 
  strokeWeight(3);
  count = count + 1 // increace the circle count
  stroke(random(25), random(255),random(255));
  //fill(255, 255, 0, 50);
  ellipse(0, 0, cirL); // gets x and y its postion from translate
  stroke(0, 255, 0);
  //text(count, 0, 0); //

  for (const i of binArr) { // loops through the array


    if (i === "0") { //  
      let newLen = cirL / 2 // divide the diameter by 2
      // **** place a circle to the left

      translate(-cirL / 2, 0); // need the old length to move to left of the previous circle


      strokeWeight(3);
      count = count + 1 // increace the circle count
      stroke(random(25), random(255),random(255));
      //fill(255, 255, 0, 10);
      ellipse(0, 0, newLen); // gets x and y its postion from translate


    } else {
      //*** place a circle to the right
      let newLen = cirL / 2 // divide circle diameter by 2

      translate(cirL / 2, 0); // need the old length to move to left  of the previous circle


      strokeWeight(3);
      count = count + 1 // increace the circle count
      stroke(random(25), random(255),random(255));
      //fill(255, 255, 0, 10);
      ellipse(0, 0, newLen, newLen); // gets x and y its postion from translate

    }
    cirL /= 2;
  }
  stroke(random(255), random(255),random(255));

  text(targetNumber, cirL, 0);
  text(targetNumber.toString(2),-70,-100);
  count = 0;
  
  pop();
}
