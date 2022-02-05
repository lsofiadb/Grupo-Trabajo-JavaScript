for (var i = 0; i < 10; i++) {
    console.log(i)
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

//retorna valores 
for (var i of frutas) {
    console.log(i)
}

//for of para objetos for (var i in frutas) 
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

//error por objeto no iterable
// for(var i of objeto){
//     // console.log(i)
// }

//ES6+
var a = 5 //alcance de bloque {}
let c = 7 // alcance local
const b = 6// alcance local 
d = 8 //alcance global

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

//scope 
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
// console.log(variable)

const accion = () => console.log('soy una accion')
// setTimeout(() => {
//     console.log('funcion anonima')
// }, 2000)

const otraFuncion = () => {
    for(let i = 0 ; i < 10; i++){
        setTimeout(() => console.log(i), 2000)
    }
}

otraFuncion()

var i = 8
var i = 5

let e = 8

//-----------------
const operar = (tipo, a, b) => {
    switch (tipo) {
      case "suma": return suma(a,b)
      case "resta": return resta(a,b)
      case "multi": return mult(a,b)
      default: return div(a,b)
    }
  }
const suma = (a,b) => a+b
const resta = (a,b) => a-b
const mult = (a,b) => a*b
const div = (a,b) => Number.parseFloat(a/b).toFixed(5)

const miFuncion7 = variable => console.log('ss')