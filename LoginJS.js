window.addEventListener('load', function(){
    //detectar cuando toco el boton de Iniciar Sesión (se envía el formulario)
    var botonInicioSesión = document.querySelector(".button-login");
        botonInicioSesión.addEventListener('click',function(){
    var errores = false;

    /*Capturamos los elementos*/
    var nombre = document.getElementById('GenerarUsuario');
    var contrasenia = document.getElementById('Contraseña');

    /*Los span de errores del Formulario*/
    var errorUsuario = document.getElementById("errorGenerarUsuario");
    var errorContraseña = document.getElementById("errorContraseña");

    /*Condición de error para USUARIO*/
    if (nombre.value == ""){
    errorGenerarUsuario.innerHTML = "El usuario es obligatorio.";
    nombre.style.border = "1px solid red";
    errores = true;
    }else if(nombre.value.length <6 ){
    errorGenerarUsuario.innerHTML = "El usuario debe tener al menos 6 caracteres.";
    nombre.style.border = "1px solid red";
    errores = true;
    }else if(nombre.value.length >15 ){
    errorGenerarUsuario.innerHTML = "El usuario debe tener menos de 15 caracteres.";
    nombre.style.border = "1px solid red";
    errores = true;
    }else{
    errorUsuario.innerHTML = "";
    nombre.style.border = "1px solid green";
    }
    /*Condición de error para CONTRASEÑA*/
    if(contrasenia.value == ""){
    errorContraseña.innerHTML = "La contraseña es obligatoria.";
    contrasenia.style.border = "1px solid red";
    errores = true;
    }else if(contrasenia.value.length<6){
    errorContraseña.innerHTML = "La contraseña debe tener al menos 6 caracteres";
    contrasenia.style.border = "1px solid red";
    errores = true;
    }else if(contrasenia.value.length>15){
    errorContraseña.innerHTML = "La contraseña debe tener menos de 15 caracteres";
    contrasenia.style.border = "1px solid red";
    errores = true;
    }else{
    errorContraseña.innerHTML = "";
    contrasenia.style.border = "1px solid green";
    }
    }
)})