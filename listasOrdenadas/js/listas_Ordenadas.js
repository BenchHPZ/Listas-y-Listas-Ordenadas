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

    for(var i = 0; i < MAX_LIST; i++){ //Recorremos el array de 0 al máximo de la lista que en este caso seria 5
        list[i] = Number.NaN; //Le asignamos a cada elemento de la lista un Not a Number para quitar el undefined
    }
    return list; //Retornamos el array 
}

/*Devuelve true o false en función de si la lista está vacía.*/
function isEmpty(list){
     var empty = false; //Declaramos variablle booleana y la inicialiciamos a false

     if(isNaN(list[0])){ //Empezamos comprobando por la posición 0, si es un Not a Number esta vacia por lo tanto devuelve true
         empty =  true; //Si la lista esta vacia la variable booleana pasa a ser true
     }

     return empty; //Retornamos si la lista esta vacia o no lo esta
}

/*Devuelve true o false en función de si la lista está llena.*/
function isFull(list){
    var full = false; //Declaramos variablle booleana y la inicialiciamos a false

    if(!isNaN(list[MAX_LIST-1])){ //Comprueba si el último elemento de la lista no es un Not a Number la lista se encontraria llena
        full = true; //Si la lista esta llena la variable booleana pasa a ser true
    }

    return full; //Retornamos si la lista esta llena o no lo esta
}

/*Devuelve el número de elementos de la lista.*/
function size(list){
    var length = 0; 

    while(length < MAX_LIST && !isNaN(list[length])){ 
        length++;
    }
    return length;
}

/*Añade un nuevo elemento a la lista manteniendo la relación de orden. Devuelve el tamaño de la lista una vez añadido.*/
function add(list,elem){
    elem = parseInt(elem); //parseamos elemento a un número entero
    var tam = size(list); //Declaramos una variable tamaño inicializada a 0
    var aux;

 	if (isNaN(elem)) {  //Comprobamos si el elemento es un Not a Number
 		throw "El elemento es un Not a Number."; //Si es un Not a Number lanzamos una excepción
    }
     
 	if (isFull(list)){ //Comprobamos si la lista no esta llena
        throw "La lista esta llena."; //Si la lista esta llena lanzamos una excepción
    }
    if(isEmpty(list)){ //Si la lista está vacia 
        list[0] = elem; //añado el elemento a la posición 0 de la lista
        tam++;
    }else{
        list[tam] = elem;
        tam++; 
 		for(var i = 0; i < tam; i++){   //Con 2 bucles recorremos la lista
            for(var j = i+1; j < tam; j++){
                if(list[j] < list[i]){ //Vamos intercambiando los valores de la lista en una variable auxiliar para ordenalos ascendentemente
                    aux = list[i];
                    list[i] = list[j];
                    list[j] = aux;
                }
            }
        }
    }
 	return tam; //Retornamos el tamaño de la lista una vez añadido el elemento*/
}

/*Devuelve el elemento de la lista de la posición indicada.*/
function get(list,index){
    if(index > MAX_LIST){//Si la pos introducida es menor que 1 o la posición es mayor que el tamaño de la lista
        throw "El indice esta fuera de los limites de la lista."; //Lanzamos la siguiente excepción
    }
    return list[index-1]; //Si la posición introducida se encuentra entre el tamaño de la lista retornamos el número que se encuentra en dicha posición
    
}

/*Devuelve la lista en formato cadena. El delimitador de elementos será “-“.*/
function toString(list){
    var cadena = "";  //Declaramos una variable cadena a vacio
    var length = size(list); //Declaramos una variable longitud a la que se le asigna el tamaño de la lista

    if(!isEmpty(list)){  //Comprobamos si la lista no esta vacia
        for(var i = 0; i < length-1; i++){ //Si no esta vacia mendiante un bucle for recorremos las posiciones de la lista
            cadena += list[i] + " - "; //Extraemos cada elemento en su posición de la lista y lo asignamos a la variable cadena.
        }
        cadena += list[i];
    }

    return cadena;  //Retornamos la cadena con cada elemento de la lista separado por "-"
}

