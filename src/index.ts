// Tipos de datos
/**
 * string
 * number - enteros y decimales
 * boolean - true / false
 * null
 * undefined
 */

import { Console } from "console";

// Existe también el tipo any pero se supone que esta prohibido

// Tipos de variables
var nombre:string = "Cristina"; // Variable global
let apellido:string = "Bermudez"; // Variable local
const PI:number = 3.1415; // Constante (Nunca cambia)

// PI = 2; // Si descomentas esto, veras el error de la constante

//imprimir por consola
// Formas de concatenar un Print
console.log("Hola " + nombre + " " + apellido);
console.log("Hola " + nombre, apellido);
console.log(`Hola ${nombre}`); // Son tildes francesas, no comillas simples

// Declarar varias variables en una línea
let a:string = "ABCD", b:number = 2, c:boolean = false;

// Array de datos   
let alumnos:string[] = ["Juan", "Jose", "Alex"];

// Array de datos de 3 tipos
let valores: (string | number | boolean)[] = [3, "Hola", 2, true]; //No tiene porque estar ordenado los datos dentro del array según los tipos declarados

// Forma de juntar 2 arrays en un array e incluso agregar
let alumnos1A:string[] = ["Juan", "Pedro", "Fran"];
let alumnos2A:string[] = ["Jose"];
let alumnosTodos:string[] = [...alumnos1A, ...alumnos2A, "Pablo"]
console.log(alumnosTodos);

/***
 * Creación de un objeto compuesto por datos primitivos
 */

let misDatos = {
    nombre:"Cris",
    apellidos:"Bermudez",
    edad:29
}

//Propagación de la variable misDatos
let configuracion = {
    versionTS:"Es6",
    versionCodido:"1.0",
    ... misDatos
}

// Declaración y Asignación 1 a 1
let propiedad1 = configuracion.versionTS;
let propiedad2 = configuracion.versionCodido;

console.log(`${propiedad1} ${propiedad2}`);


/**
 * Enumerados : permite definir un conjunto de constantes bajo un identificador.
 * Si imprimimos el valor de un valor del enumerado observaremos que 
 * lo que almacena es el un valor numérico.
 * 
 */ 
enum EstadoTarea {
    "Pendiente"="P",
    "Enproceso"="E",
    "Terminado"="T"
}
let estadoPendiente = EstadoTarea.Enproceso
console.log(`El valor del enumerado Pendiente es: ${estadoPendiente}`);


/**
 * Interfaces: describen la estructura de un objeto.
 * Las interfaces contienen la definición de los métodos y propiedades
 * de un objeto, pero no su implementación.
 * Una interfaz puede extender de otra.
 */
interface Tarea{
    nombre:string,
    prioridad:number,
    estado:EstadoTarea
}

let tarea1:Tarea = {nombre:"Tarea1", prioridad:2, estado:EstadoTarea.Enproceso}
let tarea2:Tarea = {nombre:"Tarea2", prioridad:2, estado:EstadoTarea.Enproceso}
let tarea3:Tarea = {nombre:"Tarea3", prioridad:2, estado:EstadoTarea.Enproceso}
let tarea4:Tarea = {nombre:"Tarea4", prioridad:2, estado:EstadoTarea.Enproceso}
let tarea5:Tarea = {nombre:"Tarea5", prioridad:2, estado:EstadoTarea.Enproceso}

/**
 * Types: permite crear un tipo de dato personalizado a partir de tipos de datos primitivos
 * Permiten crear una estructura de datos más compleja.
 */
type Empleado = {
    nombre:string,
    edad:number,
    sueldo:number
}
type Administrativo = {
    fotocopia:number
}

let empleado1:Empleado={nombre:"Cris",edad:30,sueldo:15000}
console.log(empleado1.edad)

/* Intersección de datos: permite combinar dos o más tipos de datos en uno solo. 
*/
let empleado2:Empleado&Administrativo;

empleado2={edad:29,fotocopia:500,nombre:"Maria",sueldo:1000}

console.log(empleado2)

/***
 * Operadores de comparación:
 * 
 * == -> compara el valor de la variable
 * === compara el valor de la variable + el tipo de datos
 */

