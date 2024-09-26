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


let misDatos = {
    nombre:"Cris",
    apellidos:"Bermudez",
    edad:29
}

let configuracion = {
    versionTS:"Es6",
    versionCodido:"1.0",
    ... misDatos
}

let propiedad1 = configuracion.versionTS;
let propiedad2 = configuracion.versionCodido;

console.log(`${propiedad1} ${propiedad2}`);

enum EstadoTarea {"Pendiente"="P","Enproceso"="E","Terminado"="T"}

let estadoPendiente = EstadoTarea.Enproceso

interface Tarea{
    nombre:string,
    prioridad:number,
    estado:EstadoTarea
}

let tarea1:Tarea = {nombre:"Tarea1", prioridad:2, estado:EstadoTarea.Enproceso}

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

let empleado2:Empleado&Administrativo;

empleado2={edad:29,fotocopia:500,nombre:"Maria",sueldo:1000}

console.log(empleado2)

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