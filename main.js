noseX=0
noseY=0

function preload(){
mustache=loadImage('https://i.postimg.cc/0yXssbfT/R.png');
}

function setup(){
    canvas = createCanvas(300, 300)
    canvas.center()
    video = createCapture(VIDEO);
    video.hide()
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotposes);
}

function draw(){
    image(video, 0, 0, 300, 300)
    image(mustache, noseX,noseY ,50,50)
}

function take_snapshot(){
save('myfilterimage.png');
}

function modelLoaded(){
    console.log("Model Loaded");
}

function gotposes(results){
if(results.length > 0){
    console.log(results)
    noseX=results[0].pose.nose.x-200;
    noseY=results[0].pose.nose.y-130;
    console.log("nose x = " +noseX);
    console.log("nose y = " +noseY);
}
}