

const sendEmail = async () => {
    const company = document.querySelector("#company-name").value;
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const phone = document.querySelector("#phone").value;
    const note = document.querySelector("#description").value;
    const url = "https://api.brevo.com/v3/smtp/email";
    const apiKey = window.API_KEY ;

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
        htmlContent: `<html><head></head><body><p>Hi Folks, <br>
        We have a new lead to track. Here is the details<br>
        Compay Name: ${company}<br><br>
        Compay Name: ${name}<br><br>
        Compay Name: ${email}<br><br>
        Compay Name: ${phone}<br><br>
        Compay Name: ${note}<br><br>
        </p></body></html>`
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