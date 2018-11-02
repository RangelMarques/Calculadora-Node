'use strict';

module.exports = (function() {

  var Calc = {

    soma: function() {
      var soma = 0, i = undefined;
      for( i=0; i < arguments.length; i++ )
        soma += arguments[i];

      return soma;
    },

    subtrai: function(num1, num2) {
      return num1 - num2;
    },

    multiplica: function() {
      var multiplicacao = arguments[0], i = undefined;
      for( i=1; i < arguments.length; i++ )
        multiplicacao *= arguments[i];

      return multiplicacao;
    },

    divide: function(num1, num2) {
      return num1 / num2;
    }

  };

  return Calc;

    }
  )
();
