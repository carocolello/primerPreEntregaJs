//****Calcular nota final de alumnos ingresados****//

// Ingreso nombre de usuario y contraseña 
// Usuario: a eleccion
// Contraseña: 1234 

let usuario = prompt("Ingrese su nombre de usuario: ");

let contrasenaUsuario = parseInt(prompt("Ingrese la contraseña correcta: (1234)"));
const contrasenaCorrecta = 1234;

for (let i = 0; i < 2; i++) {
    if (contrasenaUsuario === contrasenaCorrecta) {
        alert("La contraseña es correcta, puedes ingresar.");
        break;
    } else {
        contrasenaUsuario = parseInt(prompt("Incorrecto! Ingrese nuevamente la contraseña: "));
    }
}

// Nombre y nota de alumno uno

let nombreAlumnoUno = prompt("Ingrese el nombre del alumno uno: ");
let notaAlumnoUno = parseFloat(prompt("Ingrese la nota final del alumno uno: "));
console.log("La nota de " + nombreAlumnoUno + " es de " + notaAlumnoUno);

// Nombre y nota de alumno dos

let nombreAlumnoDos = prompt("Ingrese el nombre del alumno dos: ");
let notaAlumnoDos = parseFloat(prompt("Ingrese la nota del alumno dos: "));
console.log("La nota de " + nombreAlumnoDos + " es de " + notaAlumnoDos);

// Nombre y nota de alumno tres

let nombreAlumnoTres = prompt("Ingrese el nombre del alumno tres: ");
let notaAlumnoTres = parseFloat(prompt("Ingrese la nota del alumno tres: "));
console.log("La nota de " + nombreAlumnoTres + " es de " + notaAlumnoTres);

// Calculo promedio

let promedio = ((notaAlumnoUno + notaAlumnoDos + notaAlumnoTres) / 3).toFixed(2);
console.log(promedio);
alert("El promedio de las notas de los alumnos ingresados es de " + promedio);

// Evalúo las notas de los alumnos

if (promedio > 0 && promedio < 4) {
    alert("Insuficiente. Tienen que estudiar más!");
} else if (promedio >= 4 && promedio < 6) {
    alert("Regular. Están aprobados, pero recomiendo estudiar más!");
} else if (promedio >= 6 && promedio < 8) {
    alert("Bien! Están aprobados, sigan así!");
} else if (promedio >= 8 && promedio <= 10) {
    alert("Muy bien!! Están re aprobados!")
} else {
    alert("Datos incorrectos.")
}

// Mensaje despedida

function mensajeDespedida() {
    alert(usuario + " muchas gracias por consultar las notas de los alumnos! Volvé pronto.");
}

mensajeDespedida();