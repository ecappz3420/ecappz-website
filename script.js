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
    else {
        sections.forEach(section=>{
            (section.id === "general-policy" || section.id === "refund-policy" || section.id === "privacy-policy") ? section.style.display = "none": section.style.display = "block";
            scrollTop();
        })
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
