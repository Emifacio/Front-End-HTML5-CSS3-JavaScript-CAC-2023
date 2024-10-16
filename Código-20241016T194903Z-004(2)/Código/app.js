// let a = 5
// let b = new Number(5)

// //Primera forma de crear un objeto y darle propiedades
// let auto = new Object()
// auto.color = "Rojo"
// auto["dueño"] = "juan"
// console.log(auto)
// console.log(auto.color)

// //Con la notacion de corchetes el nombre de una propiedad puede ser cualquiera (sin cumplir las reglas de los nombres de variables)
// auto["1color"] = "Azul"
// auto["2color"] = "Violeta"
// console.log(auto["1color"])

// //Otra manera de crear un objetivo y darle propiedades
// let perro = {
//     nombre: "Pepito",
//     edad: 6,
//     color: "Blanco",
//     ladrar(){
//         console.log("Guau guau!")
//     }
// }
// perro.ladrar()

// let perro = {
//     nombre: "Pepito",
//     edad: 6,
//     color: "Blanco",
//     ladrar(n){
//         console.log("Guau! ".repeat(n))
//     }
// }

// perro.ladrar(5)

//Que pasa si quiero crear 10 perros? Puede ser tedioso hacerlo de la manera anterior, veamos como crear la clase perro:

// class PerroGeneral{
//     constructor(nombre,edad,color){
//         this.nombre = nombre, 
//         this.anios = edad, 
//         this.color = color
//     }
// }


// console.log(perro2,perro3,perro4)

// class PerroGeneral{
//     constructor(nombre,edad,color){
//         this.nombre = nombre,
//         this.anios = edad,
//         this.color = color
//     }
//     ladrar(n){
//         console.log("Guau! ".repeat(n))
//     }
    // presentarse(){
    //     console.log("Su nombre es",this.nombre,"tiene",this.anios,"años y su color es",this.color)
    // }
// }
// let perro = new PerroGeneral("Panchito",3,"azul")
// let perro2 = new PerroGeneral("Charly",7,"marron")
// let perro3 = new PerroGeneral("Duque",9,"gris")
// let perro4 = new PerroGeneral("Henry",1,"blanco")
// let perro5 = new PerroGeneral("Gooby",4,"blanco y negro")
// perro2.presentarse()
// perro.presentarse()
// perro3.presentarse()
// perro4.presentarse()
// perro5.presentarse()
class PerroGeneral{
    constructor(nombre,edad,color){
        this.nombre = nombre,
        this.anios = edad,
        this.color = color
    }
    ladrar(){
        console.log("Guau! ")
    }
    presentarse(){
        console.log(`Su nombre es ${this.nombre} tiene ${this.anios} años y su color es ${this.color}`)
    }
}

nombre = "Nicole"
console.log(`Hola, mi edad es ${22+4} y mi nombre es ${nombre}`)
console.log("Hola, mi edad es",22+4,"y mi nombre es",nombre)