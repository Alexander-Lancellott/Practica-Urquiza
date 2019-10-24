//se creo una funcion para validar todos los campos y los radiobutton cuando se presione enviar
function validacion() {
    //se declaro variables que poseen el valor de cada input a excepción de las ultimas dos que son para luego validar los radiobutton
    var name = document.getElementById("nombre").value,
        email = document.getElementById("email").value,
        lastname = document.getElementById("lastname").value,
        Provincia = document.getElementById("Prov").value,
        //array para las alertas
        com = [""],
        localidad = document.getElementById("localidad").value,
        direccion = document.getElementById("dir").value,
        codigoPostal = document.getElementById("cod").value,
        telefono = document.getElementById("tel").value,
        //array para validar si los campos estan en error
        A1 = [""],
        telefono = document.getElementById("tel").value,
        DNI = document.getElementById("DNI").value,
        envio = document.getElementsByName("envio"),
        pago = document.getElementsByName("pago")
    ;
    //verifca si el campo de Nombre esta vacio
    if ( name == null || name.length == 0 || /^\s+$/.test(name) ){
        //se cambia el color de por fuera de los bordes del campo
        document.getElementById("nombre").style.outline ="red solid 0.2px";
        //se hace foco sobre el campo
        document.getElementById("nombre").focus();
        //se agrega el valor 0 para saber que esta en error
        A1.push("0");
        //se agrega el primer alert 
        com.push("Rellene el campo de Nombre \n");
    } else {
        document.getElementById("nombre").style.outline ="green solid 0.2px";
        //se agrega el valor 1 para saber que el campo esta correcto
        A1.push("1");
    }
    //verifca si el campo de Apellido esta vacio
    if ( lastname == null || lastname.length == 0 || /^\s+$/.test(lastname) ){
        document.getElementById("lastname").style.outline ="red solid 0.2px";
        document.getElementById("lastname").focus();
        A1.push("0");
        com.push("Rellene el campo de Apellido \n");
    } else {
        document.getElementById("lastname").style.outline ="green solid 0.2px";
        A1.push("1");
    }
    //verifca si el campo de Provincia esta vacio
    if ( Provincia == null || Provincia.length == 0 || /^\s+$/.test(Provincia) ){
        document.getElementById("Prov").style.outline ="red solid 0.2px";
        document.getElementById("Prov").focus();
        A1.push("0");
        com.push("Rellene el campo de Provincia\n");
    } else {
        //se creo una funcion para verificar que se ingrese un valor que este en el DataList
        function is_valid_datalist_value(idDataList, inputValue) {
            var option = document.querySelector("#" + idDataList + " option[value='" + inputValue + "']");
            if (option != null) {
              return option.value.length > 0;
            }
            return false;
        }
        //se llama a la funcion en un if para saber si se cumple o no 
        if (is_valid_datalist_value('Provincia', document.getElementById('Prov').value)) {
            A1.push("1");
            document.getElementById("Prov").style.outline ="green solid 0.2px";
        } else {
            document.getElementById("Prov").style.outline ="red solid 0.2px";
            document.getElementById("Prov").focus();
            A1.push("0");
            com.push("Ingrese una Provincia de la lista\n");
        }    
    }
    //verifca si el campo de Localidad esta vacio
    if ( localidad == null || localidad.length == 0 || /^\s+$/.test(localidad) ){
        document.getElementById("localidad").style.outline ="red solid 0.2px";
        document.getElementById("localidad").focus();
        A1.push("0");
        com.push("Rellene el campo de Localidad \n");
    } else {
        document.getElementById("localidad").style.outline ="green solid 0.2px";
        A1.push("1");
    }
    //verifca si el campo de Direccion esta vacio
    if ( direccion == null || direccion.length == 0 || /^\s+$/.test(direccion) ){
        document.getElementById("dir").style.outline ="red solid 0.2px";
        document.getElementById("dir").focus();
        A1.push("0");
        com.push("Rellene el campo de Direccion \n");
    } else {
        document.getElementById("dir").style.outline ="green solid 0.2px";
        A1.push("1");
    }
    //verifca si el campo de Codigo Postal esta vacio
    if ( codigoPostal == null || codigoPostal.length == 0 || /^\s+$/.test(codigoPostal) ){
        document.getElementById("cod").style.outline ="red solid 0.2px";
        document.getElementById("cod").focus();
        A1.push("0");
        com.push("Rellene el campo de Codigo Postal \n");
    } else {
        document.getElementById("cod").style.outline ="green solid 0.2px";
        A1.push("1");
    }
    //verifca si el campo de Telefono esta vacio
    if ( telefono == null || telefono.length == 0 || /^\s+$/.test(telefono) ){
        document.getElementById("tel").style.outline ="red solid 0.2px";
        document.getElementById("tel").focus();
        A1.push("0");
        com.push("Rellene el campo de Telefono \n");
    //verifica que se ingrese un N° de telefono de 9 cifras 
    } else if(!/^\d{9}$/.test(telefono)) {
        document.getElementById("tel").style.outline ="red solid 0.2px";
        A1.push("0");
        com.push("Ingrese un N° de Telefono valido \n");
    } else {
        document.getElementById("tel").style.outline ="green solid 0.2px";
        A1.push("1");
    }
    //verifca si el campo de Email esta vacio
    if (email == null || email.length == 0 || /^\s+$/.test(email)){
        A1.push("0");
        document.getElementById("email").style.outline ="red solid 0.2px";
        document.getElementById("email").focus();
        com.push("Rellene el campo de Email \n");
    //verifica que se ingrese un Email valido 
    } else if (!/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
        document.getElementById("email").style.outline ="red solid 0.2px";
        A1.push("0");
        com.push("Ingrese un Email valido\n");
    } else {
        document.getElementById("email").style.outline ="green solid 0.2px";
        A1.push("1");
    }
    //verifca si el campo de DNI esta vacio
    if ( DNI == null || DNI.length == 0 || /^\s+$/.test(DNI) ){
        document.getElementById("DNI").style.outline ="red solid 0.2px";
        document.getElementById("DNI").focus();
        A1.push("0");
        com.push("Rellene el campo de DNI \n");
    //verifica que se ingrese un N° de DNI de 8 cifras 
    } else if(!/^\d{8}$/.test(DNI)) {
        document.getElementById("DNI").style.outline ="red solid 0.2px";
        A1.push("0");
        com.push("Ingrese un DNI valido \n");
    } else {
        document.getElementById("DNI").style.outline ="green solid 0.2px";
        A1.push("1");
    }
    //se incializan los contadores para los radiobutton 
    var c = "0",
        j = "0"
    ; 
    //comprueba si un radiobutton de Envio es true
    for(var i=0; i < envio.length; i++) {
        if (envio[i].checked == true) {
            c ++;
        } 
    }
    //comprueba si un radiobutton de Pago es true
    for(var i=0; i < pago.length; i++) {
        if (pago[i].checked == true) {
            j ++;
        } 
    }

    //si es true el contador de envio es 1 
    if (c == "1") {
        A1.push("1");
        //se resetea el boxShadow de ambos radiobutton
        envio[0].style.boxShadow = "";
        envio[1].style.boxShadow = "";
        //varifica cual radiobutton es true para generar el boxShadow verde del radiobutton correspondiente 
        if(envio[0].checked == true){
            envio[0].style.boxShadow = " -4px 0px 0px 0px green";
        } else {
            envio[1].style.boxShadow = " -4px 0px 0px 0px green";
        }
    } else {
        //se genera un boxShadow rojo en ambos radiobutton para indicar que ninguno esta seleccionado
        envio[0].style.boxShadow = " -4px 0px 0px 0px red";
        envio[1].style.boxShadow = " -4px 0px 0px 0px red";
        A1.push("0");
        com.push("Seleccione el metodo de Envio \n");
    }
    
    //se utiliza el mismo principio antes visto en los radiobutton de Pago solo con la diferencia que son 3
    if (j == "1") {
        A1.push("1");
        pago[0].style.boxShadow = "";
        pago[1].style.boxShadow = "";
        pago[2].style.boxShadow = "";
        if(pago[0].checked == true){
            pago[0].style.boxShadow = " -4px 0px 0px 0px green";
        } else if (pago[1].checked == true){
            pago[1].style.boxShadow = " -4px 0px 0px 0px green";
        } else {
            pago[2].style.boxShadow = " -4px 0px 0px 0px green";
        }
    } else {
        pago[0].style.boxShadow = " -4px 0px 0px 0px red";
        pago[1].style.boxShadow = " -4px 0px 0px 0px red";
        pago[2].style.boxShadow = " -4px 0px 0px 0px red";
        A1.push("0");
        com.push("Seleccione el metodo de Pago \n");
    }
    
    //se incializan el contador para los alerts
    var H = "0";
    //para saber si todos los campos son correctos se verifica si el array A1 tiene una elemento con valor 1 y se cuenta cuntos de estos son 1
    for(i = 0; i < A1.length ; i ++){
        if(A1[i] == "1" ){
            H ++;
        }
    }
    //como son 11 alerts si H es 11 todos los campos fueron validados correctamente mostrando el siguiente alert
    if(H == 11){
        alert("El formulario se ha enviado exitosamente");
    } else {
        //en caso contrario se muestra el Array de alerts se utilizo el join para quitar la coma del array 
        alert(com.join(""));
        //devuelve false para evitar el envio del formulario ya que por lo menos hay un campo que no fue validado
        return false;
    }

        
    
    
}
//se creo una funcion para evitar que se ingresen numeros o letras en ciertos campos (Nombre,Apellido,DNI y Telefono)
function permite(elEvento, permitidos) {
    var caracteres = " abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
    var numeros = "0123456789";
    var teclas_especiales = [8, 37, 39, 46];
    switch(permitidos) {
        case 'num':
        permitidos = numeros;
        break;
        case 'car':
        permitidos = caracteres;
        break;
    }
    var evento = elEvento || window.event;
    var codigoCaracter = evento.charCode || evento.keyCode;
    var caracter = String.fromCharCode(codigoCaracter);
    var tecla_especial = false;
    for(var i in teclas_especiales) {
        if(codigoCaracter == teclas_especiales[i]) {
            tecla_especial = true;
            break;
        }
    }
    return permitidos.indexOf(caracter) != -1 || tecla_especial;
}