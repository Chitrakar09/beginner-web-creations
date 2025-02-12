const canvas = document.querySelector("#canvas");

//-------------------editing the canvas------------------
//ctx is context
//The getContext method is used with the <canvas> element to get a drawing area where you can draw shapes, lines, images, or even animations using JavaScript.
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = "#1e90ff";
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 1;

//---------------------declaring initial values for starting of drawing in canvas--------------------
let isdrawing = false;
// initial value from where the stroke starts
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

//---------------------function that makes the drawing possible in canvas--------------------------
const draw = (e) => {
  if (!isdrawing) return; // stop the fn from running when they are not moused down
  console.log(e);
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.beginPath(); // starts a new path by emptying the list of sub-paths. Call this method when you want to create a new path.
  //start from
  ctx.moveTo(lastX, lastY);
  //move to
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke(); //strokes (outlines) the current or given path with the current stroke style.
  //denotes the last position where it stopped and makes it the new position to start from.
  [lastX, lastY] = [e.offsetX, e.offsetY];

  // increments the value of hue to change the colour.
  hue++;
  if (hue >= 360) {
    hue = 0;
  }

  // increasing and decreasing of line width.
  if (ctx.lineWidth >= 30 || ctx.lineWidth <= 1) {
    direction = !direction;
  }
  if (direction) {
    ctx.lineWidth++;
  } else {
    ctx.lineWidth--;
  }
};

//---------------------------Events-----------------------
canvas.addEventListener("mousedown", (e) => {
  isdrawing = true;
  // denotes where the mouseDown was occured and gives that position as initial position
  [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener("mouseup", () => (isdrawing = false));
canvas.addEventListener("mouseleave", () => (isdrawing = false));
canvas.addEventListener("mousemove", draw);
