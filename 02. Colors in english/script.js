(function() {
	document.addEventListener(
		'click',
		'speechSynthesis' in window
			? playSynth
			: playAudio
	);

	function playSynth(e) {
		let chooseVoice = window.speechSynthesis.getVoices();
		let color = new SpeechSynthesisUtterance(e.target.className);
		color.voice = chooseVoice[4];
		window.speechSynthesis.speak(color);
	}
		
	function playAudio(e) {
		e.target.querySelector("audio").play();
	}

	function init() {
		// Ensure that the voices are loaded by the time we need them
		window.speechSynthesis.getVoices();
	}

	init();
}());
