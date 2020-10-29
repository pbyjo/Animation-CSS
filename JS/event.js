const cuadrado = document.getElementById('cuadrado');

        /* $cuadrado7.addEventListener('nombre del evento', funcion) */ 

        cuadrado.addEventListener('animationend', (event) => {

            /* console.log(event.animationName); */
            if (event.animationName === 'jump') {
                cuadrado.style.animationName = 'move stairs';
                cuadrado.style.animationDuration = '3s';
            }
        });