var numero = "hola soy un numero"
console.log(numero)

//TIPOS DE DATOS

//primitivos
//number 
var a = 10
var b = 3

console.log(typeof(a))

var suma = a + b
console.log(suma)

var resta = a - b
console.log(resta)

var mul = a * b
console.log(mul)

var div = a / b
console.log(div.toFixed(3))

//boolean
var booleano = true
var booleano2 = false

console.log(booleano)

//string
var comillaSimple = 'hola'
var comillaDoble = "hola pero doble"

console.log(comillaSimple)
console.log(comillaDoble)

//jerarquia
var jerarquia = "hola mi nombre es 'laura' "
console.log(jerarquia)

//comillas invertidas
var invertidas = `hola "laura" 'sofia'`

console.log(invertidas)

//ascii alt+96
var otroNumero = 25
console.log(`tengo un numero que es ${otroNumero}`)

//operaciones
console.log('5' + 2)
console.log('5' * 2)

//comparaciones
console.log(5 < 2)
console.log(5 != 2)
    //comparacion no estricta
console.log(5 == '5')
    //especifica el tipo de dato
console.log(5 === '5')


//no primitivos

var frutas = ['manzana', 'pera', 'mora', true, 5]
console.log(frutas)
console.log(typeof(frutas))


//objetos
var objeto = {
    clave: 'valor',
    clave2: '2121',
    objeto: {
        otracosa: 'hola'
    }
}
console.log(objeto.clave)