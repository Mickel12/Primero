$(document).on("click", "#btn_registrar", function () {
    //validar apellido
    let apellido = $("#txtapellidos").val();
    if (apellido.trim().legth==0) {
        alert("debe eligir un apellido");
        return false;

    }
    let nombre = $("#txtnombre").val();
    if (nombre.trim().legth==0) {
        alert("debe eligir un nombre");
        return false;

    }

    alert("datos correctos");
    
})


