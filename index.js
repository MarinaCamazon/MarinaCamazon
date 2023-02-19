function validarFormulario() {
  // Obtener valores de los campos del formulario
  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const clave = document.getElementById("clave").value;
  const confirmarClave = document.getElementById("confirmar-clave").value;

  // Validar campo Nombre
  if (!/^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/.test(nombre) || nombre.length === 0) {
    document.getElementById("error-nombre").innerHTML =
      "Rellene este campo con un nombre válido";
    document.getElementById("nombre").style.borderColor = "red";
  } else {
    document.getElementById("error-nombre").innerHTML = "";
    document.getElementById("nombre").style.borderColor = "green";
  }

  // Validar campo Email
  if (
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    email.length === 0
  ) {
    document.getElementById("error-email").innerHTML =
      "Rellene este campo con un email válido";
    document.getElementById("email").style.borderColor = "red";
  } else {
    document.getElementById("error-email").innerHTML = "";
    document.getElementById("email").style.borderColor = "green";
  }

  // Validar campo Clave
  if (clave.length < 8 || clave.length === 0) {
    document.getElementById("error-clave").innerHTML =
      "Rellene este campo con una clave de al menos 8 caracteres";
    document.getElementById("clave").style.borderColor = "red";
  } else {
    document.getElementById("error-clave").innerHTML = "";
    document.getElementById("clave").style.borderColor = "green";
  }

  // Validar campo Confirmar Clave
  if (confirmarClave !== clave || confirmarClave.length === 0) {
    document.getElementById("error-confirmar-clave").innerHTML =
      "Rellene este campo con la misma clave que ha introducido antes";
    document.getElementById("confirmar-clave").style.borderColor = "red";
  } else {
    document.getElementById("error-confirmar-clave").innerHTML = "";
    document.getElementById("confirmar-clave").style.borderColor = "green";
  }

  // Comprobar si hay algún mensaje de error visible
  const mensajesError = document.querySelectorAll(".mensaje-error");
  let hayErrores = false;
  mensajesError.forEach((mensaje) => {
    if (mensaje.innerHTML !== "") {
      hayErrores = true;
    }
  });

  // Si hay errores, no se enviará el formulario y se muestra el mensaje de error
  if (hayErrores) {
    alert("Hay errores en el formulario. Por favor, revise los campos resaltados en rojo.");
    return false;
  }

  // Si no hay errores, se envía el formulario
  alert("La inscripción ha sido correcta.");
  return true;
}
