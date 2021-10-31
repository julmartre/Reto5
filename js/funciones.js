// ROOM -----------------------#

function consultar() {
  $.ajax({
    url: "http://144.22.57.28:8080/api/Room/all",
    type: "GET",
    datatype: "JSON",
    success: function (response) {
      $("#miResultado").empty();
      mostrarResultado(response);
      //console.log(response);
    }
  });
}

function mostrarResultado(response) {
  let rows = '<table>\
              <tr>\
                  <td>ID</td>\
                  <td style="text-align: center;">NAME</td>\
                  <td style="text-align: center;">HOTEL</td>\
                  <td>STARS</td>\
                  <td>DESCRIPTION</td>\
                  <td style="text-align: center;">ELIMINAR</td>\
                  <td>ACTUALIZAR</td>\
              </tr>';
  for (i = 0; i < response.length; i++) {
    rows += '<tr>'
    rows += '<td>' + response[i].id + '</td>';
    rows += '<td>' + response[i].name + '</td>';
    rows += '<td>' + response[i].hotel + '</td>';
    rows += '<td>' + response[i].stars + '</td>';
    rows += '<td>' + response[i].description + '</td>';
    rows += '<td> <button onclick="eliminar(' + response[i].id + ')"> BORRAR </td>';
    rows += '<td style="text-align: center;"> <button onclick="buscarPorID(' + response[i].id + ')"> EDITAR </td>';
    rows += '</tr>';
  }
  rows += '</table>';
  $("#miResultado").append(rows);
}

function guardar() {
  var elemento = {
    id: $("#idBase").val(),
    name: $("#nameBase").val(),
    hotel: $("#hotelBase").val(),
    stars: $("#starsBase").val(),
    description: $("#descriptionBase").val()
  }
  var dataToSend = JSON.stringify(elemento);
  $.ajax({
    dataType: 'json',
    data: dataToSend,
    contentType: 'application/json',
    url: "http://144.22.57.28:8080/api/Room/save",
    type: 'POST',

    success: function (response) {
      //console.log(response);
    },

    complete: function (xhr, status) {
      alert("Guardado Correctamente ;)");
      limpiarFormulario();
      location.href = location.href;
    },

    error: function (jqXHR, textStatus, errorThrown) {

    }
  });
}

function editar() {
  var elemento = {
    id: $("#idBase").val(),
    name: $("#nameBase").val(),
    hotel: $("#hotelBase").val(),
    stars: $("#starsBase").val(),
    description: $("#descriptionBase").val()
  }
  var dataToSend = JSON.stringify(elemento);
  $.ajax({
    dataType: 'json',
    data: dataToSend,
    contentType: 'application/json',
    url: "http://144.22.57.28:8080/api/Room/update",
    type: 'PUT',

    success: function (response) {
      //console.log(response);
    },

    complete: function (xhr, status) {
      alert("Actualizado Correctamente :D");
      limpiarFormulario();
      location.href = location.href;
    },

    error: function (jqXHR, textStatus, errorThrown) {

    }
  });
}


function eliminar(idElemento) {
  let elemento = {
    id: idElemento,
  }
  let datoEnvio = JSON.stringify(elemento);
  //console.log(datoEnvio);
  $.ajax({
    url: "http://144.22.57.28:8080/api/Room/" + idElemento,
    type: "DELETE",
    data: datoEnvio,
    datatype: "json",
    contentType: 'application/json',
    success: function (respuesta) {
      $("#resultado").empty();
      alert("Eliminado correctamente :)");
      location.href = location.href;
    }
  });
}


function buscarPorID(idItem) {
  $.ajax({
    url: "http://144.22.57.28:8080/api/Room/" + idItem,
    type: "GET",
    datatype: "JSON",
    success: function (response) {
      //console.log(response)
      $("#resultado").empty();
      $("#resultado").append("<h2 style='text-align: center; color: aliceblue;'>ROOM A EDITAR</h2>");
      $("#resultado").append("<table class='default' style='margin: 0 auto; color: aliceblue;'><tr><th>NAME</th><td>" +
        response.name + "</td></tr> " + "<tr><th>HOTEL</th><td>" +
        response.hotel + "</td></tr> " + "<tr><th>STARS</th><td>" +
        response.stars + "</td></tr> " + "<tr><th>DESCRIPTION</th><td>" +
        response.description + "</td></tr></table>");
      $("#resultado").append("<hr>");
      $("#idBase").val(response.id),
        $("#nameBase").val(response.name),
        $("#hotelBase").val(response.hotel),
        $("#starsBase").val(response.stars),
        $("#descriptionBase").val(response.description)
    }
  });
}

