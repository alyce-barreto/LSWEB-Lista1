const botaoCalcular = document.querySelector('#calcular');
const etanolInput = document.querySelector('#etanol');
const gasolinaInput = document.querySelector('#gasolina');
const resultadoDiv = document.querySelector('#resultado');

const calcularMelhorCombusivel = (valorEtanol, valorGasolina) => {
    const relacao = valorEtanol / valorGasolina;
    return relacao < 0.7 ? 1 : 0;
}


botaoCalcular.addEventListener('click', () => {
    const valorEtanol = parseFloat(etanolInput.value);
    const valorGasolina = parseFloat(gasolinaInput.value);

    const melhorCombustivel = calcularMelhorCombusivel(valorEtanol, valorGasolina);
    const resultado = melhorCombustivel === 1 ? "Etanol" : "Gasolina";
    resultadoDiv.textContent = `O melhor combustível para essa cotação é: ${resultado}.`;

})
