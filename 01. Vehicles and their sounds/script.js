

function removeTransition(e) {
	if (e.propertyName !== 'transform') return;
    e.target.classList.remove('key-pressed');
}


function playSound(e) {
	console.log(e.keyCode)
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	const keyMotorboat = document.querySelector(`.motorboat`);
	const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
	
	// ALT + L - LITERA Ł - Łódka
	if(e.altKey === true && e.keyCode === 76) { 
		document.querySelector(`audio[class="motorboat"]`).play();
		keyMotorboat.classList.add('key-pressed');
	}
	if(!audio){return};
	key.classList.add('key-pressed');
	audio.play()
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);