//Operador Ternario
//condicion ? veradero : falso

console.log(tarea1.estado == "E" ? `La tarea ${tarea1.nombre} se encuentra en ejecución` : `La tarea ${tarea1.nombre} no se ha ejecutado`)

//Estructura if-else
if(empleado1.edad==empleado2.edad){
    console.log("Ambos empleados tienen la misma edad")
}else if(empleado1.edad>empleado2.edad){
    console.log(`${empleado1.nombre} es mayor que ${empleado2.nombre}`)
}else{
    console.log(`${empleado1.nombre} es menor que ${empleado2.nombre}`)
}

//Switch

switch(tarea1.estado){
    case "P":
        console.log("Tarea en pendiente");
    break;
    case "E":
        console.log("Tarea en proceso")
    break;
    default:
        console.log("Otro estado o no tiene estado");
    break;            
}

try {
    let numero1:number=1;
    console.log(numero1.toString())

} catch (error) {
    console.log("Se ha producido un error al convertir un numero en String",error)
}

//bucle
let listaTareasNuevas: Tarea[] = [
    {
        nombre:"Tarea 1",
        estado: EstadoTarea.Pendiente,
        prioridad: 3
    },
    {
        nombre:"Tarea 2",
        estado: EstadoTarea.Enproceso,
        prioridad: 0
    },
    {
        nombre:"Tarea 3",
        estado: EstadoTarea.Terminado,
        prioridad: 1
    },
    {
        nombre:"Tarea 4",
        estado: EstadoTarea.Enproceso,
        prioridad: 0
    },
    {
        nombre:"Tarea ",
        estado: EstadoTarea.Terminado,
        prioridad: 1
    }
]

//FOREACH
console.log("Esto es el resultado del foreach")
listaTareasNuevas.forEach((tarea:Tarea, index:number) =>{
    console.log(tarea,index)
}
);

console.log("-----------")
//FOR
console.log("Esto es el resultado del for")
for (let i = 0; i < listaTareasNuevas.length ; i++){
    const tarea = listaTareasNuevas[i];
    console.log(tarea);
}
console.log("-----------")

//Bucle While
console.log("Esto es el resultado del while")
console.log(tarea1)
while(tarea1.estado!==EstadoTarea.Terminado || tarea1.prioridad==3){
    tarea1.estado=EstadoTarea.Terminado
}
console.log(tarea1)

console.log("-----------")

//bucle do while
console.log(`La tarea 1 tiene prioridad: ${tarea1.prioridad}`)
do{
    tarea1.prioridad++;
}while(tarea1.prioridad>5)

console.log(`La tarea 1 tiene prioridad: ${tarea1.prioridad}`)

console.log("-------------------")

//FUNCIONES

/**
 * Muestra un saludo por consola a una persona
 * @param nombre string nombre del usuario
 * 
 */
function saludar (nombre:string):void{
    console.log(`Hola ${nombre}, ¿Qué tal estas?`);
}
saludar("Cristina");

//Funciones con parámeros por defecto
/**
 * Funcion que le entra un parametro nombre y lo muestra por consola
 * @param nombre string nombre predefinido
 */
function saludarDefault (nombre:string = "Cristina"){
    console.log(`Hola ${nombre}, ¿Qué tal estas?`);
}
saludarDefault();
saludarDefault("Jose");

console.log("-----------")
//Funciones con parámeros opcionales
/**
 * Funcion con parametro opcional 
 * @param nombre 
 */
function saludarOpcional (nombre:string = "Cristina",apellido?:string){
    let nombreParam = nombre;
    if(apellido != undefined){
        console.log(`Hola ${nombreParam}${apellido}`);
    }else{
        console.log(`Hola ${nombreParam}`);
    }
}

saludarOpcional("Cristina ","Bermudez");
saludarOpcional();
console.log("-----------------")

// Funciones con parámetros de varios tipos
//El tipo de a es un "tipo unión", lo que 
//significa que puede ser de tipo string o de tipo number. 
//Es decir, a puede ser una cadena de texto o un número.
//Aquí se usa typeof(a) para determinar si el valor de a es un string o un number.

