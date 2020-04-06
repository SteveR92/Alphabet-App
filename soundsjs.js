window.document.addEventListener('keydown', function(e){
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if(!audio) return;
  audio.play();
  audio.currentTime = 0;
  key.classList.add('play');
});


function removeTransition(e) {
  if(e.propertyName !== 'transform') return;
  this.classList.remove('play');
}


const keys = document.querySelectorAll('.key');

keys.forEach(key => key.addEventListener('transitionend', removeTransition));
