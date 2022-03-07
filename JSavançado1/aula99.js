//Super-class
function Conta(agencia, conta, saldo){
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.saque = function(valor){
    if(this.saldo <valor ){
        console.log(`Saldo insuficiente: ${this.saldo}`);
        return;
    } 
    this.saldo -= valor;
};

Conta.prototype.deposito = function(valor){
    this.saldo += valor;
};

Conta.prototype.verSaldo = function(){
    console.log('Ag.: '+this.agencia +' | C.:'+this.conta + 
    ' Saldo: R$'+this.saldo.toFixed(2)
    );
};

function CC(agencia, conta, saldo, limite){
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}

CC.prototype = Object.create(Conta.prototype);
CC.prototype.constructor = CC; 

const conta1 = new Conta('0001', '1234-5', 1000);
conta1.deposito(250);
conta1.saque(1251);
conta1.verSaldo();