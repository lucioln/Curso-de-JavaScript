//Metodos de Instância - Estáticos
class ControleRemoto{
    constructor(tv) {
        this.tv = tv;
        this.volume = 10;
    }

    aumentarVolume() {
        this.volume +=1;
    }
    diminuirVolume(){
        this.volume -=1;
    }
    //Método Estático
    static trocaPilha(){
        console.log('troca pilha');
    }
}

const controle1 = new ControleRemoto('LG');
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
//controle1.trocaPilha();  Gera erro pq um método estático é relacionado a classe, e não a instância
ControleRemoto.trocaPilha();
console.log(controle1);