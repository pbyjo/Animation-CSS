# Animación para la web 💻

>Este es un repositorio dedicado a animaciones para la web con CSS, en el estan todos los módulos y clases del curso. Todas las clases las encuentras por commit especificadas.

### Tools Notes 📝
```json
{
    
}
```

### Temario.
#### Introducción
* Introducción
	Propiedades CSS: Transitions | Transform | Animations
	> Class 2

#### Transiciones
* Sintaxis de transiciones
	> Class 3

```html
<style>

.ball {
Transition-property: width, height;
Transition-duration:  .4s, 4000ms;
Transition-delay: 2s;
Transition-timing-function: ease;
}

.ball:hover {

}
/* sintaxis resumida - transition: width .4s 2s ease; */

</style>
```

* Transiciones de Interacción
>Class 4
		Ahora con CSS3 podemos hacer calculos

```html 
<style>

/* Anotación */
	n:hover {
		width: 120px;
		height: 120px;
		right: calc(50% - 120px); 
	}

</style>
```

#### Transformaciones CSS

* Sintaxis de transformaciones
	>Class 5
		NUEVA PROPIEDAD: Transform
    	transform: rotar | sesgar | posicion | tamaño

```html
<style>

/* Anotación */
.n {
	transform: rotate(15deg) skew(25deg) translate(50px) scale(.6);
}

</style>
```

* Transformacion de rotación
	>Class 6

	>una buena practica para crear una transición a un elemento que interactua con el mouse es agregandole un elemento padre a este mismo y desde ahi crear la regla :hover

```html
<style>
.container {
    border: 2px solid black;
}
.container:hover .cuadrado {
   /* transform: rotatey(45deg); */
   /* transform: rotate(-45deg); */
   /* transform: rotatex(45deg); */
   /* transform: rotatez(45deg); */
   /* transform: rotateX(20deg) rotateY(30deg) rotateZ(45deg); */
   /* transform: rotate3d(x ,y ,z , rotate); */
   transform: rotate3d(1, 1, 0, 40deg);
}

.cuadrado {
    width: 16vw;
    height: 20vh;
    background-color: thistle;
    color: teal;
    margin: 20px;
    transition: .3s;
}
</style>
```

* Transformaciones de translación y perspectiva
	>Class 7
		transform: translate(X, Y);

	>para realizar una translación en el eje Z es necesario agregar una perspectiva a nuestro proyecto, mas especificamente a un contenedor padre de los elementos que quiero transformar.

```html
<style>
body {
	perspective: 200px;
}
.container {
	transform-style: preserve-3d;
}
.cuadrado5 {
    transition: .6s;
}
.container:hover .cuadrado5 {
    transform: translateZ(100px);
	transform: translate3d(-400px, -200px, 20px); (Combinacion de todos los ejes)
    background-color: violet;
}
</style>
```

>Nota: es importante agregar al contenedor la propiedad transform-style para que asi detecte una superficie 3d de su padre (en este caso el body)
	
		>Con:

		Ejemplos:
		perspective-origin: center; (predeterminado)
		perspective-origin: bottom;
		perspective-origin: left;
		perspective-origin: bottom left;

>Puedo decirle a que lado quiero que haga el translate en eje Z

* Transformaciones de escala
	>Class 8

	>A diferencia de translate con eje Z, puedo utilizar el atributo scale con valores de 0 a 1 sin necesitar de una perspectiva en el elemento padre.

		Ejemplo:
		.container:hover .cuadrado { 
		transform: scale(1.5);
		transform: scale(2, .5); /*En dos ejes */
		background-color: rebeccapurple; 
		}

	>Con los dos ejes podriamos modificar la anatomia de nuestro elemento.

* Transformacion por sesgado
	>Class 9 

		Sintaxis:
		.container:hover .cuadrado {
		transform: skew(20deg);
		transform: skew(20deg, 15deg); /* Ambos ejes */
		}

* Transformacion: Punto de origen
	>Class 10

	>Es el punto a configurar en el eje X y Y desde donde queremos que inicie nuestro transform

		Sintaxis:
		.container:hover .cuadrado {
		/* transform-origin: X Y; */
		/* transform-origin: left top; */
		transform-origin: 75% 75%;
		transform: rotateZ(30deg); (Nos permite la transformacion en los dos ejes en una sola linea)
		background-color: gold;
		}

#### Animaciones CSS

* Sintaxis
	>Class 11

	- animation-name: css; /* asignarle un nombre a nuestra animacion creando basicamente una variable para nuestro @keyframes */

	- animation-duration: time; /* Cuanto tiempo dura nuestra animación */
	- animation-delay: time; /* Delay antes de empezar la animación*/
	- animation-interation-count: infinite; /* Numero de veces que quiero que se repita */
	- animation-timing-function: /* Podemos configurar como funciona el suavizado, por defecto esta en ease */
		>ease, ease-in, ease-out, ease-in-out, linear, cubic-bezier()
	- animation-direction: reverse; /* Direccion a la que quiero que vaya mi animacion segun los parametros de mi @keyframes. reverse, alternate*/
	- animation-fill-mode: forwards; /* Valor final que tendra mi animación cuando este se ejecute, en este caso con opcity 0 */ 
	- animation-play-state: paused; /* Propiedad que me da el estado de la animacion, es util cuando se hace hover */

	>Keyframes sintaxis:
			@keyframes goldd {
			0% {
				opacity: 1;
			}
			100% {
				opacity: 0;
			}
			}	

