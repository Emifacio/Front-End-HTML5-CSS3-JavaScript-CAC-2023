// Literal
const TEXTO_1= "Hola Mundo!";
console.log(TEXTO_1);
var nombre= "Hola, mi nombre es Nicole";
console.log(nombre);
// Creo un objeto de tipo String
var apellido= new String("Schwab");

// Propiedades
console.log(nombre.length)

// Métodos
console.log("Método Split");
console.log(nombre.split(", "));
console.log("Método charAt");
console.log(nombre.charAt(1)); // o
console.log(nombre[1]); // o
console.log(nombre.concat(apellido, "FIN."));
console.log(nombre.indexOf("H")); // 0
console.log(nombre.indexOf("nom")); // 9
console.log(nombre.lastIndexOf("o")); // 22

// Template Strings
function sumar(a,b){
    return a+b;
}

var num1= Number(prompt("Ingrese un número: "));
var num2= Number(prompt("Ingrese otro número: "));
console.log("La suma entre " + num1 + " y " + num2 + " es: " + sumar(num1, num2));
// Ejemplo Template Strings
console.log(`La suma entre ${num1} y ${num2} es: ${sumar(num1, num2)}`);

// Más métodos
console.log(nombre.toUpperCase());
console.log(nombre.toLowerCase());
console.log(nombre);
console.log(nombre[2]); // l
nombre[2]= "L"; // Los Strings NO son mutables
console.log(nombre);
console.log(nombre.replace("Hola", "OLA")); // Replace devuelve una nueva cadena
console.log(nombre); // No modifica la cadena original
