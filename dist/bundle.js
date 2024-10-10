/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/js-cookie/dist/js.cookie.js":
/*!**************************************************!*\
  !*** ./node_modules/js-cookie/dist/js.cookie.js ***!
  \**************************************************/
/***/ (function(module) {

/*! js-cookie v3.0.5 | MIT */
;
(function (global, factory) {
   true ? module.exports = factory() :
  0;
})(this, (function () { 'use strict';

  /* eslint-disable no-var */
  function assign (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        target[key] = source[key];
      }
    }
    return target
  }
  /* eslint-enable no-var */

  /* eslint-disable no-var */
  var defaultConverter = {
    read: function (value) {
      if (value[0] === '"') {
        value = value.slice(1, -1);
      }
      return value.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
    },
    write: function (value) {
      return encodeURIComponent(value).replace(
        /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
        decodeURIComponent
      )
    }
  };
  /* eslint-enable no-var */

  /* eslint-disable no-var */

  function init (converter, defaultAttributes) {
    function set (name, value, attributes) {
      if (typeof document === 'undefined') {
        return
      }

      attributes = assign({}, defaultAttributes, attributes);

      if (typeof attributes.expires === 'number') {
        attributes.expires = new Date(Date.now() + attributes.expires * 864e5);
      }
      if (attributes.expires) {
        attributes.expires = attributes.expires.toUTCString();
      }

      name = encodeURIComponent(name)
        .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
        .replace(/[()]/g, escape);

      var stringifiedAttributes = '';
      for (var attributeName in attributes) {
        if (!attributes[attributeName]) {
          continue
        }

        stringifiedAttributes += '; ' + attributeName;

        if (attributes[attributeName] === true) {
          continue
        }

        // Considers RFC 6265 section 5.2:
        // ...
        // 3.  If the remaining unparsed-attributes contains a %x3B (";")
        //     character:
        // Consume the characters of the unparsed-attributes up to,
        // not including, the first %x3B (";") character.
        // ...
        stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
      }

      return (document.cookie =
        name + '=' + converter.write(value, name) + stringifiedAttributes)
    }

    function get (name) {
      if (typeof document === 'undefined' || (arguments.length && !name)) {
        return
      }

      // To prevent the for loop in the first place assign an empty array
      // in case there are no cookies at all.
      var cookies = document.cookie ? document.cookie.split('; ') : [];
      var jar = {};
      for (var i = 0; i < cookies.length; i++) {
        var parts = cookies[i].split('=');
        var value = parts.slice(1).join('=');

        try {
          var found = decodeURIComponent(parts[0]);
          jar[found] = converter.read(value, found);

          if (name === found) {
            break
          }
        } catch (e) {}
      }

      return name ? jar[name] : jar
    }

    return Object.create(
      {
        set,
        get,
        remove: function (name, attributes) {
          set(
            name,
            '',
            assign({}, attributes, {
              expires: -1
            })
          );
        },
        withAttributes: function (attributes) {
          return init(this.converter, assign({}, this.attributes, attributes))
        },
        withConverter: function (converter) {
          return init(assign({}, this.converter, converter), this.attributes)
        }
      },
      {
        attributes: { value: Object.freeze(defaultAttributes) },
        converter: { value: Object.freeze(converter) }
      }
    )
  }

  var api = init(defaultConverter, { path: '/' });
  /* eslint-enable no-var */

  return api;

}));


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

