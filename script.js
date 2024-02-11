document.getElementById('noBtn').addEventListener('mouseover', function() {
    const noBtn = this;
    const deltaX = Math.random() < 0.5 ? -75 : 75;
    const deltaY = Math.random() < 0.5 ? -75 : 75;
    let newX = noBtn.offsetLeft + deltaX;
    let newY = noBtn.offsetTop + deltaY;

    // Keep button within viewport bounds
    newX = Math.max(0, Math.min(newX, window.innerWidth - noBtn.offsetWidth));
    newY = Math.max(0, Math.min(newY, window.innerHeight - noBtn.offsetHeight));

    noBtn.style.position = 'absolute';
    noBtn.style.left = `${newX}px`;
    noBtn.style.top = `${newY}px`;
});

document.getElementById('yesBtn').addEventListener('click', function() {
    window.location.href = 'second-page.html';
});

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        const imageContainer = document.getElementById('expandingImageContainer');
        // This scale factor effectively causes the image to fill the screen
        imageContainer.style.transform = 'scale(1.2)'; // Adjust scaling as desired
    }, 500); // Adjust timing as desired
});

