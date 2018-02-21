function removeTransition(e) {
	if (e.propertyName !== 'transform') return;
    e.target.classList.remove('key-pressed');
}

function playSound(e) {
	const keyCode = e.altKey && e.keyCode === 76 ? '76 18' : e.keyCode;
	const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
	const key = document.querySelector(`div[data-key="${keyCode}"]`);
	
	if(!audio){return};
	key.classList.add('key-pressed');
	key.parentNode.style.opacity = 1; // adds full OPACITY on an image
	audio.play()
	audio.addEventListener('ended', function() {// removes full OPACITY from an image
		key.parentNode.style.opacity = 0.6;
		keyMotorboat.parentNode.style.opacity = 0.6;}) 
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);



