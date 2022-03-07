function rand (min, max){
    min*=1000;
    max*=1000;
    return Math.floor(Math.random()*(max-min)+min);
}



function esperaAi(msg, tempo){
    return new Promise((resolve, reject)=>{
        if(typeof msg !== 'string'){ 
            reject('Bad Value');
            return;
        }
        setTimeout(()=>{
            resolve(msg);
        }, tempo);
    });
}

// esperaAi('Frase 1', rand(1,3))
// .then( resposta => {
//     console.log(resposta);
//     return esperaAi(2222, rand(1,3)); /// Gera erro do catch
// })
// .then(resposta => {
//     return resposta + ' vai pro prox then';
// }).then(resposta =>{
//     console.log(resposta);
// })
// .catch(errorMsg =>{
//     console.log('ERRO:', errorMsg);
// });

// Promise.all Promise.race Promise.resolve Promise.reject

const promises = [
    'Primeiro valor',
    esperaAi('Promise 1',3000),
    esperaAi('Promise 2',500),
    esperaAi('Promise 3',1000),
    'Outro valor'
]

// Promise.all(promises)   // Resolve todas as promises
//     .then(valor=>{
//         console.log(valor);
//     }).catch((e)=>{
//         console.log('Error:', e);
//     });

// Promise.race(promises)     // Sempre entrega a primeira promise resolvida
//     .then(valor=>{
//         console.log(valor);
//     }).catch((e)=>{
//     console.log('Error:', e);
//     });

async function executa(){
    try{
    const fase1 = await esperaAi ('fase 1', rand(0,2));
    console.log(fase1);
    const fase2 = await esperaAi ('fase 2', rand(0,2));
    console.log(fase2);
    const fase3 = await esperaAi(1, rand(0,2));
    console.log('terminamos na:' ,fase3);
    } catch(error){
        console.log(error);
    }
}

executa();