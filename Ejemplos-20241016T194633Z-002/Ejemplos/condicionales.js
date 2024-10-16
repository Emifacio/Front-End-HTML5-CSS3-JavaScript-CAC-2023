//CTRL + K + U para descomentar, CTRL + K + C para comentar 

/*************** CONDICIONALES: IF ****************/
// var nota = parseInt(prompt("Ingrese su nota: "));
// console.log("Nota: ", nota);
// // Condición (si nota es mayor o igual a 5)
// if (nota >= 5) {
//   console.log("¡Estoy aprobado!");
//   console.log("Si le sumo 2 a mi nota me saque un:",nota+2);
// }

/*************** CONDICIONALES: IF/ELSE ****************/

// var nota = parseInt(prompt("Ingrese su nota: "));
// console.log("He realizado mi examen. Mi resultado es el siguiente:");
// // Condición
// if (nota < 5) {
//   // Acción A (nota es menor que 5)
//   calificacion = "suspendido";
// } else {
//   // Acción B: Cualquier otro caso a A (nota es mayor o igual que 5)
//   calificacion = "aprobado";
// }
// console.log("Estoy", calificacion);


/*Otro ejemplo*/
// var num = parseInt(prompt("Ingrese un número: ", "")); //Pedimos un valor
// if (num > 0) {
//   document.write("El número es positivo.");
// } else {
//   document.write("El número es cero o negativo.");
// }

/*************** OPERADOR TERNARIO ****************/
// var nota = parseInt(prompt("Ingrese un número: "));
// console.log("He realizado mi examen. Mi resultado es el siguiente:");
// // Operador ternario: (condición ? verdadero : falso)
// var calificacion = nota < 5 ? "suspendido" : "aprobado";
// console.log("Estoy", calificacion);

/*************** IF MULTIPLE ****************/
// var nota = parseFloat(prompt("Ingrese un número: "));
// document.write("He realizado mi examen.");
// // Condición
// if (nota < 5) { //hasta 4.9
//   calificacion = "Insuficiente";
// } else if (nota < 6) { //5 ... 5.9
//   calificacion = "Suficiente";
// } else if (nota < 8) { //6 ... 7.9
//   calificacion = "Bien";
// } else if (nota <= 9) { //8 ... 9
//   calificacion = "Notable";
// } else { //9.1 ...
//   calificacion = "Sobresaliente";
// }
// document.write("<h1>He obtenido un ", calificacion,"</h1>");

/*Otro ejemplo*/
// var menu = prompt("Ingrese una opción (1: Abrir programa, 2: Salir del programa, etc.): ", "");
// if (menu == "1") {
//   alert("Bienvenido!");
// }
// else if (menu == "2") {
//   alert("Adiós!");
// }
// else if (menu == "3") {
//   alert("Opción 3");
// }
// else {
//   alert("No ha ingresado una opción válida!");
// }

/*************** SWITCH ****************/
// var nota = parseInt(prompt("Ingrese un número: "));
// console.log("He realizado mi examen. Mi resultado es el siguiente:");
// switch (nota) {
//   case 10:
//     calificacion = "Sobresaliente";
//     break;
//   case 9:
//   case 8:
//     calificacion = "Notable";
//     break;
//   case 7:
//   case 6:
//     calificacion = "Bien";
//     break;
//   case 5:
//     calificacion = "Suficiente";
//     break;
//   case 4:
//   case 3:
//   case 2:
//   case 1:
//   case 0:
//     calificacion = "Insuficiente";
//     break;
//   default:
//     // Cualquier otro caso
//     calificacion = "Nota errónea";
//     break;
// }
// console.log("He obtenido un", calificacion);
