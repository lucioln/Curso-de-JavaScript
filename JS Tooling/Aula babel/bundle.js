"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Pessoa = /*#__PURE__*/function () {
  function Pessoa(nome, sobrenome) {
    _classCallCheck(this, Pessoa);

    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  _createClass(Pessoa, [{
    key: "falaOla",
    value: function falaOla(nome, sobrenome) {
      console.log("".concat(this.nome, " ").concat(this.sobrenome, " diz ol\xE1"));
    }
  }]);

  return Pessoa;
}();

var p1 = new Pessoa('lúcio', 'noleto');
