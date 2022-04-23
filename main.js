Webcam.set({
width:350,
height:300,
image_format: 'png',
png_quality:90
});

Webcam.attach('#camera');
function takesnapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='IMG' src='"+data_uri+"'>"
    });
};
console.log("ml5 version is="+ml5.version);
Classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/0YQn_D4pF/model.json",modelLoaded);

 function modelLoaded() {
  console.log("model Loaded succesfully.")
 };
 function check() {
     img =document.getElementById("IMG");
     Classifier.classify(img,gotResult);
 }
 function gotResult(error,result){
if(error){
console.log(error);
}
else{
    console.log(result);
    document.getElementById("result_object_name").innerHTML=result[0].label;
    document.getElementById("result_object_accuracy").innerHTML=result[0].confidence.toFixed(3);
}
 }