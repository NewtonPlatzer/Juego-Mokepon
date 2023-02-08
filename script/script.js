window.addEventListener('load', iniciarJuego)

function iniciarJuego() {
    let botonMascotaJugador = document.getElementById('boton-mascota');

    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
}

function seleccionarMascotaJugador() {
    inputHipodoge = document.getElementById('hipodoge');
    inputCapipepo = document.getElementById('capipepo');
    inputRatigueya = document.getElementById('ratigueya');
    if (inputHipodoge.checked) {
        alert("La mascota seleccionada es HIPODOGE");
    } else if (inputCapipepo.checked) {
        alert("La mascota seleccionada es CAPIPEPO");
    } else if (inputRatigueya.checked) {
        alert("La mascota seleccionada es RATIGUEYA");
    } else {
        alert("Tienes que seleccionar una mascota");
    }
}

