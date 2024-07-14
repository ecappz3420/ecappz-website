const showHideFunction = () => {
    const hash = window.location.hash.replace("#", "");
    const sections = document.querySelectorAll("section");
    if (hash === "refund-policy") {
        sections.forEach(section => {
            section.style.display = "none";
        })
        document.querySelector(`#${hash}`).style.display = "block";
        scrollTop();
    }
    else if(hash === "general-policy"){
        sections.forEach(section => {
            section.style.display = "none";
        })
        document.querySelector(`#${hash}`).style.display = "block";  
        scrollTop(); 
    }
    else if(hash === "privacy-policy"){
        sections.forEach(section => {
            section.style.display = "none";
        })
        document.querySelector(`#${hash}`).style.display = "block";  
        scrollTop(); 
    }
    else if(hash === "home"){ 
        sections.forEach(section => {
            section.style.display = "none";
        })
        document.querySelector(`#${hash}`).style.display = "block";  
        scrollTop(); 
    }
    else if(hash === "about"){ 
        sections.forEach(section => {
            section.style.display = "none";
        })
        document.querySelector(`#${hash}`).style.display = "block";  
        scrollTop(); 
    }
    else if(hash === "services"){ 
        sections.forEach(section => {
            section.style.display = "none";
        })
        document.querySelector(`#${hash}`).style.display = "block";  
        scrollTop(); 
    }
    else if(hash === "reviews"){ 
        sections.forEach(section => {
            section.style.display = "none";
        })
        document.querySelector(`#${hash}`).style.display = "block";  
        scrollTop(); 
    }
    else if(hash === "contact"){ 
        
        sections.forEach(section => {
            section.style.display = "none";
        })
        document.querySelector(`#${hash}`).style.display = "block";  
        scrollTop(); 
    }
    else{
        sections.forEach(section => {
            section.style.display = "none";
        })
        document.querySelector(`#home`).style.display = "block";  
        scrollTop(); 
    }
}

const scrollTop =()=>{
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}
document.addEventListener("DOMContentLoaded", showHideFunction)

window.addEventListener("hashchange",showHideFunction);