function variosTipos (a: string | number){
    if (typeof(a) == "string"){
        console.log("a es un string");
    } else{
        console.log("a es un number");
    }
}
variosTipos(1);
variosTipos("Hola")

console.log("----------")

// Función con retorno: return
function suma (a:number,b:number): number{
    return a+b;
}
var resultadoSuma:number = suma(1,2);
console.log(resultadoSuma);
console.log(suma(1,2));

const funcRestar = function (valor1:number, valor2:number): number {
    return valor1 - valor2;
}
console.log(`la resta de 5 - 2 es: ${funcRestar(5,2)}`)

console.log("----------")

//funciones anonimas
let fanonima = function(){console.log("Hola mundo")}
fanonima();

let fitera = function(elementos:Tarea,indice:number){
    console.log(`la tarea $${elementos.nombre} se encuentra en el elemento ${indice} del array`)
}
listaTareasNuevas.forEach(fitera)

/**
 * Funciones, rest parameters (parámetros rest)
 * Permite definir funciones que tomen un número indeterminado de argumentos
 */
function multiParam (...nombres: string[]):void{
    nombres.forEach((nombre)  => {
        console.log(nombre);
    })
}
multiParam("Mateo","Martin");
// A las funciones rest también se le puede pasar una lista de elementos
let listaNombres:string[] = ["Angel","Francisco"];
multiParam(...listaNombres);

function muestraUsuarios(...tareas:Tarea[]):void{
    tareas.forEach(fitera)
}

muestraUsuarios(tarea1,tarea2,tarea3);
muestraUsuarios(...listaTareasNuevas);

console.log("-----------")

let farrow=(tarea:Tarea,indice:number) => {console.log(`${indice} - ${tarea.nombre}`)}
farrow(tarea1,1)
console.log("---------")
listaTareasNuevas.forEach(farrow);
console.log("---------")
listaTareasNuevas.forEach((tarea:Tarea)=>{console.log(`${tarea.nombre}`)})
/*
let getDatosTarea = (tarea:Tarea):string => {return `La tarea denominada ${tarea.nombre} cuyo estado es ${tarea.estado} tiene una prioridad ${tarea.prioridad} `}
console.log(getDatosTarea(tarea1));
*/

/**
 * Funciones CallBack
 * Una función callback es una función que se pasa a otra función como parámetro y dentro de la misma es llamada.
 * Hay que tener en cuenta que una función se trata como un objeto.
 */
/*
//Ejemplo 1: 
const funcionMuestra = function (){
    console.log("CallBack desde función estándar");
}
setTimeout(funcionMuestra,100); // La función timeout llama a funciónMuestra después de 100ms

// Ejemplo 2: paso de una función anónima
setTimeout(function(){console.log("CallBack desde función anónima")},1000);

// Ejemplo 3: paso de una función flecha

setTimeout(()=>{console.log("CallBack desde función flecha")},500);

// Ejemplo 4:
//let muestraDatos = function (a:string, b:number, c:string[]){
  //  console.log(`Ejemplo 4 - ${a}`);
//}

//listaTareasNuevas.forEach(muestraDatos)

//listaTareasNuevas.forEach((valor:string,indice:number,datos:string[]) => {
  //  console.log(`${valor}, mostrado desde función CallBack fecha`)
//})
*/
// Ejemplo 5: 
/*
let fsuma = function suma(a:number, b:number){
    console.log("Llamada desde función opera")
    return a+b;
}

let fresta = function resta(a:number,b:number){
    return a-b;
}*/
/*
console.log(fresta(5,2))

// En este ejemplo estamos definiendo que la función opera espera recibir como parámetro una función CallBack
// Concretamente, estamos diciendo que la función como entrada tiene que tener dos parámetros y devolver un número
// Cuando se llama a dicha función CallBack desde la función principal se le pasan dichos parámetros y se vuelve a operar con el resultado
*/
/*
function opera (x:number,y:number,callbackfuntion:(a:number,b:number)=> number){
    return callbackfuntion(x,y);
}

opera(2,3,fsuma);

opera(2,3,fresta)
*/