// Tipos de datos
/**
 * string
 * number - enteros y decimales
 * boolean - true / false
 * null
 * undefined
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __await = (this && this.__await) || function (v) { return this instanceof __await ? (this.v = v, this) : new __await(v); }
var __asyncGenerator = (this && this.__asyncGenerator) || function (thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function () { return this; }, i;
    function awaitReturn(f) { return function (v) { return Promise.resolve(v).then(f, reject); }; }
    function verb(n, f) { if (g[n]) { i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; if (f) i[n] = f(i[n]); } }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const js_cookie_1 = __importDefault(__webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/dist/js.cookie.js"));
// Existe también el tipo any pero se supone que esta prohibido
// Tipos de variables
var nombre = "Cristina"; // Variable global
let apellido = "Bermudez"; // Variable local
const PI = 3.1415; // Constante (Nunca cambia)
// PI = 2; // Si descomentas esto, veras el error de la constante
//imprimir por consola
// Formas de concatenar un Print
console.log("Hola " + nombre + " " + apellido);
console.log("Hola " + nombre, apellido);
console.log(`Hola ${nombre}`); // Son tildes francesas, no comillas simples
// Declarar varias variables en una línea
let a = "ABCD", b = 2, c = false;
// Array de datos   
let alumnos = ["Juan", "Jose", "Alex"];
// Array de datos de 3 tipos
let valores = [3, "Hola", 2, true]; //No tiene porque estar ordenado los datos dentro del array según los tipos declarados
// Forma de juntar 2 arrays en un array e incluso agregar
let alumnos1A = ["Juan", "Pedro", "Fran"];
let alumnos2A = ["Jose"];
let alumnosTodos = [...alumnos1A, ...alumnos2A, "Pablo"];
console.log(alumnosTodos);
/***
 * Creación de un objeto compuesto por datos primitivos
 */
let misDatos = {
    nombre: "Cris",
    apellidos: "Bermudez",
    edad: 29
};
//Propagación de la variable misDatos
let configuracion = Object.assign({ versionTS: "Es6", versionCodido: "1.0" }, misDatos);
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
var EstadoTarea;
(function (EstadoTarea) {
    EstadoTarea["Pendiente"] = "P";
    EstadoTarea["Enproceso"] = "E";
    EstadoTarea["Terminado"] = "T";
})(EstadoTarea || (EstadoTarea = {}));
let estadoPendiente = EstadoTarea.Enproceso;
console.log(`El valor del enumerado Pendiente es: ${estadoPendiente}`);
let tarea1 = { nombre: "Tarea1", prioridad: 2, estado: EstadoTarea.Enproceso };
let tarea2 = { nombre: "Tarea2", prioridad: 2, estado: EstadoTarea.Enproceso };
let tarea3 = { nombre: "Tarea3", prioridad: 2, estado: EstadoTarea.Enproceso };
let tarea4 = { nombre: "Tarea4", prioridad: 2, estado: EstadoTarea.Enproceso };
let tarea5 = { nombre: "Tarea5", prioridad: 2, estado: EstadoTarea.Enproceso };
let empleado1 = { nombre: "Cris", edad: 30, sueldo: 15000 };
console.log(empleado1.edad);
/* Intersección de datos: permite combinar dos o más tipos de datos en uno solo.
*/
let empleado2;
empleado2 = { edad: 29, fotocopia: 500, nombre: "Maria", sueldo: 1000 };
console.log(empleado2);
/***
 * Operadores de comparación:
 *
 * == -> compara el valor de la variable
 * === compara el valor de la variable + el tipo de datos
 */
//Operador Ternario
//condicion ? veradero : falso
console.log(tarea1.estado == "E" ? `La tarea ${tarea1.nombre} se encuentra en ejecución` : `La tarea ${tarea1.nombre} no se ha ejecutado`);
//Estructura if-else
if (empleado1.edad == empleado2.edad) {
    console.log("Ambos empleados tienen la misma edad");
}
else if (empleado1.edad > empleado2.edad) {
    console.log(`${empleado1.nombre} es mayor que ${empleado2.nombre}`);
}
else {
    console.log(`${empleado1.nombre} es menor que ${empleado2.nombre}`);
}
//Switch
switch (tarea1.estado) {
    case "P":
        console.log("Tarea en pendiente");
        break;
    case "E":
        console.log("Tarea en proceso");
        break;
    default:
        console.log("Otro estado o no tiene estado");
        break;
}
try {
    let numero1 = 1;
    console.log(numero1.toString());
}
catch (error) {
    console.log("Se ha producido un error al convertir un numero en String", error);
}
//bucle
let listaTareasNuevas = [
    {
        nombre: "Tarea 1",
        estado: EstadoTarea.Pendiente,
        prioridad: 3
    },
    {
        nombre: "Tarea 2",
        estado: EstadoTarea.Enproceso,
        prioridad: 0
    },
    {
        nombre: "Tarea 3",
        estado: EstadoTarea.Terminado,
        prioridad: 1
    },
    {
        nombre: "Tarea 4",
        estado: EstadoTarea.Enproceso,
        prioridad: 0
    },
    {
        nombre: "Tarea ",
        estado: EstadoTarea.Terminado,
        prioridad: 1
    }
];
//FOREACH
console.log("Esto es el resultado del foreach");
listaTareasNuevas.forEach((tarea, index) => {
    console.log(tarea, index);
});
console.log("-----------");
//FOR
console.log("Esto es el resultado del for");
for (let i = 0; i < listaTareasNuevas.length; i++) {
    const tarea = listaTareasNuevas[i];
    console.log(tarea);
}
console.log("-----------");
//Bucle While
console.log("Esto es el resultado del while");
console.log(tarea1);
while (tarea1.estado !== EstadoTarea.Terminado || tarea1.prioridad == 3) {
    tarea1.estado = EstadoTarea.Terminado;
}
console.log(tarea1);
console.log("-----------");
//bucle do while
console.log(`La tarea 1 tiene prioridad: ${tarea1.prioridad}`);
do {
    tarea1.prioridad++;
} while (tarea1.prioridad > 5);
console.log(`La tarea 1 tiene prioridad: ${tarea1.prioridad}`);
console.log("-------------------");
//FUNCIONES
/**
 * Muestra un saludo por consola a una persona
 * @param nombre string nombre del usuario
 *
 */
