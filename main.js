leftWrist_x = 0;
leftWrist_y = 0;
rightWrist_x = 0;
rightWrist_y = 0;
leftWrist_score = 0;
sound1= " ";
function preload() {
    sound1 = loadSound("music.mp3");
    // sound2=loadSound("whip-110235.mp3");
    // sound3=loadSound("sound3.mp3")
}
function setup() {
    canvas = createCanvas(500, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on("pose", gotResults);
}
function modelLoaded() {
    console.log("success")
}

function gotResults(results) {
    console.log(results)
    if (results.length > 0) {
        leftWrist_score = results[0].pose.keypoints[9].score;
        leftWrist_x = results[0].pose.leftWrist.x;
        leftWrist_y = results[0].pose.leftWrist.y;
        rightWrist_x = results[0].pose.rightWrist.x;
        rightWrist_y = results[0].pose.rightWrist.y;

        console.log(leftWrist_score);
    }
}
function draw() {
    image(video, 0, 0, 500, 400);
    fill("red");
    stroke("black");
    if (leftWrist_score > 0.2) {
        circle(leftWrist_x, leftWrist_y, 20);
        number_leftWristy = Number(leftWrist_y);
        remove_decimals = floor(number_leftWristy);
        volume = remove_decimals / 400;
        volume_toFixed = volume.toFixed(1);
        document.getElementById("volume_title").innerHTML = "Volume: " + volume_toFixed;
        sound1.setVolume(volume_toFixed);
        sound1.rate(1);
    }
}
function play() {
    // song_name=document.getElementById("music_names").value;
    //     if (song_name=="s1"){
    // sound1.play();
    // sound2.stop();
    // sound3.stop();
    //     }
    //     else if(song_name=="s2"){
    // sound1.stop();
    // sound3.stop();
    //         sound2.play();
    //     }
    //     else if(song_name=="s3"){
    //         sound1.stop();
    //         sound2.stop();
    //         sound3.play();
    // } 
    sound1.play();
    // sound1.setVolume(0.5);
    // sound1.rate(0.3);
}
function pause() {
    sound1.pause();
    // sound2.pause();
    // sound3.pause();


}
function stop() {
    sound1.stop();
    // sound2.stop();
    // sound3.stop();
}
