let contenedorCartas = document.querySelector('.contenedor-cartas')
let botonAgregar = document.querySelector('.botonAgregar')
let input = document.querySelector('.ingreso')
let peliculas = []
let cuandoNoHayPeliclas = document.querySelector('.cuandoNoHayPeliculas')
let savedVotes = 0
let lugardelTopFilm = document.querySelector('#topFilm')

let topFilm = ''
let mayor = 0




const peliculaPorAgregar = () => {
    let tarjeta = document.createElement('div')
    tarjeta.classList.add('tarjetita')

    let nombrePelicula = document.createElement('p')
    nombrePelicula.classList.add('nombrePelicula')
    nombrePelicula.textContent = input.value

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

        let datosFilm = {
            nombre: nombrePelicula.textContent,
            votos: cantidadVotos.textContent[cantidadVotos.textContent.length - 1],
        }

    //    if (!peliculas.includes(nombrePelicula.textContent)) {
            peliculas.push(datosFilm);
  //          console.log(peliculas)
  //      }

        peliculas.forEach((elemento) => {
            for (let i = 0; i < peliculas.length; i++) {
                if (i == 0) {
                    topFilm = peliculas[0].nombre
                    mayor = peliculas[0].votos
                    lugardelTopFilm.textContent = 'The #1 Film is: ' + topFilm
                } else {
                    if (peliculas[i].votos > mayor && peliculas[i].nombre != topFilm) {
                        topFilm = peliculas[i].nombre
                        mayor = peliculas[i].votos
                        lugardelTopFilm.textContent = 'The #1 Film is: ' + topFilm

                    }
                }

            }
        })

    })



    botonEliminar.addEventListener('click', (event) => {
        tarjeta.remove()
    })

    console.log(peliculas)
    contador = 0


}

botonAgregar.addEventListener('click', () => {
    peliculaPorAgregar()
})


