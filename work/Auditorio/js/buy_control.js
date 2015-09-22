(function () {
	
	var email = document.ticketForm.email;
	var dni = document.getElementById('userId');
	var form = document.ticketForm;

	function init(){
			document.ticketForm.addEventListener('submit', validateForm);
	}

	/**
		*preventDefault cancels the event if it is cancelable
		*It examines whether some required space is blank or does not match the required data
	**/

	function validateForm(evaluationObject){

		var correctInformation = true;

		for (var i=0; i < form.length; i++) {
			if (form[i].type == 'text') {
				if (form[i].value == null || form[i].value.length == 0 || /^\s*$/.test(form[i].value)){
					alert ('Algun espacio requerido puede estar vacío o contiene sólo espacios en blanco');
					correctInformation=false;
				}
			}
		}

		if (dni.value == '' || !/^\d{9}$/.test(dni.value)){
			alert ('Por favor ingrese un numero de cedula valido de 9 digitos');
			correctInformation=false;
		}

		if (email.value == '' || !/\S+@\S+\.\S+/.test(email.value)){
			alert ('Por favor ingrese un correo electronico valido.');
			correctInformation=false;
		}

		console.log(correctInformation);

		if (correctInformation == false) {
			evaluationObject.preventDefault();
		}else{
			form.submit();
		}
	}

	window.Buy = function(){
		init();
		return{
			validateForm : validateForm
		}
	}
})();
