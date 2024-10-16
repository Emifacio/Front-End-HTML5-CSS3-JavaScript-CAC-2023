// LocalStorage
// Las propiedades localStorage y sessionStorage permiten guardar pares clave / valor en un navegador web. Los datos guardados son siempre formato texto.
// El objeto localStorage almacena datos sin fecha de vencimiento. Los datos almacenados en sessionStorage son eliminados cuando finaliza la sesion de navegación (cuando se cierra la página).

// if (typeof(Storage) !== "undefined") {
//     // Store
//     localStorage.setItem("apellido", "Perez") // No existe, lo agrega. 
//     localStorage.setItem("apellido", "Pérez") // Existe, lo reemplaza
//     localStorage.setItem("nombre", "Juan")
//     // Retrieve
//     let ap = localStorage.getItem("apellido")
//     let nom = localStorage.getItem("nombre")
//     console.log(ap)
//     console.log(nom)
// } else {
//     console.log("Su navegador no soporta Web Storage.")
// }

// localStorage.clear()
// if (typeof(Storage) !== "undefined") {
//     // Store
//     if (localStorage.getItem("apellido") == undefined){
//     nombre = prompt("Ingrese su nombre de usuario: ")
//     apellido = prompt("Ingrese su apellido: ")
//     localStorage.setItem("apellido", apellido) // No existe, lo agrega. 
//     localStorage.setItem("nombre", nombre)}
//     // Retrieve
//     else {
//         let ap = localStorage.getItem("apellido")
//         let nom = localStorage.getItem("nombre")
//         console.log("Hola de nuevo ",nom," ",ap)}
// } else {
//     console.log("Su navegador no soporta Web Storage.")
// }