function saludar(nombre) {
    console.log(`Hola ${nombre}, ¿Qué tal estas?`);
}
saludar("Cristina");
//Funciones con parámeros por defecto
/**
 * Funcion que le entra un parametro nombre y lo muestra por consola
 * @param nombre string nombre predefinido
 */
function saludarDefault(nombre = "Cristina") {
    console.log(`Hola ${nombre}, ¿Qué tal estas?`);
}
saludarDefault();
saludarDefault("Jose");
console.log("-----------");
//Funciones con parámeros opcionales
/**
 * Funcion con parametro opcional
 * @param nombre
 */
function saludarOpcional(nombre = "Cristina", apellido) {
    let nombreParam = nombre;
    if (apellido != undefined) {
        console.log(`Hola ${nombreParam}${apellido}`);
    }
    else {
        console.log(`Hola ${nombreParam}`);
    }
}
saludarOpcional("Cristina ", "Bermudez");
saludarOpcional();
console.log("-----------------");
// Funciones con parámetros de varios tipos
//El tipo de a es un "tipo unión", lo que 
//significa que puede ser de tipo string o de tipo number. 
//Es decir, a puede ser una cadena de texto o un número.
//Aquí se usa typeof(a) para determinar si el valor de a es un string o un number.
function variosTipos(a) {
    if (typeof (a) == "string") {
        console.log("a es un string");
    }
    else {
        console.log("a es un number");
    }
}
variosTipos(1);
variosTipos("Hola");
console.log("----------");
// Función con retorno: return
function suma(a, b) {
    return a + b;
}
var resultadoSuma = suma(1, 2);
console.log(resultadoSuma);
console.log(suma(1, 2));
const funcRestar = function (valor1, valor2) {
    return valor1 - valor2;
};
console.log(`la resta de 5 - 2 es: ${funcRestar(5, 2)}`);
console.log("----------");
//funciones anonimas
let fanonima = function () { console.log("Hola mundo"); };
fanonima();
let fitera = function (elementos, indice) {
    console.log(`la tarea $${elementos.nombre} se encuentra en el elemento ${indice} del array`);
};
listaTareasNuevas.forEach(fitera);
/**
 * Funciones, rest parameters (parámetros rest)
 * Permite definir funciones que tomen un número indeterminado de argumentos
 */
