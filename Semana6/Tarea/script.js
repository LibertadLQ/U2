import { suma} from "./suma.js";
import { resta } from "./resta.js";
import { division} from "./division.js";
import { multiplicacion} from "./multiplicacion.js";

let dato1 = parseInt(prompt("Ingrese el primer valor: ")); 
let dato2 = parseInt(prompt("Ingrese el segundo valor: ")); 

let reSuma = suma(dato1, dato2); 
let reResta = resta(dato1, dato2); 
let reMultiplicacion = multiplicacion(dato1, dato2); 
let reDivision = division(dato1, dato2); 

document.getElementById("suma").innerHTML = reSuma; 
document.getElementById("resta").innerHTML = reResta;  
document.getElementById("div").innerHTML = reDivision; 
document.getElementById("mul").innerHTML = reMultiplicacion; 