for (var i = 0; i < 10; i++) {
    console.logi(i)
}

var a = -5
while (a !== 0) {
    console.log(a)
    a++
}

var frutas = ['manzana', 'pera', 'uva']

for (var i = 0; i < frutas.length; i++) {
    console.log(frutas[i])
}

//for of for in
console.log("hola")
for (var i of frutas) {
    console.log(i)
}

//for of para objetosfor (var i in frutas) 
var objeto = {
    clave1: "valor1",
    clave2: "valor2",
    clave3: "valor3"
}

//retorna index 
for (var i in objeto) {
    console.log(i)
}

//retorna valores del array
for (var i of objeto) {
    console.log(i)
}

//ES6+
var a = 5
const b = 6
let c = 7

//-----------
function miFuncion() {
    return "funcion clasica"
}

const miFuncion2 = function() {
    return "guardando funcion clasica"
}

const miFuncion3 = () => {
    return "arrow function"
}

const miFuncion4 = () => "arrow function directo"

console.log(miFuncion3())

const suma = (a, b) => a + b


//variables

var x = 5 //alcance del bloque, funciones {}
let y = 7 //alcance local 
const z = 10 //
w = 9 //alcance global
const funcionCualquiera = () => {
    if (true) {
        var variableVAR = "VAR" //mala practica
        let variableLet = "let"
        const variableConst = "const"
        variable = "solo variable" //mala practica 
    }
    console.log(variable)
}

funcionCualquiera()
console.log(variable)