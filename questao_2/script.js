const botaoCalcular = document.querySelector('#calcular');
const baseInput = document.querySelector('#base');
const expoenteInput = document.querySelector('#expoente');

const resultadoDiv = document.querySelector('#resultado');

const calcularPotencia = (base, expoente) => Math.pow(base, expoente);

botaoCalcular.addEventListener ('click', () => {
    const base = parseInt(baseInput.value);
    const expoente = parseInt(expoenteInput.value);

    const resultado = calcularPotencia (base, expoente);

    resultadoDiv.textContent = `Resultado:  ${resultado}`;
})

