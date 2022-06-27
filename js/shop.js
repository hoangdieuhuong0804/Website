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

