/*=============== Active Link =============== */

/*=============== Mixitup Filter =============== */

/*=============== Testimonials Swiper =============== */

/*=============== Contact Form=============== */

const contactForm = document.getElementById('contact-form');
const contactName = document.getElementById('contact-name');
const contactEmail = document.getElementById('contact-email');
const contactMessageElement = document.getElementById('contact-message');

const sendEmail = (e) => {
    e.preventDefault();

    if (contactName.value === '' || contactEmail.value === '' || contactMessageElement.value === '') {
        contactMessageElement.classList.remove('color-light');
        contactMessageElement.classList.add('color-dark');
        contactMessageElement.textContent = 'Write all the input fields';
    } else {
        emailjs
            .sendForm('service_9j02e16', 'template_9h7yld6', '#contact-form', 'Qil9hP2NHkgoeLRtv')
            .then(
                (response) => {
                    console.log('Email sent:', response);
                    contactMessageElement.classList.add('color-light');
                    contactMessageElement.textContent = 'Message sent ✔';
                    setTimeout(() => {
                        contactMessageElement.textContent = '';
                    }, 5000);
                },
                (error) => {
                    console.error('Error sending email:', error);
                    alert('OOPS! Something went wrong...', error);
                }
            );

        // Clear input fields after successful submission
        contactName.value = '';
        contactEmail.value = '';
        contactMessageElement.value = '';
    }
};

contactForm.addEventListener('submit', sendEmail);

// Smooth scrolling for navigation links
document.querySelectorAll('.nav__link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
