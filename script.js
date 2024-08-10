document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the form from submitting in the traditional way

    // Simple form validation to check if all fields are filled
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Thank you for your message!');
        document.getElementById('contact-form').reset();  // Reset form fields after submission
    } else {
        alert('Please fill out all fields.');
    }
});

// Implementing lightbox effect for the gallery images
document.querySelectorAll('.gallery-item img').forEach(image => {
    image.addEventListener('click', function() {
        const src = this.src;
        const altText = this.alt;  // Retrieve the alt text to use as the description in the lightbox

        // Creating the lightbox div that will cover the entire viewport
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

        // Creating the image element that will be displayed in the lightbox
        const img = document.createElement('img');
        img.src = src;
        img.style.maxWidth = '80%';
        img.style.maxHeight = '80%';

        // Creating a paragraph element for the image description
        const desc = document.createElement('p');
        desc.textContent = altText;
        desc.style.color = 'white';
        desc.style.textAlign = 'center';
        desc.style.fontSize = '1.2em';
        desc.style.marginTop = '20px';  // Space between image and description

        // Appending the image and description to the lightbox
        lightbox.appendChild(img);
        lightbox.appendChild(desc);

        // Adding the lightbox to the body of the document
        document.body.appendChild(lightbox);

        // Adding event listener to close the lightbox when clicked
        lightbox.addEventListener('click', function() {
            document.body.removeChild(lightbox);
        });
    });
});
