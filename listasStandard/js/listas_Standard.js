"use strict";
/*FUNCIONES HTML*/

//Variable que contiene el array para implementar la pila
var NUMBERS_LIST = create();

 //función que limpia el formulario
function cleanData(){
    document.getElementById ("num").value = "" ;  
}

//Función que se encarga de añadir elementos a la lista
function addNumber(num){
   var error = document.getElementById ("error");
   var list = document.getElementById ("list");
   error.innerHTML = "";  
    try {
        add(NUMBERS_LIST,num);
        list.innerHTML = toString(NUMBERS_LIST);
    } catch (err) {
        error.innerHTML = err;
    }	
}

//Función que se encarga de eliminar elementos de la lista
function removeNumber(num){
   num = parseInt(num);
   var error = document.getElementById ("error");
   var list = document.getElementById ("list");
   error.innerHTML = "";  
   
    try {
        removeElement(NUMBERS_LIST,num);
        list.innerHTML = toString(NUMBERS_LIST);
    } catch (err) {
        error.innerHTML = err;
    }		
}

/*FUNCIONES DE JAVASCRIPT*/
var MAX_LIST = 5; //La máxima capacidad que va a tener la lista

/*Crea una lista con el array ya instanciado con el número de elementos máximos.*/
function create(){
    var list = []; //Creamos el array lista que sera un array vacio 
    return list; //Retornamos el array 
}

/*Devuelve true o false en función de si la lista está vacía.*/
function isEmpty(list){
    return (list.length === 0); //Devuelve true si la lista está vacia o false si no lo está
}

/*Devuelve true o false en función de si la lista está llena.*/
function isFull(list){
    return (list.length === MAX_LIST); //Devuelve true si la lista está llena o false si no lo está
}

/*Devuelve el número de elementos de la lista.*/
function size(list){
    return list.length; //Devolvemos el tamaño de la lista
}

/*Añade un nuevo elemento al final de la lista. Devuelve el tamaño de la lista una vez añadido.*/
function add(list,elem){
    elem = parseInt(elem); //parseamos elemento a un número entero

 	if (isNaN(elem)) {  //Comprobamos si el elemento es un Not a Number
 		throw "El elemento es un Not a Number."; //Si es un Not a Number lanzamos una excepción
    }
 	if (isFull(list)){ //Comprobamos si la lista no esta llena
        throw "La lista esta llena."; //Si la lista esta llena lanzamos una excepción
    } 
    
    list.push(elem); //Con el método push se añade un elemento en el último espacio de la lista que se encuetre libre

    return size(list); //Retornamos el tamaño de la lista una vez añadido el elemento
}

/*Añade un nuevo elemento en la posición especificada en la lista. Devuelve el tamaño de la lista una vez añadido.*/
function addAt(list,elem,index){
    var num = parseInt(elem);

	if(isNaN(num)){ //Compruebo si el elemento es un número
		throw "El elemento es un Not a Number";
    }
    if(isFull(list)){ //Compruebo si la lista esta llena si es asi no puedo meter un nuevo elemento
		throw "Lista llena";
    }

    if(index > MAX_LIST){ //Si la posición es menor que el maximo de elementos de la lista 
        throw "El indice esta fuera de los limites de la lista.";
    }
    list.splice([index-1],0,num); //Se le asigna el número que vamos añadir a la variable num
	
	return size(list); //Devolvemos el tamaño de la lista
}

/*Devuelve el elemento de la lista de la posición indicada.*/
function get(list,index){
    var index = parseInt(index);//Declaramos una variable pos a la que le pasamos el parseInt del indice 
    if(index > MAX_LIST){//Si la pos introducida es menor que 1 o la posición es mayor que el tamaño de la lista
        throw "El indice esta fuera de los limites de la lista."; //Lanzamos la siguiente excepción
    }
    return list[index-1]; //Si la posición introducida se encuentra entre el tamaño de la lista retornamos el número que se encuentra en dicha posición 
}

/*Devuelve la lista en formato cadena. El delimitador de elementos será “-“.*/
function toString(list){    
    return list.toString();
    
}

/*Devuelve la posición del elemento indicado. Si el elemento no está en la lista devuelve -1.*/
function indexOf(list,elem){
	elem = parseInt(elem);
    var index;

    if(isNaN(elem)){
        throw "El elemento no es un número";
    }

    if(list.indexOf(elem) != -1){  //Compruebo si el elemento se encuentra en la lista
        index = list.indexOf(elem)+1; //Si se encuentra devolvemos la posición correspondiente al elemento indicado
    }else{
        index = -1; //Si el elemento no se encuentra devolvemos -1
    }

    return index; //Devuelve la posición de la primera aparición de un valor especificado en una cadena.
}

/*Devuelve la posición del elemento indicado comenzando por el final. Si el elemento no está en la lista devuelve -1.*/
function lastIndexOf(list,elem){
	elem = parseInt(elem);
    var index;

    if(isNaN(elem)){
        throw "El elemento no es un número";
    }

    if(list.lastIndexOf(elem) != -1){  //Compruebo si el elemento se encuentra en la lista
        index = list.lastIndexOf(elem)+1; //Si se encuentra devolvemos la posición correspondiente al elemento indicado
    }else{
        index = -1; //Si el elemento no se encuentra devolvemos -1
    }

    return index; //Devuelve la posición de la última aparición de un valor especificado en una cadena.
}

