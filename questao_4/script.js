const celsiusInput = document.querySelector('#celsius');
const fahrenheitSpan = document.querySelector('#temp-fahrenheit');
const kelvinSpan = document.querySelector('#temp-kelvin');
const mensagemSpan = document.querySelector('#mensagem');

const converterFahrenheit = (celsius) => (celsius * 9/5) + 32;
const converterKelvin = (celsius) => celsius + 273.15;

celsiusInput.addEventListener('keyup', () => {
    const valorCelsius = parseFloat(celsiusInput.value);

    if (isNaN(valorCelsius)) {
        fahrenheitSpan.textContent = '-';
        kelvinSpan.textContent = '-';
        mensagemSpan.textContent = 'DIGITE UM VALOR VÁLIDO';
    }
    else{
        const valorFahrenheit = converterFahrenheit(valorCelsius);
        const valorKelvin = converterKelvin(valorCelsius);

        fahrenheitSpan.textContent = valorFahrenheit.toFixed(2);
        kelvinSpan.textContent = valorKelvin.toFixed(2);
        mensagemSpan.textContent = '';
    }
})