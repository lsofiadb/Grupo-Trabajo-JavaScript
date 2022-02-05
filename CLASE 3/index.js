let carros = [
    {
        marca: 'ford',
        modelo: 2021,
        referencia: 'fiesta',
        precio: 20000
    },
    {
        marca: 'toyota',
        modelo: 2020,
        referencia: 'corolla',
        precio: 25000
    },
    {
        marca: 'chevrolet',
        modelo: 2019,
        referencia: 'aveo',
        precio: 15000
    },
    {
        marca:'Tesla',
        modelo:2021,
        referencia:'X',
        precio: 30000
    },
    {
        marca: 'ford',
        modelo: 2021,
        referencia: 'figo',
        precio: 20000
    },
    {
        marca:'Tesla',
        modelo:2019,
        referencia:'S',
        precio: 20000
    },
    {
        marca:'Tesla',
        modelo:2022,
        referencia:'roadster',
        precio: 1500000
    }
];

for(let carro of carros){
    // console.log(carro.marca);
}

carros.forEach((carro, index) => {
    // console.log(`${index} ${carro.marca}`);

    return carro;
})

const marcas = carros.map((carro, index) => {
    console.log(carro);

    return {
        marca: carro.marca,
        modelo: carro.modelo,
    };
})

// console.log(marcas);

//find - busca un elemento en un arreglo (condicion en retorno)
let toyota = carros.find((carro) => {
    return carro.marca === 'toyota';
})

// console.log(toyota);

//filter - filtra un arreglo (condicion en retorno)
let teslas = carros.filter((carro) => {
    return carro.marca === 'Tesla';
})

// console.log(teslas)

//some - verifica si existe (hay alguno?)
let isTesla = carros.some((carro) => {
    return carro.marca === 'buggati';
})

// console.log(isTesla);

//every - verifica si todos cumplen (todos cumplen?)
let isCarrosCaros = carros.every((carro) => {
    return carro.modelo > 2015;
})

// console.log(isCarrosCaros);


//reduce - reduce un arreglo a un valor
let total = carros.reduce((valorAcumulado ,carro)=>{
    return valorAcumulado + carro.precio;
}, 50000)

// console.log(total);