// CATEGORY -----------------------#

function consultarCategory() {
  $.ajax({
    url: "http://144.22.57.28:8080/api/Category/all",
    type: "GET",
    datatype: "JSON",
    success: function (response) {
      $("#miResultadoCategory").empty();
      mostrarResultadoCategory(response);
      //console.log(response);
    }
  });
}

function mostrarResultadoCategory(response) {
  let rows = '<table style="margin: 0 auto; color: aliceblue;">\
              <tr>\
                  <td>ID</td>\
                  <td style="text-align: center;">NAME</td>\
                  <td style="text-align: center;">DESCRIPTION</td>\
                  <td style="text-align: center;">ELIMINAR</td>\
                  <td>ACTUALIZAR</td>\
              </tr>';
  for (i = 0; i < response.length; i++) {
    rows += '<tr>'
    rows += '<td>' + response[i].id + '</td>';
    rows += '<td>' + response[i].name + '</td>';
    rows += '<td>' + response[i].description + '</td>';
    rows += '<td> <button onclick="eliminarCategory(' + response[i].id + ')"> BORRAR </td>';
    rows += '<td style="text-align: center;"> <button onclick="buscarPorIDCategory(' + response[i].id + ')"> EDITAR </td>';
    rows += '</tr>';
  }
  rows += '</table>';
  $("#miResultadoCategory").append(rows);
}

function guardarCategory() {
  var elemento = {
    id: $("#idCategory").val(),
    name: $("#nameCategory").val(),
    description: $("#descriptionCategory").val()
  }
  var dataToSend = JSON.stringify(elemento);
  $.ajax({
    dataType: 'json',
    data: dataToSend,
    contentType: 'application/json',
    url: "http://144.22.57.28:8080/api/Category/save",
    type: 'POST',

    success: function (response) {
      //console.log(response);
    },

    complete: function (xhr, status) {
      alert("Guardado Correctamente ;)");
      limpiarFormulario();
      location.href = location.href;
    },

    error: function (jqXHR, textStatus, errorThrown) {

    }
  });
}

function editarCategory() {
  var elemento = {
    id: $("#idCategory").val(),
    name: $("#nameCategory").val(),
    description: $("#descriptionCategory").val()
  }
  var dataToSend = JSON.stringify(elemento);
  $.ajax({
    dataType: 'json',
    data: dataToSend,
    contentType: 'application/json',
    url: "http://144.22.57.28:8080/api/Category/update",
    type: 'PUT',

    success: function (response) {
      //console.log(response);
    },

    complete: function (xhr, status) {
      alert("Actualizado Correctamente :D");
      limpiarFormulario();
      location.href = location.href;
    },

    error: function (jqXHR, textStatus, errorThrown) {

    }
  });
}


function eliminarCategory(idElemento) {
  let elemento = {
    id: idElemento,
  }
  let datoEnvio = JSON.stringify(elemento);
  //console.log(datoEnvio);
  $.ajax({
    url: "http://144.22.57.28:8080/api/Category/" + idElemento,
    type: "DELETE",
    data: datoEnvio,
    datatype: "json",
    contentType: 'application/json',
    success: function (respuesta) {
      $("#resultadoCategory").empty();
      alert("Eliminado correctamente :)");
      location.href = location.href;
    }
  });
}


function buscarPorIDCategory(idItem) {
  $.ajax({
    url: "http://144.22.57.28:8080/api/Category/" + idItem,
    type: "GET",
    datatype: "JSON",
    success: function (response) {
      //console.log(response)
      $("#resultadoCategory").empty();
      $("#resultadoCategory").append("<h2 style='text-align: center; color: aliceblue;'>CATEGORY A EDITAR</h2>");
      $("#resultadoCategory").append("<table class='default' style='margin: 0 auto; color: aliceblue;'><tr><th>NAME</th><td>" +
        response.name + "</td></tr> " + "<tr><th>DESCRIPTION</th><td>" +
        response.description + "</td></tr></table>");
      $("#resultadoCategory").append("<hr>");
      $("#idCategory").val(response.id),
        $("#nameCategory").val(response.name),
        $("#descriptionCategory").val(response.description)
    }
  });
}


