'use strict';

describe('Calc', function() {

  var Calc = require('./Calc');

  describe('Soma', function() {

    it('1 + 1 DEVE ser 2', function() {
      expect( Calc.soma( 1, 1) ).toBe( 2 );
    });

    it("2 + 1 + 4 + 3 DEVE ser 10", function() {
      expect( Calc.soma( 2, 1, 4, 3 ) ).toBe( 10 );
    });

  });

  describe('Subtracao', function() {

    it("4 - 4 DEVE ser 0", function() {
      expect( Calc.subtrai(4, 4) ).toBe( 0 );
    });

    it("-5 - (-4) DEVE ser -1", function() {
      expect( Calc.subtrai(-5, -4) ).toBe( -1 );
    });

  });

  describe('Multiplicacao', function() {

    it("1 multiplicado por 2 DEVE ser 2", function() {
      expect( Calc.multiplica(1, 2) ).toBe( 2 );
    });

    it("5 multiplicado por 5 e em seguida por 3 DEVE ser 75", function() {
      expect( Calc.multiplica(5, 5, 3) ).toBe( 75 );
    });

  });

  describe('Divisao', function() {

    it("2 dividido por 2 DEVE ser 1", function() {
      expect( Calc.divide(2, 2) ).toBe( 1 );
    });

    it("14 dividido por 2 DEVE ser 7", function() {
      expect( Calc.divide(14, 7) ).toBe( 7 );
    });

  });

});
