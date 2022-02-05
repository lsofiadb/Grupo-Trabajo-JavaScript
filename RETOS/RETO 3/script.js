const textAutos = document.getElementById('container-autos')
const textPrecioConsecionario = document.getElementById('precio-consecionario')
const radiobuttons = document.getElementById('radiobuttons')
let autos = []

const clickButton = () => {
  getData()
  writeData()
  crearRadiobuttons()
}

const getPrecioTotalConsecionario = () =>{
  /*----------PRECIO TOTAL AUTOS--------*/
  let totalConcesionario = autos.reduce((valorInicial, auto) => {
  return valorInicial += parseInt(auto.precio,10)}, 90000)
  textPrecioConsecionario.innerHTML = `<h3>Precio consecionario</h3> ${totalConcesionario}`
}

const getData = () => {
  const modelo = document.getElementById('modelo').value
  const marca = document.getElementById('marca').value
  const referencia = document.getElementById('referencia').value
  const color = document.getElementById('color').value
  const precio = document.getElementById('precio').value
  let objetoAuto = new Auto(marca, modelo, referencia, color, precio)
  autos.push(objetoAuto)
}

const writeData = () => {
    textAutos.innerHTML ="";
  for(let i in autos){
    textAutos.innerHTML += `Auto: ${parseInt(i,10)+1}`
    textAutos.innerHTML += ` ${autos[i].marca}`
    textAutos.innerHTML += ` ${autos[i].modelo}`
    textAutos.innerHTML += ` ${autos[i].referencia}`
    textAutos.innerHTML += ` ${autos[i].color}`
    textAutos.innerHTML += ` ${autos[i].precio}`
    textAutos.innerHTML += ` ${autos[i].getTiempoUso()} <br>`
  }
}


/*--------FORMA #1-----------*/ 
/*
function Auto(marca, modelo, referencia, color, precio){
  this.marca = marca;
  this.modelo = modelo;
  this.referencia = referencia;
  this.color = color;
  this.precio = precio;
  return this;
}

Auto.prototype.getTiempoUso = function(){
  return (2022 - this.modelo);
}
*/
/*------FORMA #2-------------*/

class Auto{
  constructor(marca, modelo, referencia, color, precio){
    this.marca = marca;
    this.modelo = modelo;
    this.referencia = referencia;
    this.color = color;
    this.precio = precio;
  }

  getTiempoUso(){
    return (2022 - this.modelo);
  }
}

const getMarcas = () =>{
  let autosMap = autos.map((auto) => {
  return auto.marca;
})
  return autosMap
}

const getMarcasSinRepetir = () =>{
  let sinRepetir = [...new Set(getMarcas())]
  return sinRepetir
}

const crearRadiobuttons = () =>{
  radiobuttons.innerHTML = ""
  for(marca of getMarcasSinRepetir()){
    radiobuttons.innerHTML += `<input type="Radio" name="filtro" value=${marca}> ${marca} <br> `
  }
  radiobuttons.innerHTML += `<input type="Button" value="Filtar por marca" onclick="filtrarPorMarca()">`

}

const filtrarPorMarca =() =>{
  let indice
  for ( indice = 0; indice < document.getElementsByName('filtro').length; indice++) {
    if (document.getElementsByName('filtro')[indice].checked) {
      break;
    }
  }
  let marca = document.getElementsByName('filtro')[indice].value
  let autosPorMarca = autos.filter((auto) => {
  return auto.marca === marca
})
   textAutos.innerHTML ="";
  for(let i in autosPorMarca){
    textAutos.innerHTML += `Auto: ${parseInt(i,10)+1}`
    textAutos.innerHTML += ` ${autosPorMarca[i].marca}`
    textAutos.innerHTML += ` ${autosPorMarca[i].modelo}`
    textAutos.innerHTML += ` ${autosPorMarca[i].referencia}`
    textAutos.innerHTML += ` ${autosPorMarca[i].color}`
    textAutos.innerHTML += ` ${autosPorMarca[i].precio}`
    textAutos.innerHTML += ` ${autosPorMarca[i].getTiempoUso()} <br>`
  }
}


//crear objetos- metodo que calcule años de uso

//metodos de iteracion para escribir todos los carros - marca - modelo - refe - color - precio
//cuanto cuestan todos los carros - mas 90000


//filtrar por marca - radio button