/*Devuelve la posición del elemento indicado. Si el elemento no está en la lista devuelve -1.*/
function indexOf(list,elem){
    var num = -1; //Lo inicializo a -1 para en el caso de no encontrar el elemento indicado retorne -1
    var index = 0;

    if(isNaN(elem)){
        throw "El elemento no es un número";
    }

    while(index < size(list)){ //Recorremos la lista
        if(list[index] == elem){ //Cuando el elemento de la lista se encuentre 
            num = index + 1;  //Asignamos a la variable el indice para que sea del 1-5
        }
        index++;
    }
    return num;  //Devolvemos el numero 
}

/*Devuelve la posición del elemento indicado comenzando por el final. Si el elemento no está en la lista devuelve -1.*/
function lastIndexOf(list,elem){
    var num = -1;
    var index = size(list);

    if(isNaN(elem)){
        throw "El elemento no es un número";
    }

    while(index >= 0){ //Se recorre la lista a la inversa
        if(list[index] == elem){ //Cuando el elemento de la lista se encuentre 
            num = index + 1; //Asignamos a la variable el indice para que sea del 1-5
        }
        index--;
    }
    return num; //Devolvemos el numero 
}

/*Devuelve el máximo número de elementos que podemos tener en la lista.*/
function capacity(list){
    return MAX_LIST; //Devolvemos la variable MAX_LIST que contiene el número de elementos de la lista.
}

/*Vacía la lista.*/
function clear(list){
    var length = size(list); //Declaramos una variable la cual la inicializaremos con la función que devuelve el tamaño de la lista
    if(!isEmpty(list)){   //Comprobamos si la lista se en cuentra o no se encuentra vacia
        for(var i = 0; i < length; i++){  //Si la lista no se encuentra vacia mediante un bucle le vamos asignando a cada elemento de la lista un Not a Number
            list[i] = Number.NaN; 
        }
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
        lastElem = list[size(list)-1];  //Si la lista no se encuentra vacia le asignamos el último elemento de la lista a la variable anteriormente declarada
    }
    return lastElem; //Devolvemos el último elemento de la lista
}

/*Elimina el elemento de la posición indicada. Devuelve el elemento borrado.*/
function remove(list,index){
    var elem = list[index-1]; //Guardo el elemento en una variable
    if(index > size(list)){
        throw "El índice está fuera de los límites de la lista.";
    }else{
        for(var i = index-1; i < size(list);i++){
            list[i]=list[i+1]; //Voy metiendo el de la posición siguiente
        }
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

function testList(){
    var list = create();

    list = [20,9];

    console.log("Capacidad de la lista: "+capacity(list));
    console.log("La lista esta vacia: "+isEmpty(list));
    console.log("La lista esta llena: "+isFull(list));
    console.log("Longitud: "+size(list));

    console.log(toString(list));
    console.log("Primer elemento de la lista: "+firstElement(list));
    console.log("Último elemento de la lista: "+lastElement(list));

    console.log("El elemento en la posición 1 es: "+get(list,1));

    console.log("El elemento indicado es el 9 se encuentra en la posición: "+indexOf(list,9));
    console.log("El elemento indicado es el 109 y se encuentra en la posición: "+lastIndexOf(list,109));

    console.log(toString(list));

    console.log("Añado el elemento 8 y ahora el tamaño de la lista es: "+add(list,8));
    console.log(toString(list));


    console.log("Añado el elemento 2 y ahora el tamaño de la lista es: "+add(list,2));
    console.log(toString(list));

    console.log("El elemento indicado es el 9 se encuentra en la posición: "+indexOf(list,9));

    console.log("El elemento indicado en la posición 4 para eliminar es: "+remove(list,4));
    console.log(toString(list));

    
    console.log("El elemento indicado en la posición 1 para eliminar es: "+remove(list,1));
    console.log(toString(list));

    console.log("Añado el elemento 10 y ahora el tamaño de la lista es: "+add(list,10));
    console.log(toString(list));

    
    console.log("Añado el elemento 3 y ahora el tamaño de la lista es: "+add(list,3));
    console.log(toString(list));

    console.log("El elemento 28 es el indicado para eliminar: "+removeElement(list,28));
    console.log(toString(list));

    console.log("El elemento 8 indicado para eliminar ¿Ha sido eliminado?: "+removeElement(list,8));
    console.log(toString(list));

}
window.onload = testList;