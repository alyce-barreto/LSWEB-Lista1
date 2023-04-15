const repeticoes = 1000000;
const botaoSimular = document.querySelector('#simular');
const divResultados = document.querySelector('#resultados');

const numeroAleatorio = () => Math.floor(Math.random() * 6) + 1;

botaoSimular.addEventListener('click' , () => {

    let numero = numeroAleatorio();
    let cont1 = 0;
    let cont2 = 0;
    let cont3 = 0;
    let cont4 = 0;
    let cont5 = 0;
    let cont6 = 0;

    for(let i=0; i<repeticoes; i++){
        if(numero === 1){
            cont1++;
        }
        else if(numero === 2){
            cont2++;
        }
        else if(numero === 3){
            cont3++;
        }
        else if(numero === 4){
            cont4++;
        }
        else if(numero === 5){
            cont5++;
        }
        else {
            cont6++;
        }
        numero = numeroAleatorio();
    }


divResultados.innerHTML = `A quantidade gerada de cada número, foi: <br><br> NÚMERO 1 = ${cont1} <br> NÚMERO 2 = ${cont2} <br> NÚMERO 3 = ${cont3} <br> NÚMERO 4 = ${cont4} <br> NÚMERO 5 = ${cont5} <br> NÚMERO 6 = ${cont6} `;

})