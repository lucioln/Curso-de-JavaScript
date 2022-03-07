//Datas
//const tresHoras = 60 * 60 * 3 * 1000;
//const umDia = 60 * 60 * 24 * 1000;
//const data = new Date(0 + tresHoras + umDia); // Date(1) -> Deveria ser 01/01/1970 Timestamp unix ou época unix
const data = new Date(2019, 0, 15, 14); // 0 é o mês de Janeiro
console.log(data.toString());
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth());
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Minutos', data.getMinutes());
console.log('Segundos', data.getSeconds());
console.log('Dia da semana', data.getDay());
