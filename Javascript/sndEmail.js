function sendEmail() {
    // Get form values
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    // Encode the message for the mailto link
    let subject = encodeURIComponent("New Contact Form Submission");
    let body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);

    // Open default email client
    window.location.href = `mailto:austzdee@hotmail.com?subject=${subject}&body=${body}`;
}
