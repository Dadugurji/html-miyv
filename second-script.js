document.addEventListener('DOMContentLoaded', function() {
    // Select the image and container
    const image = document.getElementById('expandingImage');
    const container = document.querySelector('.container');

    // Expand the image and container to fullscreen after a delay
    setTimeout(() => {
        image.classList.add('fullscreen');
        container.classList.add('fullscreen');
    }, 500); // Adjust this delay as needed
});

document.getElementById('unmuteButton').addEventListener('click', function() {
    const music = document.getElementById('backgroundMusic');
    if (music.muted) {
        music.muted = false;
        this.textContent = "Mute Music"; // Change button text to "Mute Music"
    } else {
        music.muted = true;
        this.textContent = "Unmute Music"; // Change button text back to "Unmute Music"
    }
});

