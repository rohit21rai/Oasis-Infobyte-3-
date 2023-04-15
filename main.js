document.getElementById('convert').onclick = tempConvert;
document.getElementById('clear').onclick = clearForm;

function tempConvert() {
    var fahrenheit = document.getElementById('fahrenheit').value;
    var celcius = document.getElementById('celcius').value;
    var kelvin = document.getElementById('kelvin').value;

    if (fahrenheit != '') {
        celcius = (parseFloat(fahrenheit) -32)/1.8;
        kelvin = (parseFloat(fahrenheit-32)/1.8)+273.15
    }

    if (celcius != '') {
        fahrenheit = (parseFloat(celcius) * 1.8) + 32;
        kelvin = (parseFloat(fahrenheit-32)/1.8)+273.15
    }

    if (kelvin != ''){
        fahrenheit = (parseFloat(kelvin-273.15) * 1.8) + 32;
        celcius = (parseFloat(kelvin) -273.15);
    }

    else {
        return 0;
    }

    document.getElementById('fahrenheit').value = parseFloat(fahrenheit).toFixed(1);
    document.getElementById('celcius').value = parseFloat(celcius).toFixed(1);
    document.getElementById('kelvin').value = parseFloat(kelvin).toFixed(1);
}

function clearForm() {
    document.getElementById('fahrenheit').value = '';
    document.getElementById('celcius').value = '';
    document.getElementById('kelvin').value = '';
}