// CLIENT -----------------------#
function consultarClient() {
  $.ajax({
    url: "http://144.22.57.28:8080/api/Client/all",
    type: "GET",
    datatype: "JSON",
    success: function (response) {
      $("#miResultadoClient").empty();
      mostrarResultadoClient(response);
      //console.log(response);
    }
  });
}

function mostrarResultadoClient(response) {
  let rows = '<table>\
              <tr>\
                  <td>ID</td>\
                  <td style="text-align: center;">EMAIL</td>\
                  <td style="text-align: center;">PASSWORD</td>\
                  <td>NAME</td>\
                  <td>AGE</td>\
                  <td style="text-align: center;">ELIMINAR</td>\
                  <td>ACTUALIZAR</td>\
              </tr>';
  for (i = 0; i < response.length; i++) {
    rows += '<tr>'
    rows += '<td>' + response[i].idClient + '</td>';
    rows += '<td>' + response[i].email + '</td>';
    rows += '<td>' + response[i].password + '</td>';
    rows += '<td>' + response[i].name + '</td>';
    rows += '<td>' + response[i].age + '</td>';
    rows += '<td> <button onclick="eliminarClient(' + response[i].idClient + ')"> BORRAR </td>';
    rows += '<td style="text-align: center;"> <button onclick="buscarPorIDClient(' + response[i].idClient + ')"> EDITAR </td>';
    rows += '</tr>';
  }
  rows += '</table>';
  $("#miResultadoClient").append(rows);
}

function guardarClient() {
  var elemento = {
    idClient: $("#idClient").val(),
    email: $("#emailClient").val(),
    password: $("#passwordClient").val(),
    name: $("#nameClient").val(),
    age: $("#ageClient").val()
  }
  var dataToSend = JSON.stringify(elemento);
  $.ajax({
    dataType: 'json',
    data: dataToSend,
    contentType: 'application/json',
    url: "http://144.22.57.28:8080/api/Client/save",
    type: 'POST',

    success: function (response) {
      //console.log(response);
    },

    complete: function (xhr, status) {
      alert("Guardado Correctamente ;)");
      limpiarFormulario();
      location.href = location.href;
    },

    error: function (jqXHR, textStatus, errorThrown) {

    }
  });
}

function editarClient() {
  var elemento = {
    idClient: $("#idClient").val(),
    email: $("#emailClient").val(),
    password: $("#passwordClient").val(),
    name: $("#nameClient").val(),
    age: $("#ageClient").val()
  }
  var dataToSend = JSON.stringify(elemento);
  $.ajax({
    dataType: 'json',
    data: dataToSend,
    contentType: 'application/json',
    url: "http://144.22.57.28:8080/api/Client/update",
    type: 'PUT',

    success: function (response) {
      //console.log(response);
    },

    complete: function (xhr, status) {
      alert("Actualizado Correctamente :D");
      limpiarFormulario();
      location.href = location.href;
    },

    error: function (jqXHR, textStatus, errorThrown) {

    }
  });
}


function eliminarClient(idElemento) {
  let elemento = {
    idClient: idElemento,
  }
  let datoEnvio = JSON.stringify(elemento);
  //console.log(datoEnvio);
  $.ajax({
    url: "http://144.22.57.28:8080/api/Client/" + idElemento,
    type: "DELETE",
    data: datoEnvio,
    datatype: "json",
    contentType: 'application/json',
    success: function (respuesta) {
      $("#resultadoClient").empty();
      alert("Eliminado correctamente :)");
      location.href = location.href;
    }
  });
}


