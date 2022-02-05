//ESTRUCTURAS DE CONTROL 
var a = 5
var b = 7
if (a < b) {
    console.log("a menor que b")
} else if (a > b) {

} else {

}

if (a) {
    console.log(a)
}

//valores falsy, truthy
//valores intrinsecos
//falsy 0 Nan false undefined null
//truthy cualquier numero, string no vacio, objetos, arreglos, true
//

switch (a) {
    case 1:
        console.log(a)
        break
    case '2':
        break

    default:
        break
}

//funciones
function miFuncion(parametro) {
    console.log("funcion")
    return 6
}
miFuncion()
console.log(miFuncion(parametro))
