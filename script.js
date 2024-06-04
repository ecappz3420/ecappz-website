
const sendEmail = async () => {
    const url = "https://api.brevo.com/v3/smtp/email";
    const apiKey = "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" ;

    const sender = {
        name: 'ECAPPZ',
        email: 'sales@ecappz.in'
    };

    const recipient = {
        email: 'info@ecappz.in',
        name: 'John Doe'
    };

    const emailData = {
        sender,
        to: [recipient],
        subject: 'New Lead',
        htmlContent: '<html><head></head><body><p>Hello,</p>This is my first transactional email sent from Brevo.</p></body></html>'
    };

    const options = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "api-key" :  apiKey
        },
        body: JSON.stringify(emailData)
    };

    fetch(url, options)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
        });
}
document.querySelector("#submit").addEventListener("click", sendEmail);