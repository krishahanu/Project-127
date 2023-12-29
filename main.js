song_1 = "";
song_2 = "";

function setup()
{
    canvas = createCanvas(500,250);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function preload()
{
    song_1 = loadSound("music.mp3");
    song_2 = loadSound("music2.mp3");
}

function draw()
{
    Image(video , 0 , 0 , 600 ,500);
}