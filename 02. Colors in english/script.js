/*//Usage of mp3

document.addEventListener('click', (e) => {
	e.target.querySelector("audio").play()
})
*/
// Usage of Web speech API - No support for IE and Opera

document.addEventListener('click', (e) => {
	let chooseVoice = window.speechSynthesis.getVoices();
	let color = new SpeechSynthesisUtterance(e.target.className);
	color.voice = chooseVoice[4] // Why first click is default voice???
	window.speechSynthesis.speak(color);
})



