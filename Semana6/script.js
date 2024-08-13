let area = a => 3.14 *a *a; 
//console.log(area(5)); 

function notas(exa){
  if (exa>10){
    return "Aprobaste el curso";
  } else {
    return "Estudia un poco mas";
  }
}
let usuario = prompt("Ingresar la nota: ");
let resultado = notas(usuario);
console.log(resultado); 