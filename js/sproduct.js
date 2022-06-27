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


    var MainImg=document.getElementById("MainImg");
    var smallimg=document.getElementsByClassName("small-img");

    smallimg[0].onclick =function(){
        MainImg.src=smallimg[0].src;
    }
    smallimg[1].onclick =function(){
        MainImg.src=smallimg[1].src;
    }
    smallimg[2].onclick =function(){
        MainImg.src=smallimg[2].src;
    }
    const bar=document.getElementById('bar');
    const close=document.getElementById('close');
    const nav=document.getElementById('navbar');
    
    if(bar){
      bar.addEventListener('click',()=>{
        nav.classList.add('active');
      })
    }
  