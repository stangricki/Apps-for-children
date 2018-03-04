document.addEventListener('click', (e) => {
	('speechSynthesis' in window) ?	handleClick(e) : handleClickInOtherBrowsers(e)
})

function handleClick(e) { // Usage of Web speech API - No support for IE and Opera
		let chooseVoice = window.speechSynthesis.getVoices();
		let color = new SpeechSynthesisUtterance(e.target.className);
		color.voice = chooseVoice[4] // Why first click is default voice???
		window.speechSynthesis.speak(color);
	}
function handleClickInOtherBrowsers(e){ //Usage of mp3 if there is NO 'speechSynthesis' in window
	e.target.querySelector("audio").play()
}