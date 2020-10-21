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

````html
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

````html
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