/*Devuelve el máximo número de elementos que podemos tener en la lista.*/
function capacity(list){
    return MAX_LIST; //Devolvemos la variable MAX_LIST que contiene el número de elementos de la lista.
}

/*Vacía la lista.*/
function clear(list){
    var elem = Number.NaN;
    if (!isEmpty(list)){
        list.splice(0, list.length); //Agrega / elimina elementos a / desde una matriz y devuelve los elementos eliminados.
    } 	
}

/*Devuelve el primer elemento de la lista*/
function firstElement(list){
    var firstElem;  //Declaramos una variable a la que posteriormente le asignaremos el primer elemento de la lista
    if(isEmpty(list)){ //Comprobamos si la lista se encuentra vacia
        throw "La lista esta vacía"; //Si la lista se encuentra vacia lanzamos la siguiente excepción
    }else{
        firstElem = list[0]; //Si la lista no se encuentra vacia le asignamos el primer elemento de la lista a la variable anteriormente declarada
    }
    return firstElem; //Devolvemos el primer elemento de la lista
}

/*Devuelve el último elemento de la lista*/
function lastElement(list){
    var lastElem; //Declaramos una variable a la que posteriormente le asignaremos el último elemento de la lista
    if(isEmpty(list)){ //Comprobamos si la lista se encuentra vacia
        throw "La lista esta vacía"; //Si la lista se encuentra vacia lanzamos la siguiente excepción
    }else{
        lastElem = list[list.length-1];  //Si la lista no se encuentra vacia le asignamos el último elemento de la lista a la variable anteriormente declarada
    }
    return lastElem; //Devolvemos el último elemento de la lista
}

/*Elimina el elemento de la posición indicada. Devuelve el elemento borrado.*/
function remove(list,index){
    var elem = list[index-1]; //Guardo el elemento en una variable
    
    var elem;

    if(index > size(list)){
        throw "El índice está fuera de los límites de la lista.";
    }else{
       elem = list.splice(index-1,1);
    }
    return elem;  //Devolvemos el elementoq ue hemos eliminado de la lista
}

/*Elimina el elemento indicado de la lista. Devuelve true si se ha podido borrar el elemento, false en caso contrario.*/
function removeElement(list,elem){
    elem = parseInt(elem);
    var found = false;
    var index = 0;


    if(isNaN(elem)){
        throw "El elemento no es un número";
    }else{
        while(index < size(list)){
			if(elem == list[index]){
				for(var i=index;i<size(list);i++){
					list[i] = list[i+1];
					found=true;
				}		
			}else{
				index++;	
			}
		}
        return found;
    }
}

/*Reemplaza el elemento de la lista indicado por el índice. Devuelve el elemento que estaba anteriormente en la lista.*/
function set(list,elem,index){
    var result;

    if(isNaN(elem)){
        throw "El elemento no es un número";
    }

    if( index > size(list)){
        throw "El índice está fuera de los límites de la lista.";
    }
    
    result = list[index-1]; //Guardamos en la variable el elemento anterior de la lista para luego devolverlo

    list[index-1] = elem; //Sustituyo el elemento antiguo por el nuevo en la posición indicada

    return result; 
}
function testList(){
    var list = create(); //En este caso hago la prueba de la lista vacia completamente

    console.log("Capacidad de la lista: "+capacity(list));
    console.log("La lista esta vacia: "+isEmpty(list));
    console.log("La lista esta llena: "+isFull(list));
    console.log("Longitud: "+size(list));

    console.log("Añado el elemento 20 y ahora el tamaño de la lista es: " + add(list, 20));
    console.log(toString(list));

    console.log("Añado el elemento 9 y ahora el tamaño de la lista es: " +addAt(list, 9,2));
    console.log(toString(list));

    console.log("Añado el elemento 33 y ahora el tamaño de la lista es: "+addAt(list, 33,3));
    console.log(toString(list));

    console.log("Primer elemento de la lista: "+firstElement(list));
    console.log("Último elemento de la lista: "+lastElement(list));

    console.log("El elemento en la posición 1 es: "+get(list,1));

    console.log("El elemento indicado es el 9 se encuentra en la posición: "+indexOf(list,9));
    console.log("El elemento indicado es el 20 y se encuentra en la posición: "+lastIndexOf(list,20));

    console.log("El elemento indicado en la posición 3 para eliminar es: "+remove(list,3));
    console.log(toString(list));

    console.log("El elemento 28 es el indicado para eliminar: "+removeElement(list,28));
    console.log(toString(list));

    console.log("El elemento a reemplazar indicado por el indice 1: "+set(list,82,1));
    console.log(toString(list));
    
    console.log("El elemento indicado para reemplazar en el indice 1: "+set(list,58,1));
    console.log(toString(list));

    console.log("Añado el elemento 33 y ahora el tamaño de la lista es: "+addAt(list,22,3));
    console.log(toString(list));

    console.log("El elemento 82 indicado para eliminar ¿Ha sido eliminado?: "+removeElement(list,82));
    console.log(toString(list));

    console.log("El elemento 58 indicado para eliminar ¿Ha sido eliminado?: "+removeElement(list,58));
    console.log(toString(list));

}
window.onload = testList;