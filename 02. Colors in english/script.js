(function() {
	document.addEventListener('click', playAudio);
	if ('speechSynthesis' in window) {
		window.speechSynthesis.getVoices();
		window.speechSynthesis.addEventListener('voiceschanged', initSynth);
	}

	function playSynth(e) {
		let chooseVoice = window.speechSynthesis.getVoices();
		let color = new SpeechSynthesisUtterance(e.target.className);
		color.voice = chooseVoice[4];
		window.speechSynthesis.speak(color);
	}
		
	function playAudio(e) {
		e.target.querySelector("audio").play();
	}

	function initSynth() {
		document.removeEventListener('click', playAudio);
		document.addEventListener('click', playSynth);
	}
}());
