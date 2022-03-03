let globalData = {}

let principalContainer = document.getElementById('principal-container')

function updatePage() {
    Object.entries(globalData).forEach(([key, value]) => {
        principalContainer.innerHTML += `<div class="card m-3" style="width: 18rem;" id="${key}">
                                            <img src="${value.imagen}" class="card-img-top" alt="...">
                                            <div class="card-body">
                                            <h5 class="card-title"><span class="bold"> ${value.heroe}<span></h5>
                                            <p class="card-text"><span class="bold"> Nombre: </span>${value.nombre}</p>
                                            <p class="card-text"><span class="bold">Edad: </span>${value.edad} </p>
				<div class="row">
<button type="button" class="btn btn-light" data-toggle="modal" data-target="#myModal${key}">Ver mas</button>
<p></p>
<button type="button" class="btn btn-danger" data-toggle="modal" data-target="#myModalConfirm${key}" >Eliminar</button>
</div>
                                              <div class="d-flex justify-content-center mt-4">
                                            </div>
                                        </div>
                                                          <!-- Modal -->
                                        <div class="modal fade" id="myModal${key}" role="dialog">
                                          <div class="modal-dialog">
                                          
                                            <!-- Modal content-->
                                            <div class="modal-content">
                                              <div class="modal-header">
                                                <h5 class="modal-title">Detalles</h5>
                                                
                                              </div>
                                              <div class="modal-body">
                          <p> <span class="bold">Heroe:</span> ${value.heroe}</p>
                          <p> <span class="bold">Nombre:</span> ${value.nombre}</p>
                          <p> <span class="bold">Edad:</span> ${value.edad}</p>
                          <p> <span class="bold">Poderes:</span> ${value.detalles}</p>  
                                                
                                              </div>
                                              <div class="modal-footer">
                    <button type="button" class="btn btn-warning" data-dismiss="modal">Close</button>
<button type="button" class="btn btn-success" data-toggle="modal" data-target="#myModalEditar${key}" >Editar</button>
                                              </div>
                                            </div>
                                            
                                          </div>
                                        </div>

<div class="modal"  id="myModalEditar${key}">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Editar información del heroe</h5>
      </div>
      <div class="modal-body">
        <form>
          
          <div class="form-group row">
            <label for="nombreHeroe${key}" class="col-sm-2 col-form-label">Heroe</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" id="nombreHeroe${key}" value="${value.heroe}" >
            </div>
          </div>

					<div class="form-group row">
            <label for="NombreReal${key}" class="col-sm-2 col-form-label">Nombre</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" id="nombreReal${key}" value="${value.nombre}" >
            </div>
          </div>

					<div class="form-group row">
            <label for="URLImage${key}" class="col-sm-2 col-form-label">Imagen</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" id="URLImage${key}" value="${value.imagen}" >
            </div>
          </div>

					<div class="form-group row">
            <label for="edad${key}" class="col-sm-2 col-form-label">Edad</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" id="edad${key}" value="${value.edad}" >
            </div>
          </div>

					<div class="form-group row">
            <label for="detalles${key}" class="col-sm-2 col-form-label">Detalle</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" id="detalles${key}" value="${value.detalles}" >
            </div>
          </div>
					
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-warning" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-success" onclick="setNewInfoHeroe('${key}', 'nombreHeroe${key}', 'nombreReal${key}', 'URLImage${key}', 'edad${key}', 'detalles${key}')">Editar</button>
				
      </div>
    </div>
  </div>
</div>

<div class="modal"  id="myModalConfirm${key}">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Confirmación</h5>
        
      </div>
      <div class="modal-body">
        <p>¿Está seguro que quiere borrar el heroe?</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">No</button>
        <button type="button" class="btn btn-danger" onclick="deleteHeroe('${key}')">Si</button>
				
      </div>
    </div>
  </div>
</div>
                                        `
      
    })
}

const API = 'https://superheroes-project-default-rtdb.firebaseio.com/heroes'

const getAll = async() => {
    const response = await fetch(API + '.json')
    const data = await response.json()
    globalData = data
    console.log(data)
    updatePage()
}

const getHeroe = async(id) => {
    const URL = `${API}/${id}.json`
    const response = await fetch(URL)
    const data = await response.json()
    console.log(data);
}

const getInfoHeroe = ()=>{
	let data = {
			    detalles: document.getElementById('detalles').value,
			    edad: document.getElementById('edad').value,
			    imagen: document.getElementById('URLImage').value,
			    nombre: document.getElementById('nombreReal').value,
			    heroe: document.getElementById('nombreHeroe').value
		
				 }
	addHeroe(data)
}

const setNewInfoHeroe = (id, nombreHeroe, nombreReal, URLImage, edad, detalles)=>{
	let newData = {
					detalles: document.getElementById(detalles).value,
			    edad: document.getElementById(edad).value,
			    imagen: document.getElementById(URLImage).value,
			    nombre: document.getElementById(nombreReal).value,
			    heroe: document.getElementById(nombreHeroe).value
	}
	updateHeroe(id, newData)
}

const addHeroe = async(heroe) => {
    const response = await fetch(API + '.json', {
        method: 'POST', // POST, PUT, DELETE
        body: JSON.stringify(heroe),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const data = await response.json()
		location.reload()
}

const updateHeroe = async(id, heroe) => {
    const response = await fetch(`${API}/${id}.json`, {
        method: 'PUT', // POST, PUT, DELETE
        body: JSON.stringify(heroe),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const data = await response.json()
    location.reload()
}

const deleteHeroe = async(id) => {
    const response = await fetch(`${API}/${id}.json`, {
        method: 'DELETE', // POST, PUT, DELETE
    })
    const data = await response.json();
	location.reload()
}

getAll()