function buscarPorIDClient(idItem) {
  $.ajax({
    url: "http://144.22.57.28:8080/api/Client/" + idItem,
    type: "GET",
    datatype: "JSON",
    success: function (response) {
      //console.log(response)
      $("#resultadoClient").empty();
      $("#resultadoClient").append("<h2 style='text-align: center; color: aliceblue;'>CLIENT A EDITAR</h2>");
      $("#resultadoClient").append("<table class='default' style='margin: 0 auto; color: aliceblue;'><tr><th>EMAIL</th><td>" +
        response.email + "</td></tr> " + "<tr><th>PASSWORD</th><td>" +
        response.password + "</td></tr> " + "<tr><th>NAME</th><td>" +
        response.name + "</td></tr> " + "<tr><th>AGE</th><td>" +
        response.age + "</td></tr></table>");
      $("#resultadoClient").append("<hr>");
      $("#idClient").val(response.idClient),
        $("#emailClient").val(response.email),
        $("#passwordClient").val(response.password),
        $("#nameClient").val(response.name),
        $("#ageClient").val(response.age)
    }
  });
}


// RESERVATION -----------------------#
function consultarReservation() {
  $.ajax({
    url: "http://144.22.57.28:8080/api/Reservation/all",
    type: "GET",
    datatype: "JSON",
    success: function (response) {
      $("#miResultadoReservation").empty();
      mostrarResultadoReservation(response);
      //console.log(response);
    }
  });
}

function mostrarResultadoReservation(response) {
  let rows = '<table>\
              <tr>\
                  <td>ID</td>\
                  <td style="text-align: center;">START DATE</td>\
                  <td style="text-align: center;">DEVOLUTION DATE</td>\
                  <td style="text-align: center;">ELIMINAR</td>\
                  <td>ACTUALIZAR</td>\
              </tr>';
  for (i = 0; i < response.length; i++) {
    rows += '<tr>'
    rows += '<td>' + response[i].idReservation + '</td>';
    rows += '<td>' + response[i].startDate + '</td>';
    rows += '<td>' + response[i].devolutionDate + '</td>';
    rows += '<td> <button onclick="eliminarReservation(' + response[i].idReservation + ')"> BORRAR </td>';
    rows += '<td style="text-align: center;"> <button onclick="buscarPorIDReservation(' + response[i].idReservation + ')"> EDITAR </td>';
    rows += '</tr>';
  }
  rows += '</table>';
  $("#miResultadoReservation").append(rows);
}

function guardarReservation() {
  var elemento = {
    idReservation: $("#idReservation").val(),
    startDate: $("#startDateReservation").val(),
    devolutionDate: $("#devolutionDateReservation").val()
  }
  var dataToSend = JSON.stringify(elemento);
  $.ajax({
    dataType: 'json',
    data: dataToSend,
    contentType: 'application/json',
    url: "http://144.22.57.28:8080/api/Reservation/save",
    type: 'POST',

    success: function (response) {
      //console.log(response);
    },

    complete: function (xhr, status) {
      alert("Guardado Correctamente ;)");
      limpiarFormulario();
      location.href = location.href;
    },

    error: function (jqXHR, textStatus, errorThrown) {

    }
  });
}

function editarReservation() {
  var elemento = {
    idReservation: $("#idReservation").val(),
    startDate: $("#startDateReservation").val(),
    devolutionDate: $("#devolutionDateReservation").val()
  }
  var dataToSend = JSON.stringify(elemento);
  $.ajax({
    dataType: 'json',
    data: dataToSend,
    contentType: 'application/json',
    url: "http://144.22.57.28:8080/api/Reservation/update",
    type: 'PUT',

    success: function (response) {
      //console.log(response);
    },

    complete: function (xhr, status) {
      alert("Actualizado Correctamente :D");
      limpiarFormulario();
      location.href = location.href;
    },

    error: function (jqXHR, textStatus, errorThrown) {

    }
  });
}


function eliminarReservation(idElemento) {
  let elemento = {
    idReservation: idElemento,
  }
  let datoEnvio = JSON.stringify(elemento);
  //console.log(datoEnvio);
  $.ajax({
    url: "http://144.22.57.28:8080/api/Reservation/" + idElemento,
    type: "DELETE",
    data: datoEnvio,
    datatype: "json",
    contentType: 'application/json',
    success: function (respuesta) {
      $("#resultadoReservation").empty();
      alert("Eliminado correctamente :)");
      location.href = location.href;
    }
  });
}


