class ValidaCPF{
    constructor (cpf){
        Object.defineProperty(this, 'cpf', {
            writable: false, 
            enumerable: true,
            configurable: false,
            value: cpf.replace(/\D+/g, '')
        });
        
    }
    VerificaCPF(){
        if (typeof this.cpf === 'undefined') return false;
        if (this.cpf.length !== 11) return false;
        if (this.isSequencia()) return false;

        const cpfParcial = this.cpf.slice(0, -2);
        const digito1 = this.VerificaDigito(cpfParcial);
        const digito2 = this.VerificaDigito(cpfParcial + digito1);

        return this.cpf !== (cpfParcial + digito1 + digito2) ? false : true;
    }
    isSequencia(){
        const sequencia = this.cpf[0].repeat(this.cpf.length);
        return sequencia === this.cpf;
    }
    VerificaDigito = function (cpfParcial) {
        const cpfArray = Array.from(cpfParcial);
        let contadorRegressivo = cpfArray.length + 1;
        const total = cpfArray.reduce((ac, val) => {
            ac += (contadorRegressivo * Number(val));
            contadorRegressivo--;
            return ac;
        }, 0);
        const digito = 11-(total%11);
        return digito>9 ? 0 : digito;
    }
}

const p1 = new ValidaCPF('705.484.450-52')
console.log(p1.VerificaCPF());