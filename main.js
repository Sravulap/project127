music_file1 = "";
music_file2 = "";

function preload(){
    music_file1 = loadSound("music.mp3");
    music_file2 = loadSound("music2.mp3");
}

function setup(){
    canvas = createCanvas(500,400);
    canvas.position(450, 220);

    video = createCapture(VIDEO);
    video.hide();
    video.size(500,400);
}

function draw(){
    image(video, 0, 0, 500, 400);
}