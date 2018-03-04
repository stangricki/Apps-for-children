document.addEventListener('click', (e) => {
	('speechSynthesis' in window) ?	handleClick(e) : handleClickInOtherBrowsers(e)
})

function handleClick(e) { // Usage of Web speech API - No support for IE and Opera
	let chooseVoice = window.speechSynthesis.getVoices();
	let color = new SpeechSynthesisUtterance(e.target.className);
	color.voice = chooseVoice[4];
	window.speechSynthesis.speak(color);
}
	
function handleClickInOtherBrowsers(e){ //Usage of mp3 if there is NO 'speechSynthesis' in window
	e.target.querySelector("audio").play()
}

function removeDefaultVoice(){
	var speech_voices; // removes asynchronous call to load the voices (default voice at first click)
	if ('speechSynthesis' in window) {
	  speech_voices = window.speechSynthesis.getVoices();
	  window.speechSynthesis.onvoiceschanged = function() {
	    speech_voices = window.speechSynthesis.getVoices();
	  };
	}
}

removeDefaultVoice()