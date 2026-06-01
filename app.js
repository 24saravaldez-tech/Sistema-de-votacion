let contenedorCartas = document.querySelector('.contenedor-cartas')
let botonAgregar = document.querySelector('.botonAgregar')
let input = document.querySelector('.ingreso')
let peliculas = []
let cuandoNoHayPeliclas = document.querySelector('.cuandoNoHayPeliculas')
let savedVotes = 0
let lugardelTopFilm = document.querySelector('#topFilm')
let contadorPeliculas = 0
let topFilm = ''
let mayor = 0
let contadorTarjetas = 0


const peliculaPorAgregar = () => {

    //se encerro dentro de un if para que cuando no haya nada en el input, simplemente no permita a;adir nada de nda
    if (input.value.length > 0) {
        contadorPeliculas++
        let tarjeta = document.createElement('div')
        tarjeta.classList.add('tarjetita')
        tarjeta.setAttribute('id', contadorPeliculas)

        let nombrePelicula = document.createElement('p')
        nombrePelicula.classList.add('nombrePelicula')
        nombrePelicula.textContent = input.value

        let cantidadVotos = document.createElement('p')
        cantidadVotos.classList.add('cantidadVotos')
        cantidadVotos.textContent = 'Cantidad de votos: 0'

        let botonVotos = document.createElement('button')
        botonVotos.classList.add('boton-votos')
        botonVotos.textContent = 'Vote'


        let botonEliminar = document.createElement('button')
        botonEliminar.classList.add('boton-eliminar')
        botonEliminar.textContent = 'Delete'

        tarjeta.appendChild(nombrePelicula)
        tarjeta.appendChild(cantidadVotos)
        tarjeta.appendChild(botonVotos)
        tarjeta.appendChild(botonEliminar)

        contenedorCartas.append(tarjeta)
        contadorTarjetas++
        //no toques esto de arriba. ya esta.

        input.value = ''
        let contador = 0
        //Esto limpia y reinicia


        //Este if determina si hay peliculas. de no haberlas, muestra el mensaje
        if (peliculas.length >= 0) {
            cuandoNoHayPeliclas.classList.add('d-none')
        } else {
            cuandoNoHayPeliclas.classList.remove('d-none')
        }

        //Aqui esta la porqueria que da problema: 
        //dentro del boton de eventos se busca hacer todo, 
        botonVotos.addEventListener('click', (event) => {

            //Aumento el contador de votos.
            contador++
            cantidadVotos.textContent = 'Cantidad de votos: ' + contador

            //Creo el objeto. El objeto contiene el nombre de la movie, la cantidad de votos y un id que me ayuda
            //(en teoria) a buscar su posicion dentro del arreglo para poder eliminarlo dado el caso

            let datosFilm = {
                nombre: nombrePelicula.textContent,
                votos: cantidadVotos.textContent[cantidadVotos.textContent.length - 1],
                id: contadorPeliculas
            }

            //a;ado el objeto al arreglo.
            peliculas.push(datosFilm)


            //Busco la pelicula con mayor cantidad de votos dentro de todo el arreglo
            //de peliculas.El punto es que se actualice cada vez que el usuario ingresa un nuevo
            //voto, para que el cambio sea 'en vivo'

            for (let i = 0; i < peliculas.length; i++) {
                if (i == 0) {
                    topFilm = peliculas[0].nombre
                    mayor = peliculas[0].votos
                    lugardelTopFilm.textContent = 'The #1 Film is: ' + topFilm
                } else {
                    if (peliculas[i].votos - 1 > mayor && peliculas[i].nombre != topFilm) {
                        topFilm = peliculas[i].nombre
                        mayor = peliculas[i].votos
                        lugardelTopFilm.textContent = 'The #1 Film is: ' + topFilm

                    } else {
                        topFilm = topFilm
                        mayor = mayor
                        lugardelTopFilm.textContent = 'The #1 Film is: ' + topFilm
                    }
                }

            }

        })


        //Si quieren eliminar algo, visualmente, esto lo hace.
        //solo falta que se elimine de manera interna. PERO COMO PTM?????????????????????
        botonEliminar.addEventListener('click', (event) => {
            tarjeta.remove()

            //Se me ocurre hacer aqui un for each de peliculas. buscar en cada objeto el id. Si coicide con el event target id, se elimina.
            //JS me tira error. Dice que el objeto no puede ser tratado como arreglo. PERO ESTOY ENTRANDO AL ARREGLO CTM!!!!!!!!!!


            //Para devolver a la normalidad a el top 1 film
            contadorTarjetas--
            if (contadorTarjetas == 0) {
                cuandoNoHayPeliclas.classList.remove('d-none')
                lugardelTopFilm.textContent = 'The #1 Film is: None'
            }
        })

        //se reinician los votos para que cada tarjetica tenga los suyos propios
        contador = 0

    }
}

//hace todo lo anterior
botonAgregar.addEventListener('click', () => {
    peliculaPorAgregar()

})

