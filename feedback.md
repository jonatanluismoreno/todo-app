Componente Button: Deberia ser un button del html y buttonClass se podria simplificar en el atributo disabled del button, este te permite darle estilos y ademas bloquear los clicks // VER, Listo?

Me gusta que hayas usado form dentro del componente input, deberia llamarse de otra manera, tipo AddTodo, o TodoForm o algo asi // LISTO

Componente Task bien

Bien que tas destructurando, hoy en dia todo es destructuracion :eyes:

El listados de tasks deberia ser un ul li // LISTO

Me parece bien las funciones dentro de app, los nombres y sus logicas separadas. Con useEffect se mejoraria el manejo de showPublications y publications en paralelo

me llamo la atencion que showPublications inicie con publications, para el caso ta bien, pero en caso de que hubiera un componente padre que cause un re-render de app podria romperse, no toy seguro. De todos modos esta sincronizacion se mejoraria con useEffect 

FUNCIONAL: 

Cuando agrego muchos items y no checkeo ninguno no me deja seleccionar el ultimo // VER

creo que hay cositas cuando cambio de vista seleccionada y voy afectando los estados. Por ejemplo me paro en el listado de completados y deselecciono uno. De todos modos esto se podria mejorar con useEffect // VER