document.getElementById('inputFocus').addEventListener('input', function() {
    let span = document.querySelector('.material-symbols-outlined.send');
    if (this.value.length > 0) {
        span.style.color = '#61AEFA'; // Cambia el color del span 
    } else {
        span.style.color = ''; // Restablece el color del span
    }
});