* Aceleración y curva de bezier
	>Class 12

	animation-timing-function: linear;
	animation-timing-function: cubic-bezier(1, 0, 0, 1);	
	animation-timing-function: steps(fps); /* Esto va en relacion con nuestro animation-duration */

>para personalizar mas a detalle nuestra curva de bezier, podemos usar una herramienta online https://cubic-bezier.com

* Múltiples animaciones
	>Class 13

	Podemos realizar animaciones y reglas multiples creando nuevos @keyframes y nombrandolas en nuestra misma funcion de animacion.
		Ejemplo:

		animation-name: move, jump;
		@keyframes jump {
			from {
				transform: translateY(0) scale(1, .8);
			}
			to {
				transform: translateY(-12vh) scale(.6, .8);
			}
		}

* Detectar eventos de animaciones con JS
	>Class 14

	Podemos agregar un script para detectar nuestros eventos en css y asi realizar un encadenamiento de animaciones.

```javascript
	const cuadrado = document.getElementById('cuadrado');

        /* $cuadrado7.addEventListener('nombre del evento', funcion) */ 

        cuadrado.addEventListener('animationend', (event) => {

            /* console.log(event.animationName); */
            if (event.animationName === 'jump') {
                cuadrado.style.animationName = 'move stairs';
                cuadrado.style.animationDuration = '3s';
            }
        });
```

* Optimizar render con will-change y developer tools
	>Class15

	Con will-change podemos optimizar nuestro render especialmente cuando hacemos opacity y transformaciones, con ello podemos avisarle al navegador antes de hacerlo y no se creen repintados o impresiones extras reduciendo asi los recursos que se consumen.

		will-change: opacity, transform;

	Tambien en las developers tools del navegador en el apartado de animations podemos ver todo el comportamiento y parametros de nuestras animaciones
	
```css
.cuadrado {
        width: 200px;
        height: 200px;
        background-color: #000;
        transition-duration: 2s;
        opacity: 1;
        will-change: opacity, transform;
    }
    .container:hover .cuadrado {
        opacity: 0;
        transform: scale(1.5, 0.5);
    }
```

* Propiedades animables
	>Class16

	Existen muchas propiedades de los elementos web que se pueden animar.
	
	>Recurso - https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties 

	Aqui se pueden ver todas las propiedades css que se pueden animar.

#### Web animations API (Animaciones con js)

* element.animate
	>Class 17

	Con esta propiedad podemos crear animaciones en js, que es parte de la especificación del API de animaciones de javascript.

		$element.animate()

		let animateProperties = {
		duration: ms // CSS == animation-duration
		delay: ms  // CSS == animation-delay
		direction: // CSS == animation-direction
		easing: // CSS == animation-timing-function - default == 'linear'
		interactions: // CSS == animation-iteration-count - Infinity != CSS infinite
		fill: // CSS == animation-fill-mode 
		iterationStart: 0 - 1 // nativo de JS - frame de comienzo de animación - 0.4 = 40%
		endDelay: ms, // nativo de JS - tiempo de espera hasta repetir animación
  		}
	
	>Notar que los dos objetos van separados por una ',' simple.

	Para realizar animaciones web podemos usar las técnicas de CSS que ya vimos o JavaScript, JS también nos ofrece una funcionalidad que nos permite crear animaciones de una manera muy similar a CSS, esta funcionalidad se llama anímate, y recibe dos parámetros, el primer, es un arreglo de objetos indicando los estados de la animación, mientras que el segundo parámetro es un objeto con las reglas de la animación.

	Estas reglas son las mismas que en CSS, duration, delay, direction, easing, interations, fill. Pero recibe dos nuevas, iterationStart y endDelay, la primera especifica en qué momento la animación va a comenzar y la segunda determina cuanto tiempo se va a demorar en una animación en su último estado después de que toda la animación termine.

* Controlar animaciones 
	>Class 18

	>Podemos controlar el estado de la animación. Esto podemos hacerlo por medio de botones que disparen la función que queremos. Los métodos que tenemos disponibles podemos verlos en la variable 'animate' en la consola.

	Ej (tomando el ejemplo de la clase anterior):

		``` javascript
		const animation = $element.animate(
      	keyFrames, animateProperties)
		  
		const $playButton = document.getElementById('play');
		const $pauseButton = document.getElementById('pause');
		const $stopButton = document.getElementById('stop');
		const $reverseButton = document.getElementById('reverse');

		$playButton.addEventListener ('click', () => {
			animation.play();
		});
		$pauseButton.addEventListener ('click', () => {
			animation.pause();
		});
		$stopButton.addEventListener ('click', () => {
			animation.finish();
		});
		$reverseButton.addEventListener ('click', () => {
			animation.reverse();
		});
		```

	