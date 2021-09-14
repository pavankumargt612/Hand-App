Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
    });
    
    camera=document.getElementById("camera");
    
    Webcam.attach(camera);
    
    function take_snapshot(){
    Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML='<img id="captured_image" src="' + data_uri + '"/>';
    
    });
    
    }
    console.log("ml5 version:" , ml5.version);
    
    classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/iTCgJucp4/model.json' , modelLoaded);
    
    function modelLoaded(){
        console.log("model Loaded");
    }
    
    function speak(){
        var synth=window.speechSynthesis;
        speak_date_1="The First Prediction Is " + prediction1;
        speak_date_2="The Second Prediction Is " + prediction2;
        var utterThis=new SpeechSynthesisUtterance(speak_date_1+speak_date_2);
        synth.speak(utterThis);
    
    }