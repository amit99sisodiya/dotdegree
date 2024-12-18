// script.js

// Typewriter Effect for index.html
document.addEventListener('DOMContentLoaded', () => {
    const typewriterElement = document.getElementById('typewriter');
    if (typewriterElement) {
        const text = "Welcome To Our Platform !!!";
        let index = 0;
        const speed = 100;

        function typeWriter() {
            if (index < text.length) {
                typewriterElement.textContent += text.charAt(index);
                index++;
                setTimeout(typeWriter, speed);
            }
        }

        typeWriter();
    }
});

// Open booking form modal on institute.html
function openBookingForm(productName) {
    const modal = document.getElementById('booking-modal');
    const productNameField = document.getElementById('product-name');

    if (modal && productNameField) {
        productNameField.value = productName;
        modal.style.display = 'block';
    }
}

// Close booking form modal
function closeBookingForm() {
    const modal = document.getElementById('booking-modal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Handle form submission for booking
const bookingForm = document.getElementById('booking-form');
if (bookingForm) {
    bookingForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const productName = document.getElementById('product-name').value;
        const instituteName = document.getElementById('institute-name').value;
        const contactNumber = document.getElementById('contact-number').value;
        const email = document.getElementById('email').value;
        const requirements = document.getElementById('requirements').value;

        // Simulate booking submission (you can replace this with a backend API call)
        console.log('Booking Details:', {
            productName,
            instituteName,
            contactNumber,
            email,
            requirements
        });

        alert('Your booking request has been submitted!');
        closeBookingForm();
    });
}

// Redirect logic for missing authentication (e.g., accessing institute.html without login)
document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.includes('institute.html')) {
        const loggedIn = localStorage.getItem('institute-id');
        if (!loggedIn) {
            alert('Please log in to access this page.');
            window.location.href = 'login.html';
        }
    }
});
