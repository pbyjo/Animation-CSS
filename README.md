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
	
</style>```

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
	
</style>```