function buscarPorIDReservation(idItem) {
  $.ajax({
    url: "http://144.22.57.28:8080/api/Reservation/" + idItem,
    type: "GET",
    datatype: "JSON",
    success: function (response) {
      //console.log(response)
      $("#resultadoReservation").empty();
      $("#resultadoReservation").append("<h2 style='text-align: center; color: aliceblue;'>RESERVATION A EDITAR</h2>");
      $("#resultadoReservation").append("<table class='default' style='margin: 0 auto; color: aliceblue;'><tr><th>STARTDATE</th><td>" +
        response.startDate + "</td></tr> " + "<tr><th>DEVOLUTIONDATE</th><td>" +
        response.devolutionDate + "</td></tr></table>");
      $("#resultadoReservation").append("<hr>");
      $("#idReservation").val(response.idReservation),
        $("#startDateReservation").val(response.startDate),
        $("#devolutionDateReservation").val(response.devolutionDate)
    }
  });
}


// MESSAGE -----------------------#

function consultarMessage() {
  $.ajax({
    url: "http://144.22.57.28:8080/api/Message/all",
    type: "GET",
    datatype: "JSON",
    success: function (response) {
      $("#miResultadoMessage").empty();
      mostrarResultadoMessage(response);
      //console.log(response);
    }
  });
}

function mostrarResultadoMessage(response) {
  let rows = '<table style="margin: 0 auto; color: aliceblue;">\
              <tr>\
                  <td>ID</td>\
                  <td style="text-align: center;">MESSAGETEXT</td>\
                  <td style="text-align: center;">ELIMINAR</td>\
                  <td>ACTUALIZAR</td>\
              </tr>';
  for (i = 0; i < response.length; i++) {
    rows += '<tr>'
    rows += '<td>' + response[i].idMessage + '</td>';
    rows += '<td>' + response[i].messagetext + '</td>';
    rows += '<td> <button onclick="eliminarMessage(' + response[i].idMessage + ')"> BORRAR </td>';
    rows += '<td style="text-align: center;"> <button onclick="buscarPorIDMessage(' + response[i].idMessage + ')"> EDITAR </td>';
    rows += '</tr>';
  }
  rows += '</table>';
  $("#miResultadoMessage").append(rows);
}

function guardarMessage() {
  var elemento = {
    idMessage: $("#idMessage").val(),
    messagetext: $("#message").val()
  }
  var dataToSend = JSON.stringify(elemento);
  $.ajax({
    dataType: 'json',
    data: dataToSend,
    contentType: 'application/json',
    url: "http://144.22.57.28:8080/api/Message/save",
    type: 'POST',

    success: function (response) {
      //console.log(response);
    },

    complete: function (xhr, status) {
      alert("Guardado Correctamente ;)");
      limpiarFormulario();
      location.href = location.href;
    },

    error: function (jqXHR, textStatus, errorThrown) {

    }
  });
}

function editarMessage() {
  var elemento = {
    idMessage: $("#idMessage").val(),
    messagetext: $("#message").val()
  }
  var dataToSend = JSON.stringify(elemento);
  $.ajax({
    dataType: 'json',
    data: dataToSend,
    contentType: 'application/json',
    url: "http://144.22.57.28:8080/api/Message/update",
    type: 'PUT',

    success: function (response) {
      //console.log(response);
    },

    complete: function (xhr, status) {
      alert("Actualizado Correctamente :D");
      limpiarFormulario();
      location.href = location.href;
    },

    error: function (jqXHR, textStatus, errorThrown) {

    }
  });
}


function eliminarMessage(idElemento) {
  let elemento = {
    idMessage: idElemento,
  }
  let datoEnvio = JSON.stringify(elemento);
  //console.log(datoEnvio);
  $.ajax({
    url: "http://144.22.57.28:8080/api/Message/" + idElemento,
    type: "DELETE",
    data: datoEnvio,
    datatype: "json",
    contentType: 'application/json',
    success: function (respuesta) {
      $("#resultadoMessage").empty();
      alert("Eliminado correctamente :)");
      location.href = location.href;
    }
  });
}


