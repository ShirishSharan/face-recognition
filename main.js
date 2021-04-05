function setup(){
    canvas=createCanvas(400, 385);
    canvas.position(450,200);
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier('https://storage.googleapis.com/tm-model/GM4qcRll4/model.json' , modelLoaded);
}

function draw(){
image(video, 0 ,0 ,400 ,385);
classifier.classify(video, gotResult);
}

function gotResult(error, result){
    if(error)
    {console.log(error);
    }else{
    console.log(result);
    document.getElementById("result_object_name").innerHTML = result[0].label;
    document.getElementById("result_object_accuracy").innerHTML = result[0].confidence.toFixed(3);
    }

    
}

function modelLoaded(){
    console.log('model loaded !')
}




