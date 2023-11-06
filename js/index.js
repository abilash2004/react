// show menu

const showMenu = (toggleId,navId)=>{
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if(toggle && nav){
        toggle.addEventListener('click',()=>{
            nav.classList.toggle('show');
        })
    }}
    
showMenu('nav_toggle','nav_list');

// active menu da

const navLink = document.querySelectorAll('.nav_link');
navLink.forEach(n => n.classList.remove('active'));
function linkAction(){
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');

    const navMenu = document.getElementById('nav_list');
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction));

// scroll to top
//email

const contactForm = document.getElementById("contact_form"),
      contactMessage = document.getElementById("contact_text")

const sendEmail = (e)=>{
    e.preventDefault();
    emailjs.sendForm("service_rafy6en","template_s8ai5ai","#contact_form","THM8Z3xtGXYBN_izJ")
    .then(()=>{
        contactMessage.textContent="  message sent successfully ✅"

        setTimeout(() => {
            contactMessage.textContent=""
        }, 5000);

        contactForm.reset()
    },()=>{
        contactMessage.textContent="message not sent ❌"
    })
}

contactForm.addEventListener("submit",sendEmail)