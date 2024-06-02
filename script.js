// JavaScript code for menu icon functionality
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}

window.onscroll = () => {
  menu.classList.remove('bx-x');
  navbar.classList.remove('active');
}



const sr = ScrollReveal ({
    distance: '60px',
    duration:  2500,
    delay: 400, 
    reset: true
})

sr.reveal('.text',{delay: 200, origin:'top'})
sr.reveal('.form-container form',{delay: 800, origin:'left'})
sr.reveal('.heading',{delay: 450, origin:'top'})
sr.reveal('.ride-container .box',{delay: 400, origin:'top'})
sr.reveal('.vid-container',{delay: 400, origin:'left'})
sr.reveal('.about-container ',{delay: 400, origin:'top'})



/*FAQ Animation*/

*document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
      const faqAnswer = button.nextElementSibling;
  
      button.classList.toggle('active');
  
      if (button.classList.contains('active')) {
        faqAnswer.style.maxHeight = faqAnswer.scrollHeight + 'px';
      } else {
        faqAnswer.style.maxHeight = 0;
      }
    });
  });


