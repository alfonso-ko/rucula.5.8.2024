// aca hice el formulario de inicio de sesion de mi pagina para comprar frutas y verduras
function validarFormularioInicio() {
  var email = document.forms["formularioIniciarSesion"]["email"].value;
  var clave = document.forms["formularioIniciarSesion"]["password"].value;

  if (email === "" || contraseña === "") {
    alert("Todos los campos son obligatorios");
    return false;
  }

  if (!validarFormatoEmail(mail)) {
    alert("El correo electrónico no tiene un formato válido");
    return false;
  }

  return true;
}







//aca lo que hice recien   fue validar el formulario de registro
function validarFormularioRegistro() {
  var nombre = document.forms["formularioRegistro"]["nombre"].value;
  var apellido = document.forms["formularioRegistro"]["apellido"].value;
  var domicilio = document.forms["formularioRegistro"]["domicilio"].value;
  var codigoPostal = document.forms["formularioRegistro"]["codigo_postal"].value;
  var email = document.forms["formularioRegistro"]["email"].value;
  var password = document.forms["formularioRegistro"]["password"].value;
  var confirmarPassword = document.forms["formularioRegistro"]["confirm_password"].value;


  if (nombre === "" || apellido === "" || domicilio === "" || codigoPostal === "" || email === "" || password === "" || confirmarPassword === "") {
    alert("Todos los campos son obligatorios");
    return false;
  }

  if (!contieneSoloNumeros(codigoPostal)) {
    alert("El código postal debe contener solo números enteros");
    return false;
  }

  if (!validarFormatoEmail(email)) {
    alert("El correo electrónico no tiene un formato válido");
    return false;
  }

  if (password !== confirmarPassword) {
    alert("Las contraseñas no coinciden");
    return false;
  }

  return true;
}




function contieneSoloNumeros(valor) {
  for (var i = 0; i < valor.length; i++) {
    if (valor[i] < '0' || valor[i] > '9') {
      return false;
    }
  }
  return true;
}

function validarFormatoEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// yo se que si la funcion me devuelve false entonces el formulario no se va a enviar




























document.getElementById('fruits').addEventListener('click', function() {
    toggleContent('fruits');
  });
  
  document.getElementById('vegetables').addEventListener('click', function() {
    toggleContent('vegetables');
  });
  
  function toggleContent(id) {
    var content = document.getElementById(id).getElementsByClassName('content')[0];
    if (content.style.display === 'none') {
      content.style.display = 'block';
    } else {
      content.style.display = 'none';
    }
  }





  function showForm(item, price) {
    document.getElementById('form-container').style.display = 'block';
    document.getElementById('selected-item').value = item; 
    document.getElementById('price-per-kg').value = "$" + price + "/kg"; 
    document.getElementById('item-form').setAttribute('data-item', item);
}

document.getElementById('item-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var item = this.getAttribute('data-item');
    var quantity = parseFloat(document.getElementById('quantity').value);
    console.log('Añadir al carrito: ' + quantity + ' kg de ' + item);
    // Aquí puedes agregar la lógica para añadir el artículo al carrito
    document.getElementById('form-container').style.display = 'none';
});







