const tabla = document.getElementById("idtabla")

// CREAR UNA NUEVA FILA CON NOMBRE "HOLA" (para probar)
// const nuevaFila = document.createElement('tr') // <tr></tr> (la creo vacia y no la agrego al html todavia)
// nuevaFila.innerHTML = "Hola" //<tr>Hola</tr> (sigue sin estar en html)
// tabla.children[0].appendChild(nuevaFila)

//CREAR X CANTIDAD DE FILAS CON CADA NOMBRE DE LOS INGREDIENTES (SIENDO X LA CANTIDAD DE INGREDIENTES)
// for(let i = 0;i < listaIngredientesJSon.length;i++){
//     const nuevaFila = document.createElement('tr') //Nueva fila (sin agregarla todavia)
//     nuevaFila.innerHTML = listaIngredientesJSon[i].nombre  //Le doy el nombre del ingrediente a su html interno
//     tabla.children[0].appendChild(nuevaFila) //La agrego abajo de la fila que ya teniamos (y esto se va a repetir por cada ingrediente al estar en un for)
// }

//CREAR X CANTIDAD DE FILAS CADA UNA CON UNA CELDA EN LA CUAL GUARDO LOS NOMBRES
// for(let i = 0;i < listaIngredientesJSon.length;i++){
//     const nuevaFila = document.createElement('tr') // <tr></tr> (nueva fila)
//     const nuevaCelda = document.createElement('td') // <td></td> (una celda)
//     nuevaCelda.innerHTML = listaIngredientesJSon[i].nombre //Le doy el valor del nombre a la 1ra celda
//     nuevaFila.appendChild(nuevaCelda) //<tr>  <td>Nombre</td>  </tr>
//     tabla.children[0].appendChild(nuevaFila) //La agrego abajo de la fila que ya teniamos (y esto se va a repetir por cada ingrediente al estar en un for)
// }

//USANDO LA FUNCION newCelda CREO LAS 3 CELDAS DE NOMBRE, IMAGEN Y COLOR EN CADA NUEVA FILA DE CADA INGREDIENTE
// for(let i = 0;i < listaIngredientesJSon.length;i++){
//     const nuevaFila = document.createElement('tr') // <tr></tr> (nueva fila)
//     const celdaNombre = newCelda(listaIngredientesJSon[i].nombre)
//     const celdaImagen = newCelda(listaIngredientesJSon[i].foto)
//     const celdaColor = newCelda(listaIngredientesJSon[i].color)
//     nuevaFila.appendChild(celdaNombre) //<tr>  <td>Nombre</td>  </tr>
//     nuevaFila.appendChild(celdaImagen) //<tr>  <td>Nombre</td> <td>Foto</td>  </tr>
//     nuevaFila.appendChild(celdaColor) //<tr>  <td>Nombre</td> <td>Foto</td> <td>Color</td>  </tr>
//     tabla.children[0].appendChild(nuevaFila) //La agrego abajo de la fila que ya teniamos (y esto se va a repetir por cada ingrediente al estar en un for)
// }
// function newCelda(contenido){
//     const celda = document.createElement('td') //<td></td>
//     celda.innerHTML = contenido
//     return celda
// }

//LO MISMO QUE ANTES PERO QUE SE VEAN LAS IMAGENES
// for(let i = 0;i < listaIngredientesJSon.length;i++){
//     const nuevaFila = document.createElement('tr') // <tr></tr> (nueva fila)
//     const celdaNombre = newCelda(listaIngredientesJSon[i].nombre)
//     const celdaImagen = newCelda(`<img src = 'imagenes/${listaIngredientesJSon[i].foto}' alt = '${listaIngredientesJSon[i].foto}'/>`)
//     const celdaColor = newCelda(listaIngredientesJSon[i].color)
//     nuevaFila.appendChild(celdaNombre) //<tr>  <td>Nombre</td>  </tr>
//     nuevaFila.appendChild(celdaImagen) //<tr>  <td>Nombre</td> <td>Foto</td>  </tr>
//     nuevaFila.appendChild(celdaColor) //<tr>  <td>Nombre</td> <td>Foto</td> <td>Color</td>  </tr>
//     tabla.children[0].appendChild(nuevaFila) //La agrego abajo de la fila que ya teniamos (y esto se va a repetir por cada ingrediente al estar en un for)
// }
// function newCelda(contenido){
//     const celda = document.createElement('td') //<td></td>
//     celda.innerHTML = contenido
//     return celda
// }


//Al hacer click al boton filtre por color
// function filtrar(){
//     tabla.innerHTML = "" 
//     for(let i = 0;i < listaIngredientesJSon.length;i++){
//         const nuevaFila = document.createElement('tr') // <tr></tr> (nueva fila)
//         if(document.getElementById("inputColor").value == listaIngredientesJSon[i].color){
//             const celdaNombre = newCelda(listaIngredientesJSon[i].nombre)
//             const celdaImagen = newCelda(`<img src = 'imagenes/${listaIngredientesJSon[i].foto}' alt = '${listaIngredientesJSon[i].foto}'/>`)
//             const celdaColor = newCelda(listaIngredientesJSon[i].color)
//             nuevaFila.appendChild(celdaNombre) //<tr>  <td>Nombre</td>  </tr>
//             nuevaFila.appendChild(celdaImagen) //<tr>  <td>Nombre</td> <td>Foto</td>  </tr>
//             nuevaFila.appendChild(celdaColor) //<tr>  <td>Nombre</td> <td>Foto</td> <td>Color</td>  </tr>
//             tabla.appendChild(nuevaFila) //La agrego abajo de la fila que ya teniamos (y esto se va a repetir por cada ingrediente al estar en un for)
//         }
//     }
// }
// function newCelda(contenido){
//     const celda = document.createElement('td') //<td></td>
//     celda.innerHTML = contenido
//     return celda
// }