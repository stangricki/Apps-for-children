{
	const audio = {
		handleClick(e) { e.target.querySelector("audio").play() }
	};

	const synth = {
		init(callback) {
			window.speechSynthesis.getVoices();
			window.speechSynthesis.addEventListener('voiceschanged', () => {
				this.voice = window.speechSynthesis.getVoices()[4];
				callback();
			});
		},
		handleClick(e) {
			if (e.target.className === "sayColorGameButton") { //temporary if statement
				const notAvailable = new SpeechSynthesisUtterance("This game will be available soon. Please be patient");
				notAvailable.voice = this.voice;
				window.speechSynthesis.speak(notAvailable);
			} else {
			const utterance = new SpeechSynthesisUtterance(e.target.className);
			utterance.voice = this.voice;
			window.speechSynthesis.speak(utterance);
			}
		}
	}

	{
		let player = audio;
		document.addEventListener('click', e => player.handleClick(e));
		if ('speechSynthesis' in window) synth.init(() => player = synth);
	}
}
