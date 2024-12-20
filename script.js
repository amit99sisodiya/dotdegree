// Open the booking form modal
function openBookingForm(productName) {
    const modal = document.getElementById('booking-modal');
    const productNameField = document.getElementById('product-name');

    if (modal && productNameField) {
        // Set the product name in the input field
        productNameField.value = productName;
        // Show the modal
        modal.style.display = 'block';
    }
}

// Close the booking form modal
function closeBookingForm() {
    const modal = document.getElementById('booking-modal');
    if (modal) {
        // Hide the modal
        modal.style.display = 'none';
    }
}

// Handle form submission for booking
const bookingForm = document.getElementById('booking-form');
if (bookingForm) {
    bookingForm.addEventListener('submit', (event) => {
        event.preventDefault();  // Prevent form from submitting normally

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

        // Show success message (you can modify this or create a separate element for it)
        alert('Your booking request has been submitted!');

        // Close the modal after submission
        closeBookingForm();
    });
}
// Set index.html as the homepage when clicking the link
document.addEventListener('DOMContentLoaded', () => {
    window.location.href = 'index.html';  // Redirect to homepage (index.html)
}

});
