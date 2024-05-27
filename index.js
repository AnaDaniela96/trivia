document.getElementById('openModalBtn').addEventListener('click', function() {
    const modal = document.getElementById('myModal');
    const overlay = document.getElementById('overlay');

    // Mostrar modal y overlay
    modal.style.display = 'block';
    overlay.style.display = 'block';
});

document.getElementById('submitBtn').addEventListener('click', function() {
    const name = document.getElementById('nameInput').value;
    const countdownElement = document.getElementById('output');

    // Ocultar modal y overlay
    document.getElementById('myModal').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';

    // Esperar 2 segundos antes de comenzar la cuenta regresiva
    setTimeout(() => {
        let count = 3;
        countdownElement.textContent = count;

        const interval = setInterval(() => {
            count--;
            if (count > 0) {
                countdownElement.textContent = count;
            } else {
                clearInterval(interval);
                countdownElement.textContent = "Ok amistad: " + name + " es hora de jugar.";
            }
        }, 1000);
    }, 2000);
});
