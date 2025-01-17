let adddivTransition=(evt)=>{
    let charOfKey = evt.key.toLowerCase();
    let key = document.querySelector(`div[data-key="${charOfKey}"]`);
    key.classList.add('playing');
}

let removeDivTransition=(evt)=>{
    let charOfKey = evt.key.toLowerCase();
    let key = document.querySelector(`div[data-key="${charOfKey}"]`);
    key.classList.remove('playing');
}

let playSound = (evt) => {
  let charOfKey = evt.key.toLowerCase();
  let audio = document.querySelector(`audio[data-key="${charOfKey}"]`);
  if (!audio) return; // if statement checks whether the audio element was successfully found in the DOM. if not then further code dosent run
  audio.currentTime = 0; // Rewind to the start
  audio.play();
  adddivTransition(evt);
  setTimeout(() => removeDivTransition(evt), 200);
};

window.addEventListener("keydown", playSound);
