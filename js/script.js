document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const successMessage = document.getElementById('successMessage');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const firstName = document.getElementById('first_name').value.trim();
        const requiredFirstName = document.getElementById('required-firstName');

        const secondName = document.getElementById('second_name').value.trim();
        const requiredSecondName = document.getElementById('required-secondName');

        const email = document.getElementById('email').value.trim();
        const validEmail = document.getElementById('valid_email');
        const requiredEmail = document.getElementById('required_email');

        const enquiryRadio = document.getElementById('EnquiryRadio');
        const requestRadio = document.getElementById('RequestRadio');

        const requiredQuery = document.querySelector('.query-type .required_query');
        const message = document.getElementById('message').value.trim();
        const requiredMessage = document.querySelector('.message .required');

        const consent = document.getElementById('consent').checked;
        const toSubmit = document.querySelector('.toSubmit');

        // Reset error messages
        requiredFirstName.style.display = 'none';
        requiredSecondName.style.display = 'none';
        validEmail.style.display = 'none';
        requiredEmail.style.display = 'none';
        requiredQuery.style.display = 'none';
        requiredMessage.style.display = 'none';
        toSubmit.style.display = 'none';

        // Validation logic
        let isValid = true;

        if (firstName === '') {
            requiredFirstName.style.display = 'block';
            document.querySelector('#first_name').style.border = '1.5px solid var(--Red)';
            isValid = false;
        }

        if (secondName === '') {
            requiredSecondName.style.display = 'block';
            document.querySelector('#second_name').style.border = '1.5px solid var(--Red)';

            isValid = false;
        }

        if (email === '') {
            requiredEmail.style.display = 'block';
            document.querySelector('#email').style.border = '1.5px solid var(--Red)';
            isValid = false;
        } else if (!isValidEmail(email)) {
            validEmail.style.display = 'block';
            document.querySelector('#email').style.border = '1.5px solid var(--Red)';

            isValid = false;
        }

        if (!enquiryRadio.checked && !requestRadio.checked) {
            requiredQuery.style.display = 'block';

            isValid = false;
        }

        if (message === '') {
            requiredMessage.style.display = 'block';
            document.querySelector('#message').style.border = '1.5px solid var(--Red)';

            isValid = false;
        }

        if (!consent) {
            toSubmit.style.display = 'block';
            isValid = false;
        }

        // If all inputs are valid, proceed with form submission
        if (isValid) {
            // Normally you would submit the form here
            // form.submit();
            // For demonstration, show success message
            showSuccessMessage();
        }
    });

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function showSuccessMessage() {
        successMessage.classList.add('active');
        // Optional: Clear form fields after submission
        clearFormFields();
    }

    function clearFormFields() {
        document.getElementById('first_name').value = '';
        document.getElementById('second_name').value = '';
        document.querySelector('.email input[type="text"]').value = '';
        document.getElementById('message').value = '';
        document.getElementById('consent').checked = false;
        document.getElementById('EnquiryRadio').checked = false;
        document.getElementById('RequestRadio').checked = false;
    }
});
