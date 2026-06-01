let contenedorCartas = document.querySelector('.contenedor-cartas')
let botonAgregar = document.querySelector('.botonAgregar')
let input = document.querySelector('.ingreso')
let contadorPeliculas = 0
let peliculas = []
let cuandoNoHayPeliclas = document.querySelector('.cuandoNoHayPeliculas')
let savedVotes = 0





const peliculaPorAgregar = () => {
    contadorPeliculas++
    let tarjeta = document.createElement('div')
    tarjeta.classList.add('tarjetita')

    let nombrePelicula = document.createElement('p')
    nombrePelicula.classList.add('nombrePelicula')
    nombrePelicula.textContent = input.value
    //  nombrePelicula.setAttribute('id', contadorPeliculas)

    let cantidadVotos = document.createElement('p')
    cantidadVotos.classList.add('cantidadVotos')
    cantidadVotos.textContent = 'Cantidad de votos: 0'

    let botonVotos = document.createElement('button')
    botonVotos.classList.add('boton-votos')
    botonVotos.textContent = 'Votar'


    let botonEliminar = document.createElement('button')
    botonEliminar.classList.add('boton-eliminar')
    botonEliminar.textContent = 'Eliminar'

    tarjeta.appendChild(nombrePelicula)
    tarjeta.appendChild(cantidadVotos)
    tarjeta.appendChild(botonVotos)
    tarjeta.appendChild(botonEliminar)

    contenedorCartas.append(tarjeta)

    //contadorPeliculas++

    input.value = ''
    let contador = 0

    if (peliculas.length >= 0) {
        cuandoNoHayPeliclas.classList.add('d-none')
    } else {
        cuandoNoHayPeliclas.classList.remove('d-none')
    }


    botonVotos.addEventListener('click', (event) => {
        contador++
        
        cantidadVotos.textContent = 'Cantidad de votos: ' + contador
        console.log(contador)
        savedVotes = contador
        console.log(savedVotes)
    })



    botonEliminar.addEventListener('click', (event) => {
        tarjeta.remove()
    })

    let datosFilm = {
        nombre: nombrePelicula.textContent,
        cantidadVotos: savedVotes,
        id: contadorPeliculas
    }

    peliculas.push(datosFilm)
    console.log(peliculas)

    contador = 0


}

botonAgregar.addEventListener('click', () => {
    peliculaPorAgregar()
})