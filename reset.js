// import { getAuth, sendPasswordResetEmail } from "firebase/auth";
// export { auth, sendPasswordResetEmail };

// const auth = getAuth();

// const formularioReset = document.getElementById('formulario-reset');

//     formularioReset.addEventListener('submit', function(event) {
//       event.preventDefault(); // Evitar que el formulario se envíe de forma predeterminada

//       const email = formularioReset.email.value; // Obtener el valor del campo de correo electrónico

//       const auth = getAuth();
//       sendPasswordResetEmail(auth, email)
//         .then(() => {
//           console.log("Correo electrónico de restablecimiento de contraseña enviado a:", email);
//           // Aquí podrías mostrar un mensaje al usuario informando que se envió el correo electrónico correctamente
//         })
//         .catch((error) => {
//           console.error("Error al enviar el correo electrónico de restablecimiento de contraseña:", error);
//           // Aquí podrías mostrar un mensaje de error al usuario si ocurrió algún problema
//         });
//     });