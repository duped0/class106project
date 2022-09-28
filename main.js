function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
}

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/-_44r6lle/model.json");

function modelReady(){
    classifier.classify(gotResults());
}

function gotResults(){
    console.log("got result");
}