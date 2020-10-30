// Primero obtengo el elemento que quiero animar:
const pelota = document.getElementById('pelota')

/* element.animate(keyframes = [], option = {}) */

// Luego le agrego el método .animate():

pelota.animate([
    // from
    {
        transform: 'translateX(0)'
    },
    // to
    {
        transform: 'translateX(400px)' // 250
    }
], {
        duration: 2000,
        delay: .1,
        direction: 'alternate',
        easing: 'ease-in-out',
        iterations: 10,
        fill: 'forwards',
        iterationStart: 0, //Sirve cuando quiero que mi animación empiece en cierto estado de la aplicación y que sea controlable
        endDelay: .5, 
})

/* let animateProperties = {
    duration: ms // CSS == animation-duration
    delay: ms  // CSS == animation-delay
    direction: // CSS == animation-direction
    easing: // CSS == animation-timing-function - default == 'linear'
    interactions: // CSS == animation-iteration-count - Infinity != CSS infinite
    fill: // CSS == animation-fill-mode 
    iterationStart: 0 - 1 // nativo de JS - frame de comienzo de animación - 0.4 = 40%
    endDelay: ms, // nativo de JS - tiempo de espera hasta repetir animación
} */