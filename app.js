let contenedorCartas = document.querySelector('.contenedor-cartas')
let botonAgregar = document.querySelector('.botonAgregar')
let input = document.querySelector('.ingreso')
let peliculas = []
let cuandoNoHayPeliclas = document.querySelector('.cuandoNoHayPeliculas')
let lugardelTopFilm = document.querySelector('#topFilm')
let nombrePelicula = ''

nombrePelicula.textContent = input.value


botonAgregar.addEventListener('click', () => {

    if(input.value.trim() == ''){
        return
    }

    peliculas.push({ nombre: nombrePelicula.textContent = input.value, votos: 0, id: Date.now() })
    renderizar()

})

const renderizar = () => {

    contenedorCartas.innerHTML = ''

    for (let movie of peliculas) {

            let tarjeta = document.createElement('div')
            tarjeta.classList.add('tarjetita')


            let nombrePelicula = document.createElement('p')
            nombrePelicula.classList.add('nombrePelicula')
            nombrePelicula.textContent = movie.nombre

            let cantidadVotos = document.createElement('p')
            cantidadVotos.classList.add('cantidadVotos')
            cantidadVotos.textContent = 'Cantidad de votos: ' + movie.votos

            let botonVotos = document.createElement('button')
            botonVotos.classList.add('boton-votos')
            botonVotos.textContent = 'Vote'
            botonVotos.addEventListener('click', () => {
                let film = peliculas.find(item => item.id == movie.id)
                film.votos = film.votos + 1
                renderizar()
            })


            let botonEliminar = document.createElement('button')
            botonEliminar.classList.add('boton-eliminar')
            botonEliminar.textContent = 'Delete'
            botonEliminar.addEventListener('click', () => {
                peliculas = peliculas.filter(item => item.id !== movie.id)
                renderizar()
            })
        
            tarjeta.appendChild(nombrePelicula)
            tarjeta.appendChild(cantidadVotos)
            tarjeta.appendChild(botonVotos)
            tarjeta.appendChild(botonEliminar)


            input.value = ''

            contenedorCartas.append(tarjeta)


    }

    if (peliculas.length == 0) {
        cuandoNoHayPeliclas.textContent = 'There are no Films in our list'
    } else {
        cuandoNoHayPeliclas.textContent = ''
    }


    let copia = [...peliculas]
    let ganador = copia.sort((a, b) => b.votos - a.votos);

    if (ganador.length > 0 && copia.some(item => item.votos > 0)) {
        lugardelTopFilm.textContent = `The #1 Film is: ${ganador[0].nombre} with ${ganador[0].votos} votes`

    } else if (peliculas.length == 0) {
        lugardelTopFilm.textContent = 'The #1 Film is: None'

    } else {
        lugardelTopFilm.textContent = "The #1 Film is: None"
    }

}


