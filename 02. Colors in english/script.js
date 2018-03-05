{
	let voice;
	let play = playAudio;
	const handleClick = e => play(e);
	document.addEventListener('click', handleClick);

	if ('speechSynthesis' in window) {
		window.speechSynthesis.getVoices();
		window.speechSynthesis.addEventListener('voiceschanged', initSynth);
	}

	function playSynth(e) {
		const utterance = new SpeechSynthesisUtterance(e.target.className);
		utterance.voice = voice;
		window.speechSynthesis.speak(utterance);
	}
		
	function playAudio(e) {
		e.target.querySelector("audio").play();
	}

	function initSynth() {
		voice = window.speechSynthesis.getVoices()[4];
		play = playSynth;
	}
}
