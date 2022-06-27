const header = document.querySelector("header")
window.addEventListener("scroll",function(){
    x=window.pageYOffset
   if(x>0){
       header.classList.add("sticky")
   }
   else{
       header.classList.remove("sticky")
   }
})


const counters=document.querySelectorAll('.counter');

counters.forEach((counter) => {
counter.innerText='0';

const updateCounter = () =>{
const target=+counter.getAttribute
('data-target');
const c=+counter.innerText;

const increment =target / 200;
if(c < target) {
 counter.innerText= `${Math.ceil(c + increment)
 }`;
 setTimeout(updateCounter,10);
}else{
 counter.innerText=target;
}

};
updateCounter();
});

$(document).ready(function(){

    $('.accordion-header').click(function(){
      $('.accordion .accordion-body').slideUp();
      $(this).next('.accordion-body').slideDown();
      $('.accordion .accordion-header span').text('+');
      $(this).children('span').text('-');
    });
  
  });
  
  const bar=document.getElementById('bar');
  const close=document.getElementById('close');
  const nav=document.getElementById('navbar');
  
  if(bar){
    bar.addEventListener('click',()=>{
      nav.classList.add('active');
    })
  }
if(close){
    close.addEventListener('click',()=>{
      nav.classList.remove('active');
    })
  }