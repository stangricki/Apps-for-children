{
	let play = playAudio;
	const handleClick = e => play(e);
	document.addEventListener('click', handleClick);

	if ('speechSynthesis' in window) {
		window.speechSynthesis.getVoices();
		window.speechSynthesis.addEventListener('voiceschanged', () => play = playSynth);
	}

	function playSynth(e) {
		const chooseVoice = window.speechSynthesis.getVoices();
		const color = new SpeechSynthesisUtterance(e.target.className);
		color.voice = chooseVoice[4];
		window.speechSynthesis.speak(color);
	}
		
	function playAudio(e) {
		e.target.querySelector("audio").play();
	}
}
