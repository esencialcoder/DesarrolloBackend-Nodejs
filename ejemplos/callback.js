'use strict';

function suma(a, b, callback) {
    const resultado = a + b;
    callback(resultado);
};

suma(5, 2, function(resultado) {
    console.log(resultado);
});