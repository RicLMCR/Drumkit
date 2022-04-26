// Keyboard Sounds //
const sound1 = new Audio();
sound1.src="SFX/sound1.wav";

const sound2 = new Audio();
sound2.src="SFX/sound2.wav";

const sound3 = new Audio();
sound3.src="SFX/sound3.wav";

const sound4 = new Audio();
sound4.src="SFX/sound4.wav";

const sound5 = new Audio();
sound5.src="SFX/sound5.wav";

const sound6 = new Audio();
sound6.src="SFX/sound6.wav";


// Map a sound to a specific key on Num Pad
document.addEventListener("keydown", (event) =>{
    if (event.keyCode == 96){
        sound1.play();
    }
    else if
    (event.keyCode == 97){
        sound2.play();
    }
    else if
    (event.keyCode == 98){
        sound3.play();
    }
    else if
    (event.keyCode == 99){
        sound4.play();
    }
    else if
    (event.keyCode == 100){
        sound5.play();
    }
    else if
    (event.keyCode == 101){
        sound6.play();
    }
})
