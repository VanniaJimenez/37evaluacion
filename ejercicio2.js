var numeroNombres =3;
var nombres= [];
for (var i = 0; i< numeroNombres; i++) {
	var datos = prompt("ingresa nombre");
	var nuevosNombres = nombres.push(datos);
}
alert("estos son tus nombres " + nombres);

/* pseudocodigo 
inicio
var número de nombres = 3 (el usuario tiene que ingresar tres nombres)
var nombres = [] (esta vacia para que cuando el usuario meta sus tres nombres se vayan quedando en esta var)
for(variable contador; el contador tiene que llegar hasta tres; el contador va sumando las vueltas hasta llegar a tres)
pidele al usuario que meta el primer nombre :María
ese nombre guardalo en la variable nombres
pidele al usuario que meta el segundo nombre :José
ese nombre guardalo en la variable nombres
pidele al usuario que meta su tercer nombre: Sonia
ese nombre guardalo en la variable nombres }
imprime para el usuario la variable la cual tiene que contener los tres nombres [María,José, Sonia]
fin */
