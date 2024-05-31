document.addEventListener('DOMContentLoaded', (event) => {
    const goHomeButton = document.getElementById('go-home');

    goHomeButton.addEventListener('mouseover', (event) => {
        const x = Math.random() * (window.innerWidth - goHomeButton.clientWidth);
        const y = Math.random() * (window.innerHeight - goHomeButton.clientHeight);
        goHomeButton.style.left = `${x}px`;
        goHomeButton.style.top = `${y}px`;
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    const goHomeButton = document.getElementById('go-home2');

    goHomeButton.addEventListener('mouseover', (event) => {
        const x = Math.random() * (window.innerWidth - goHomeButton.clientWidth);
        const y = Math.random() * (window.innerHeight - goHomeButton.clientHeight);
        goHomeButton.style.left = `${x}px`;
        goHomeButton.style.top = `${y}px`;
    });
});