

function search(){
	
	document.getElementById('res').innerHTML = "";
	
	let textInput = document.getElementById('ftxt').value;
	let keywordsInput = document.getElementById('keywords').value;
	let result = "";

	// Exctract keywords from keywordsInput (starts with mod_)
	
	let keywordsArray = keywordsInput.match(/\bmod_\w+\b/g);
	
	// Search for each keyword in textInput
	// Display results in this format: keyword (module) name, result (FOUND or NOT FOUND); example: mod_livepoll_extended, NOT FOUND
	
	keywordsArray.forEach(kwd => {
		const reg = new RegExp(`\\b${kwd}\\b`, "gi");
		const matches = textInput.match(reg);
		if (matches) {
			result += kwd + ", FOUND<br>";
		}else{
			result += kwd + ", NOT FOUND<br>";
		}
	});
	document.getElementById('res').innerHTML = "Results:<br>" + result;
}


