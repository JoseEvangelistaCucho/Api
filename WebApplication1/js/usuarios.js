
let url = "https://localhost:44367/api/prueba"
$.get(url, function (respuesta) {

   /* respueta.forEach(function (item) {
        usuario = respuesta[respuesta]

    })*/

    let usuario=respuesta[respuesta.length -1]

        & ("#usuario").text(usuario.name)

}, "json")
