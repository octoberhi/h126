song1=0;
song2=0;
function setup()
{
canvas = createCanvas(700,450);
canvas.center();
video = createCapture(VIDEO);
video.hide();
}


function draw()
{
image(video, 0,0,700,450);
}