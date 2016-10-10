/*pseudocodigo




*/

var palindromo = prompt("escribe tu frase");

function serPalindromo(palabra){
	var texto = palabra.replace (/\s/g,'');
	for (var i = 0; i< texto.length; i++) {
		var x = texto[i].toLowerCase();
		var y = texto [texto.length-(i+1)].toLowerCase();
		if (x !== y) {
			alert("lo sentimos,no es palindromo "  +  palindromo);
			return false;
			

		} 
	}
			alert("felicidades,es palindromo "  +  palindromo);
			return true;
			
}	serPalindromo(palindromo);