function multiParam(...nombres) {
    nombres.forEach((nombre) => {
        console.log(nombre);
    });
}
multiParam("Mateo", "Martin");
// A las funciones rest también se le puede pasar una lista de elementos
let listaNombres = ["Angel", "Francisco"];
multiParam(...listaNombres);
function muestraUsuarios(...tareas) {
    tareas.forEach(fitera);
}
muestraUsuarios(tarea1, tarea2, tarea3);
muestraUsuarios(...listaTareasNuevas);
console.log("-----------");
//variable que contiene una funcion, para que se pueda pasar una funcion a una variable tiene que se o anonima o arrow
let farrow = (tarea, indice) => { console.log(`${indice} - ${tarea.nombre}`); };
farrow(tarea1, 1);
console.log("---------");
listaTareasNuevas.forEach(farrow);
console.log("---------");
listaTareasNuevas.forEach((tarea) => { console.log(`${tarea.nombre}`); });
let getDatosTarea = (tarea) => { return `La tarea denominada ${tarea.nombre} cuyo estado es ${tarea.estado} tiene una prioridad ${tarea.prioridad} `; };
console.log(getDatosTarea(tarea1));
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
let fsuma = function suma(a, b) {
    return a + b;
};
let fresta = function resta(a, b) {
    return a - b;
};
function opera(x, y, funcion) {
    return funcion(x, y);
}
opera(2, 3, fsuma);
opera(2, 3, fresta);
/**
 * FUNCIONES ASINCRONAS
 */
function asincrona() {
    return __awaiter(this, void 0, void 0, function* () {
        let suma = 0;
        for (let i = 0; i < 1000000; i++) {
            suma += i;
        }
        return suma;
    });
}
asincrona().then((data) => console.log(`El resultado de ejecutar asyc = ${data}`));
//Metodos funciones asincronas
//asincrona().then  -->
//asincrona().catch  -->
//asincrona().finally  -->
console.log("Linea de codigo posterior a llamada asincrona");
function getUniversitiesAsync() {
    return __awaiter(this, void 0, void 0, function* () {
        let index = 0;
        const apiURL = "http://universities.hipolabs.com/search?country=";
        //Construimos la URL de la API a consultar concatenando el pais que se quiere filtrar
        let url = `${apiURL}`;
        // Con la función fetch accedemos hacemos una petición GET y obtenemos los resultados. 
        // Usamos await para indicar que hasta que no termine esta instrucción no se ejecuta la siguiente
        let respuesta = yield fetch(url);
        // Convertimos la respuesta de la petición GET en un archivo JSON
        let datos = yield respuesta.json();
        return datos;
    });
}
getUniversitiesAsync().then((data) => { console.log(data[0].name); });
function getUniversitiesAsync02(pais) {
    return __awaiter(this, void 0, void 0, function* () {
        let index = 0;
        const apiURL = "http://universities.hipolabs.com/search?country=";
        //Construimos la URL de la API a consultar concatenando el pais que se quiere filtrar
        let url = `${apiURL}${pais}`;
        // Con la función fetch accedemos hacemos una petición GET y obtenemos los resultados. 
        // Usamos await para indicar que hasta que no termine esta instrucción no se ejecuta la siguiente
        let respuesta = yield fetch(url);
        // Convertimos la respuesta de la petición GET en un archivo JSON
        let datos = yield respuesta.json();
        return datos;
    });
}
getUniversitiesAsync02("Spain").then((data) => { console.log(data[1]); });
/**
 * FUNCIONES GENERADORAS:
 * Una función generadora es una función que se puede pausar y reanudar, y por lo tanto, nos puede devolver múltiples valores.
 * Para poder declarar una función generadora es necesario añadir el * después de la palabra reservada function.
 * Observa que en lugar de llamar a return para devolver un valor, utilizamos yield.
 * Fuente:https://lenguajejs.com/javascript/funciones/generadores/
 */
