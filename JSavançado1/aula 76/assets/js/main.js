function criaCalculadora() {
    return {
        display: document.querySelector('.display'),


        inicia() {
            this.cliqueBotoes()
            this.pressionaEnter();
        },

        pressionaEnter() {
            document.addEventListener('keyup', (e) => {
                if (e.keyCode === 13) {
                    this.realizaConta();
                }
            });
        },



        apagaUm() {
            this.display.value = this.display.value.slice(0, -1);
        },


        realizaConta() {
            conta = this.display.value; //eval é perigoso por permitir executar qualquer javascript em seu argumento!
            try {
                conta = eval(conta);

                if (!conta) {
                    alert('conta invalida');
                    return;
                }

                this.display.value = String(conta);
            } catch (e) {
                alert('Conta inválida');
                return;
            }
        },


        clearDisplay() {
            this.display.value = '';
        },



        cliqueBotoes() {
            //this -> calculadora
            document.addEventListener('click', (e) => {
                const el = e.target;
                // console.log(this) o this é document
                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }

                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if (el.classList.contains('btn-del')) {
                    this.apagaUm();
                }

                if (el.classList.contains('btn-eq')) {
                    this.realizaConta();
                }
            });
        },
        btnParaDisplay(valor) {
            this.display.value += valor;
        },






    };
}

const calculadora = criaCalculadora();
calculadora.inicia();