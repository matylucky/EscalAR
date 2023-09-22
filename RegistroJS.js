window.addEventListener('load', function(){
//detectar cuando toco el boton de registro (se envía el formulario)
var botonDeRegistro = document.querySelector(".button-Registro");
    botonDeRegistro.addEventListener('click',function(){
var errores = false;

/*Capturamos los elementos*/
var nombre = document.getElementById('GenerarUsuario');
var contrasenia = document.getElementById('Contraseña');
var repetirContraseña = document.getElementById('RepetirContraseña');
var email = document.getElementById('Correo_electrónico');
var sexoSel = document.getElementById('radioButtonSexo');
var fecha = document.getElementById("date");
var country=document.getElementById("pais");
var countriesOpciones =country.options;

/*Los span de errores del Formulario*/
var errorUsuario = document.getElementById("errorGenerarUsuario");
var errorContraseña = document.getElementById("errorContraseña");
var errorRepetirContraseña = document.getElementById("errorRepContraseña")
var errorCorreo = document.getElementById("errorEmail");
var errorSexoSel = document.getElementById('errorSexo');
var errorDeFecha = document.getElementById("errorDate");
var errorCountries = document.getElementById("errorPais");

/*Expresión regular para validar el Correo electrónico*/
var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

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

/*Condición de error para REPETIR CONTRASEÑA*/
if(RepetirContraseña.value == ""){
  errorRepetirContraseña.innerHTML = "La contraseña es obligatoria.";
  repetirContraseña.style.border = "1px solid red";
  errores = true;
  }else if(repetirContraseña.value.length<6){
  errorRepetirContraseña.innerHTML = "La contraseña debe tener al menos 6 caracteres";
  repetirContraseña.style.border = "1px solid red";
  errores = true;
  }else if(repetirContraseña.value.length>15){
  errorRepetirContraseña.innerHTML = "La contraseña debe tener menos de 15 caracteres";
  repetirContraseña.style.border = "1px solid red";
  errores = true;
  }else if(contrasenia.value != RepetirContraseña.value){
  errorRepetirContraseña.innerHTML = "Las contraseñas deben coincidir";
  repetirContraseña.style.border = "1px solid red";
  errores = true;
  }else{
  errorRepetirContraseña.innerHTML = "";
  repetirContraseña.style.border = "1px solid green";
  }

/*Condición de error para EMAIL*/
if(email.value == ""){
    errorCorreo.innerHTML = "El email es obligatorio.";
    email.style.border = "1px solid red";
    errores = true;
    }else if(!regex.test(email.value)){
    errorCorreo.innerHTML = "El email es inválido.";
    email.style.border = "1px solid red";
    errores = true;
    }else{
    errorCorreo.innerHTML = "";
    email.style.border = "1px solid green";
    }
     
/*Condición de error para sexo ---> queda siempre en error! (?)
 var genero = document.getElementById("radioButtonSexo");
 var errorDeGene = document.getElementById("errorSexo");
 if(!genero.value == "h" || "m"){
 errorDeGene.innerHTML = "Seleccione una opción.";
 errorDeGene.style.color="red";
 errores=true;
}else{errorDeGene.innerHTML = "";
}*/

/*Condición de error para fecha de nacimiento*/
 if(!fecha.value == " "){
 errorDeFecha.innerHTML = "";
 fecha.style.border="1px solid green";
 errorDeFecha.style.color="red";
 errores=true;
 }else{fecha.innerHTML = "";
 errorDeFecha.innerHTML = "Ingresar fecha.";
 fecha.style.border= "1px solid red";
 }
        
/*Condición de error para fetch de paises*/
if(countriesOpciones.selectedIndex == 0){
  errorCountries.innerHTML="Debe seleccionar un país.";
  country.style.border="1px solid red";
  errorCountries.style.color="red";
  errores=true;
  } else {errorCountries.innerHTML = "";
  country.style.border = "1px solid green";
  }
    
  })

/*fetch de paises*/

  fetch("https://restcountries.eu/rest/v2/all")
    .then (function(respuesta){
      return respuesta.json();
    })
    .then (function(data){
      var paises = document.querySelector("#pais");
       for(i=0; i < data.length; i++){
         if(data[i].region == "Americas"){
           paises.innerHTML = paises.innerHTML
           + "<option value='+data[i]'>"+data[i].name+"</option>";
         }
    }})
    .catch (function(error){
      alert(error);
    })
});