function* fGenTareas() {
    let tareas = [...listaTareasNuevas];
    for (let i in tareas) {
        yield tareas[i];
    }
}
let funciongen = fGenTareas();
console.log(funciongen.next());
//ASYNC GENERADORA
function* fgeneradora2() {
    yield "Hola";
    yield "Mundo";
    yield "IES";
}
let llamadafgen2 = fgeneradora2();
let str = llamadafgen2.next();
while (str.done == false) {
    console.log(str.value);
    str = llamadafgen2.next();
}
llamadafgen2.next(); //hola
llamadafgen2.next(); //mundo
llamadafgen2.next(); //IES
function obtenerDatosWeb() {
    return __asyncGenerator(this, arguments, function* obtenerDatosWeb_1() {
        let respuesta = yield __await(fetch("https://haveibeenpwned.com/api/v2/breaches"));
        // Convertimos la respuesta de la petición GET en un archivo JSON
        let datos = yield __await(respuesta.json());
        for (let i in datos) {
            yield yield __await(datos[i]);
        }
        for (let index = 0; index < datos.length; index++) {
            yield yield __await(datos[index]);
        }
    });
}
let datosWebPage = obtenerDatosWeb();
datosWebPage.next().then(({ value, done }) => { console.log(`${value.Name} - ${value.Description}  \n`); console.log(`Is the last element? ${done} \n`); });
datosWebPage.next().then(({ value, done }) => { console.log(value.Name); });
function saludarSobrecarga(nombre, apellido, edad) {
    let saludo = `hola ${nombre}`;
    if (apellido != undefined) {
        saludo = saludo + `${apellido}`;
    }
    if (edad != undefined) {
        saludo = saludo + `${edad}`;
    }
    return saludo;
}
console.log(saludarSobrecarga("Cristina"));
// Implementación de la función
function funcionSobrecargaDiffParam(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        return a + b;
    }
    else if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    throw new Error("Tipos de parámetros no coinciden");
}
console.log(funcionSobrecargaDiffParam("Hola, ", "mundo")); // "Hola, mundo"
console.log(funcionSobrecargaDiffParam(5, 10)); // 15
//Función guardar tareas
function guardarTareas(key, data, type = "session" // Valor por defecto es "session"
) {
    if (type == "session") {
        sessionStorage.setItem(key, JSON.stringify(data)); // Almacenamos en sessionStorage
    }
    else if (type == "local") {
        localStorage.setItem(key, JSON.stringify(data)); // Almacenamos en localStorage
    }
    else {
        console.error("El valor de type debe ser SessionStorage o LocalStorage"); // Manejo de error
    }
}
/**
 * Ejercicio 03
 */
let tareas = [
    { id: 1, titulo: "Pasear al perro", completada: false },
    { id: 2, titulo: "Poner la lavadora", completada: true }
];
// Guardar en SessionStorage
guardarTareas("datos", tareas, "session");
// Guardar en LocalStorage
guardarTareas("datos", tareas, "local");
/**
 * Ejercicio 04
 */
function recuperarInformacion(key, type = "session") {
    let result = null;
    if (type == "session") {
        result = sessionStorage.getItem(key);
    }
    else if (type == "local") {
        result = localStorage.getItem(key);
    }
    else {
        console.error("El valor de type debe ser session o local");
    }
    return result;
}
/**
 * Ejercicio 05
 */
let datosSession = recuperarInformacion("datos");
if (datosSession) {
    let datosSessionParseado = JSON.parse(datosSession);
    console.log("Esta es la informacion recuperada del sessionStorage");
    console.log(datosSessionParseado);
}
let datosLocal = recuperarInformacion("datos", "local");
if (datosLocal) {
    let datosLocalParseado = JSON.parse(datosLocal);
    console.log("Esta es la informacion recuperada del localStorage");
    console.log(datosLocalParseado);
}
/**
 * Ejercicio 06
 */
function borrarInformacion(key, type) {
    if (type == "session") {
        sessionStorage.removeItem(key);
    }
    else if (type == "local") {
        localStorage.removeItem(key);
    }
    else {
        console.log("El type introducido no es correcto");
    }
}
borrarInformacion("datos", "session");
borrarInformacion("datos", "local");
/**
 * Ejercicio 07
 */
js_cookie_1.default.set('nombre', 'cristina', { expires: 7, path: "/" });
js_cookie_1.default.set('apellidos', 'bermudez', { expires: 2 });
js_cookie_1.default.set('email', 'cbercas@iescarrillo.es', { expires: 4 });
console.log(`este es el valor de la cookie nombre: ${js_cookie_1.default.get("nombre")}`);
console.log(`este es el valor de la cookie apellidos: ${js_cookie_1.default.get("apellidos")}`);
console.log(`este es el valor de la cookie email: ${js_cookie_1.default.get("email")}`);
js_cookie_1.default.remove("nombre");
js_cookie_1.default.remove("apellidos");
js_cookie_1.default.remove("email");


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundle.js.map