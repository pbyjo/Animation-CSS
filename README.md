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