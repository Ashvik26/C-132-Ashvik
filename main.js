img="";
status="";
function preload(){
img=loadImage("living room.jpeg");
}
function setup(){
canvas=createCanvas(640, 420);
canvas.center();
objectdetector=ml5.objectDetector("cocossd",modelLoaded);
document.getElementById("status").innerHTML="status= detecting objects";
}
function modelLoaded(){
    console.log("model has loaded");
    status="true";
objectdetector.detect(img,gotResults);
}
function gotResults(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
    }
}
function draw(){
image(img, 0,0, 640, 420);
fill("red");
noFill();
stroke("red");
rect(30, 60,450, 350);
text("tv",45,75);
}