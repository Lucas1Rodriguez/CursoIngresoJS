/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	let nombre; // declarar variable

	nombre = prompt ("Ingrese su nombre"); // asigno a la variable el valor que le pido al usuario

	
	document.getElementById("txtIdNombre").value = nombre; // muestro por la pantalla el nombre
}

