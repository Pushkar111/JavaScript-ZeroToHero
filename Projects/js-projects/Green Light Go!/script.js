let currentLight = 'red';

function changeLight() {
    const redLight = document.getElementById('red');
    const yellowLight = document.getElementById('yellow');
    const greenLight = document.getElementById('green');

    if (currentLight === 'red') {
        redLight.style.backgroundColor = 'gray';
        yellowLight.style.backgroundColor = 'yellow';
        currentLight = 'yellow';
    } else if (currentLight === 'yellow') {
        yellowLight.style.backgroundColor = 'gray';
        greenLight.style.backgroundColor = 'green';
        currentLight = 'green';
    } else {
        greenLight.style.backgroundColor = 'gray';
        redLight.style.backgroundColor = 'red';
        currentLight = 'red';
    }
}