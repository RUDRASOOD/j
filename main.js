song = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
scoreleftWrist = 0;
song1 = "";


function preload()
{
song = loadSound("music.mp3");
song1 = loadSound("music.mp3");

}
function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()  {
    console.log('poseNet is Initialized')
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results)
        scoreLeftWrist = results[0].pose.keypoints[9].score 
        console.log("scoreLeftWrist = " + scoreLeftWrist); 


        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX +"leftWristY = " + leftWristY);


        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.righttWrist.y;
        console.log("rightWristX = " + rightWristX +"rightWristY = " + rightWristY);
    }
}






function draw() {
    image(video, 0, 0, 600, 500);

    songstatus = song.isPlaying();
    song1status = song1.isPlaying();
    fill('black');
    stroke('black');

if(scoreLeftWrist > 0.2)

{
    circle(leftWristX, leftWristY, 20);
    song1.stop();
    if(songstatus == false)
    {
        song1.play();
        document.getElementById("volume").innerHTML = "playing song Harry Potter Theme";
    }
    
}


if(scoreRightWrist > 0.2)

{
    circle(rightWristX, rightWristY, 20);
    song.stop();
    if(songstatus == false)
    {
        song.play();
        document.getElementById("speed").innerHTML = "playing song Harry Potter Theme";
    }
    
}



}






