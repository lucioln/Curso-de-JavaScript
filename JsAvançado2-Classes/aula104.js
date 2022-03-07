class Apple{
    constructor(produto, ano){
        this.produto = produto;
        this.ano = ano;
        this.power = true;
    }

    ligar(){
        if(this.power){
            console.log(this.produto + 'Já está ligado');
            return; 
        } 
        this.power = true;
    }

    desligado(){
        if(this.power === false){
            console.log(this.produto + ' Já está desligado');
            return;
        } 
        this.power = false;
    }
}

const a1 = new Apple('iphone', 2020)

class Iphone extends Apple {
    constructor(produto,ano,modelo, cor){
        super(produto, ano);
        this.modelo = modelo;
        this.cor = cor;
    }
    bemVindo(){
        console.log('Bem vindo ao '+this.produto);
    }
}

const iphoneX = new Iphone('iPhone', 2020, 'X', 'Cinza');
iphoneX.desligado();
iphoneX.desligado();
iphoneX.bemVindo();
console.log(iphoneX);