



function playsound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime = 0; // reset the audio time back to 0 everytime the button is click
    audio.play();
    key.classList.add('playing'); // adds playing to the class name to transition
}


function removeTransitio(e){
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing'); //remove playing to the class name and will make the key border back to normal
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener("transitionend", removeTransitio));


window.addEventListener("keydown", playsound);