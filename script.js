document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Simple form validation
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Thank you for your message!');
        document.getElementById('contact-form').reset();
    } else {
        alert('Please fill out all fields.');
    }
});

// Optional lightbox effect for the gallery
document.querySelectorAll('.gallery-item img').forEach(image => {
    image.addEventListener('click', function() {
        const src = this.src;
        const lightbox = document.createElement('div');
        lightbox.id = 'lightbox';
        lightbox.style.position = 'fixed';
        lightbox.style.top = '0';
        lightbox.style.left = '0';
        lightbox.style.width = '100%';
        lightbox.style.height = '100%';
        lightbox.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        lightbox.style.display = 'flex';
        lightbox.style.alignItems = 'center';
        lightbox.style.justifyContent = 'center';
        lightbox.style.cursor = 'pointer';

        const img = document.createElement('img');
        img.src = src;
        img.style.maxWidth = '80%';
        img.style.maxHeight = '80%';

        lightbox.appendChild(img);
        document.body.appendChild(lightbox);

        lightbox.addEventListener('click', function() {
            document.body.removeChild(lightbox);
        });
    });
});
