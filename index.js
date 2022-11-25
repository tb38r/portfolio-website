// ---
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
const sendEmailBtn = document.getElementById('send-email-btn')
const headerHamMenuCloseBtn = document.querySelector(
  '.header__main-ham-menu-close'
)
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')
let sender = document.getElementById('name').value;
let email = document.getElementById('email').value;
let message =document.getElementById('message').value;
const serviceID = 'service_9vkoor2'
const templateID = 'template_uomrj7s'


hamMenuBtn.addEventListener('click', () => {
  if (smallMenu.classList.contains('header__sm-menu--active')) {
    smallMenu.classList.remove('header__sm-menu--active')
  } else {
    smallMenu.classList.add('header__sm-menu--active')
  }
  if (headerHamMenuBtn.classList.contains('d-none')) {
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  } else {
    headerHamMenuBtn.classList.add('d-none')
    headerHamMenuCloseBtn.classList.remove('d-none')
  }
})

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active')
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  })
}

// ---
const headerLogoConatiner = document.querySelector('.header__logo-container')

headerLogoConatiner.addEventListener('click', () => {
  location.href = 'index.html'
})

sendEmailBtn.addEventListener('click', ()=>{

  console.log('hello');
  if (sender.length > 0 && email.contains('@') && message.length > 0){
    sendMail(sender, email, message)
  console.log('world');
  } 


})


const sendMail = (name, email, message) =>{
  let params ={
    name,
    email,
    message,
  };

  emailjs.send(serviceID, templateID, params).then((res)=>{
    sender.innerText = ''
    email.innerText= ''
    message.innerText= ''
    console.log(res);

  }).catch((err)=>console.log('Issue sending mail', err))
}

