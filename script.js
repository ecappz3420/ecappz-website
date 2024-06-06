const hideShowtabs = (id) => {
    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
        section.style.display = "none";
    })
    document.querySelector(`#${id}`).style.display = "block";
}

const handleHash = ()=>{
    let hash = window.location.hash.substring(1);
    if(!hash){
        hash = "home";
    }
    hideShowtabs(hash);
}
document.addEventListener("DOMContentLoaded",()=>{
    handleHash();
    window.addEventListener("hashchange",handleHash);
    const links = document.querySelectorAll(".nav-link");
    links.forEach(link=> {
        link.addEventListener('click', (e)=> {
            e.preventDefault();
            const id = link.getAttribute('href').substring(1);
            window.location.hash = id; 
        });
    })

})


const sendEmail = async () => {
    const company = document.querySelector("#company-name").value;
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const phone = document.querySelector("#phone").value;
    const note = document.querySelector("#description").value;
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