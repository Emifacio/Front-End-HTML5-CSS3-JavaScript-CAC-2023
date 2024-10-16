elementos = [2,4,"hola",3,6,true]
console.log(elementos)


for (let i = 0; i < elementos.length; i++){
    console.log(elementos[i])
}

for (let i in elementos){
    console.log(elementos[i])
}

for (let i of elementos){
    console.log(i)
}