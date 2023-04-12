//your JS code here. If required.

function playsound(sound){

    let audio =   document.querySelector(`audio[src='${sound}']`);
   
    console.log(audio);
    if(audio.paused){
        audio.play();
    }
    else{
        audio.pause();
    }
    
}