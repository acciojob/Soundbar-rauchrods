//your JS code here. If required.

let isplaying=false;

function playsound(sound){

    let audio =   document.querySelector(`audio[src='${sound}']`);
   
    console.log(audio);
    if(isplaying==false){
        isplaying=true;
        audio.play();
    }
    else{
        isplaying=false;
        audio.pause();
    }
    
}