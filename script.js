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

document.addEventListener('DOMContentLoaded', (event) => {
    const goHomeButton = document.getElementById('go-home3');

    goHomeButton.addEventListener('mouseover', (event) => {
        const x = Math.random() * (window.innerWidth - goHomeButton.clientWidth);
        const y = Math.random() * (window.innerHeight - goHomeButton.clientHeight);
        goHomeButton.style.left = `${x}px`;
        goHomeButton.style.top = `${y}px`;
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    const goHomeButton = document.getElementById('go-home4');

    goHomeButton.addEventListener('mouseover', (event) => {
        const x = Math.random() * (window.innerWidth - goHomeButton.clientWidth);
        const y = Math.random() * (window.innerHeight - goHomeButton.clientHeight);
        goHomeButton.style.left = `${x}px`;
        goHomeButton.style.top = `${y}px`;
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    const goHomeButton = document.getElementById('go-home_base');
    let mouseX = 0;
    let mouseY = 0;

    // Event listener for mouseover to move the button randomly
    goHomeButton.addEventListener('mouseover', (event) => {
        const x = Math.random() * (window.innerWidth - goHomeButton.clientWidth);
        const y = Math.random() * (window.innerHeight - goHomeButton.clientHeight);
        goHomeButton.style.position = 'absolute';
        goHomeButton.style.left = `${x}px`;
        goHomeButton.style.top = `${y}px`;
    });

    // Event listener for mousemove to track cursor position
    document.addEventListener('mousemove', (event) => {
        mouseX = event.clientX;
        mouseY = event.clientY;
    });

    // Event listener for keydown to move the button to the cursor position
    document.addEventListener('keydown', (event) => {
        if (event.key === 'o' || event.key === 'O') {
            goHomeButton.style.position = 'absolute';
            goHomeButton.style.left = `${mouseX}px`;
            goHomeButton.style.top = `${mouseY}px`;
        }
    });
});