function buscarPorIDMessage(idItem) {
  $.ajax({
    url: "http://144.22.57.28:8080/api/Message/" + idItem,
    type: "GET",
    datatype: "JSON",
    success: function (response) {
      //console.log(response)
      $("#resultadoMessage").empty();
      $("#resultadoMessage").append("<h2 style='text-align: center; color: aliceblue;'>MESSAGE A EDITAR</h2>");
      $("#resultadoMessage").append("<table class='default' style='margin: 0 auto; color: aliceblue;'><tr><th>MESSAGETEXT</th><td>" +
        response.messagetext + "</td></tr></table>");
      $("#resultadoMessage").append("<hr>");
      $("#idMessage").val(response.idMessage),
        $("#message").val(response.messagetext)
    }
  });
}


// REPORTES -----------------------#

function consultarCompletados() {
  $.ajax({
    url: "http://144.22.57.28:8080/api/Reservation/report-status",
    type: "GET",
    datatype: "JSON",
    success: function (response) {
      //console.log(response)
      $("#resultadoReportes").empty();
      $("#resultadoReportes").append("<table class='default' style='margin: 0 auto; color: aliceblue;'><tr><th>COMPLETADAS</th><td width='50%'>" +
        response.completed + "</td></tr> " + "<tr><th>CANCELADAS</th><td width='50%'>" +
        response.cancelled + "</td></tr></table>");
      $("#resultadoReportes").append();
    }
  });
}

function consultarClientes() {
  $.ajax({
    url: "http://144.22.57.28:8080/api/Reservation/report-clients",
    type: "GET",
    datatype: "JSON",
    success: function (response) {
      $("#miResultadoReportes").empty();
      mostrarResultadoReportes(response);
      //console.log(response);
    }
  });
}

function mostrarResultadoReportes(response) {
  let rows = '<table style="margin: 0 auto; color: aliceblue;">\
              <tr>\
                  <td>TOP</td>\
                  <td>RESERVAS</td>\
                  <td style="text-align: center;">NAME</td>\
                  <td style="text-align: center;">EMAIL</td>\
              </tr>';
  var contador = 1;
  for (i = 0; i < response.length; i++) {
    rows += '<tr>'
    rows += '<td style="text-align: center;">' + contador + '</td>';
    rows += '<td style="text-align: center;">' + response[i].total + '</td>';
    rows += '<td>' + response[i].client.name + '</td>';
    rows += '<td>' + response[i].client.email + '</td>';
    rows += '</tr>';
    contador++;
  }
  rows += '</table>';
  $("#miResultadoReportes").append(rows);
}


function guardarReporte() {
  let date1 = {
    date: $("#fechaReporte").val(),
  }
  let date2 = {
    date: $("#fecha2Reporte").val(),
  }
  //console.log(date1.date + "/" + date2.date);
    $.ajax({
    url: "http://144.22.57.28:8080/api/Reservation/report-dates/" + date1.date + "/" + date2.date,
    type: "GET",
    datatype: "JSON",
    success: function (response) {
      $("#miResultadoReportes2").empty();
      mostrarResultadoReportes2(response);
      //console.log(response);
    }
  });

}

// ULTIMA FUNCION QUE NO PUDE, LA DE LAS FECHAS

function mostrarResultadoReportes2(response) {
  let rows = '<table style="margin: 0 auto; color: aliceblue;">\
              <tr>\
                  <td style="text-align: center;">CANTIDAD RESERVAS</td>\
                  <td>ID RESERVA</td>\
                  <td>CLIENTE</td>\
                  <td style="text-align: center;">HABITACION</td>\
                  <td style="text-align: center;">HOTEL</td>\
                  <td style="text-align: center;">ESTADO</td>\
              </tr>';
  var contador = 1;
  for (i = 0; i < response.length; i++) {
    rows += '<tr>'
    rows += '<td style="text-align: center;">' + contador + '</td>';
    rows += '<td>' + response[i].idReservation + '</td>';
    rows += '<td>' + response[i].client.name + '</td>';
    rows += '<td>' + response[i].room.name + '</td>';
    rows += '<td>' + response[i].room.hotel + '</td>';
    rows += '<td>' + response[i].status + '</td>';
    rows += '</tr>';
    contador++;
  }
  rows += '</table>';
  $("#miResultadoReportes2").append(rows);
}

function limpiarFormulario() {
  $("#idBase").val("");
  $("#roomBase").val("");
  $("#starsBase").val("");
  $("#categoryBase").val("");
  $("#descriptionBase").val("");
}
