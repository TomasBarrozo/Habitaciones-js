// Nombre
alert(`¡Bienvenido! Vamos a encontrar su habitación ideal`)

let nombre = prompt('Ingresar su nombre:');
while (!isNaN(nombre)) {
    alert("Error! Ingrese un nombre valido.");
    nombre = prompt('Ingresar su nombre:');
    }

// Apellido
let apellido = prompt('Ingresar su apellido:');
while (!isNaN(apellido)) {
    alert("Error! Ingrese un apellido valido.");
    apellido = prompt('Ingresar su apellido:');
    }

// Edad
function calculo_edad(edad){
    var patron = /^[1-9]+$/
    while(true){
        if(edad === null || edad < 18 || patron.test(edad) === false){
            edad = prompt('Lo sentimos, este proceso debe realizarlo un mayor de edad')
        }
        if(edad === null || edad > 110 || patron.test(edad) === false){
            edad = prompt('Lo sentimos, debe elegir una edad real')
        }
        else{
            return edad
        }
    };
}
let edad = calculo_edad(prompt('Ingrese su edad: '))


// Email
let email = prompt('Ingresar su email:');
while (!isNaN(email)) {
    alert("Error! Ingrese un email valido.");
    email = prompt('Ingresar su email:');
    }


alert(`Confirmado. Ahora busquemos tu habitación ideal`)
let individuos = 0;

function seleccionarHabitacion() {

    const numPersonas = parseInt(prompt("¿Cuántas personas son?"));
    const tieneNinos = prompt("¿Tiene niños? (responda 'si' o 'no')").toLowerCase() === 'si';
  
    let habitacion;
  
    // Como determinar la habitación 
    if (numPersonas === 1) {
      habitacion = "Habitación individual";
    } else if (numPersonas === 2) {
      habitacion = "Habitación doble";
    } else if (numPersonas > 2 && tieneNinos) {
      const numNinos = parseInt(prompt("¿Cuántos niños hay?"));
      if (numNinos > 0) {
        habitacion = "Habitación familiar";
      } else {
        console.log("Lo siento, necesitas indicar la cantidad de niños.");
        alert("Lo siento, necesitas indicar la cantidad de niños.");
        return;
      }
    } else {
      console.log("Lo siento, no tenemos una habitación adecuada para esa cantidad de personas.");
      alert("Lo siento, no tenemos una habitación adecuada para esa cantidad de personas.");
      return;
    }
  
    // Muestra de resultados
    console.log("Respuestas del usuario:");
    console.log(`¿Cuantas personas son? ${numPersonas}`);
    console.log(`¿Tiene niños? ${tieneNinos ? 'Sí' : 'No'}`);
    if (habitacion) {
      console.log(`\nBasado en tus respuestas, la habitación ideal es: ${habitacion}`);
      alert(`Basado en tus respuestas, la habitación ideal es: ${habitacion}`);
    }
  }
  
  // Función
  seleccionarHabitacion();
