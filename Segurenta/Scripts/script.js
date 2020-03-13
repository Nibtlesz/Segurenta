$$(document).on('ready', function () {
    $('#enviar_form').click(function (e) {
        e.preventDefault();
        var nombre = $('#inputnombre').val().required,
            correo = $('#inputcorreo').val().required,
            telefono = $('#inputtelefono').val().required,
            tipoCliente = $('#inputtip_clie').val().required;

        var url = "controller/contact.php";
        $.ajax({
            type: "POST",
            url: url,
            data: $("#contact-form").serialize(),
            success: function (data) {
                document.getElementById('contact-form').reset();
                $('#enviado_form').html(data);

            }
        });
        return false;
    });
});