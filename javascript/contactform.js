const form = document.getElementById("contactForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const data = {
        subject: form.subject.value,
        name: form.name.value,
        email: form.email.value,
        message: form.message.value
    };

    form.reset();
});