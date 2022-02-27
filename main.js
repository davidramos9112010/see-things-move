 status = "";
 img = "";
object=[];
 function preload() {
     img = loadImage("husky-and-child.jpg");
 }

 function setup() {
     canvas = createCanvas(724, 420);
     canvas.center();
     objectDetector = ml5.objectDetector('cocossd', modelLoaded);
     document.getElementById("status").innerHTML = "status : detecting";
 }

 function draw() {
     image(img, 0, 0, 724, 420);
     if(status !=""){
         for(i=0;i<objects.length;i++){
            document.getElementById("status").innerHTML ="status object detected";
            fill("#FF0000");
            percent=floor(objects[i].confidence * 100);
            text(objects[i].label + " " +percent+"%" , objects[i].x+15,objects[i].y+15);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
            
         }
     }
 }

 function modelLoaded() {
     console.log("model Loaded");
     status = true;
     objectDetector.detect(img, gotResults);

 }

 function gotResults(error, results) {
     if (error) {
         console.log("i will kill you got error");
         console.error(error);

     }
     console.log(results);
     objects=results;
 }