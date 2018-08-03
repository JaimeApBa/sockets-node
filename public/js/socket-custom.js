var socket = io();

socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Se perdió la conexión con el servidor');
});

// Enviar mensaje
socket.emit('enviarMensaje', {
    usuario: 'Yo',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('respuesta server:', resp);
});

// Escuchar info
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor:', mensaje);
});