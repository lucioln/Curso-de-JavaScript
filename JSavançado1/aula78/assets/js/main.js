function Calculadora() {
    this.display = document.querySelector('.display');

    this.start = () => {



        document.addEventListener('keyup', (e) => {
            if (e.keyCode === 13) {
                this.realizaConta();
            }
        });



        this.apagaUm = () => {
            this.display.value = this.display.value.slice(0, -1);
        }


        this.realizaConta = () => {
            conta = this.display.value; //eval é perigoso por permitir executar qualquer javascript em seu argumento!
            try {
                conta = eval(conta);

                if (!conta) {
                    alert('conta invalida');
                    return;
                };

                this.display.value = String(conta);
            } catch (e) {
                alert('Conta inválida');
                return;
            };
        }


        this.clearDisplay = () => {
            this.display.value = '';
        }



        //this -> calculadora
        document.addEventListener('click', (e) => {
            el = e.target;
            // console.log(this) o this é document
            if (el.classList.contains('btn-num')) {
                this.btnParaDisplay(el.innerText);
            };

            if (el.classList.contains('btn-clear')) {
                this.clearDisplay();
            };

            if (el.classList.contains('btn-del')) {
                this.apagaUm();
            };

            if (el.classList.contains('btn-eq')) {
                this.realizaConta();
            };
        });

        this.btnParaDisplay = (valor) => {
            this.display.value += valor;
        }

    };

}

cal = new Calculadora();

cal.start();