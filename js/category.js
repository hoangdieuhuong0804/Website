
const itemsbar =document.querySelectorAll(".cartegory-left-li")
itemsbar.forEach(function(menu,index){
menu.addEventListener("click",function(){
menu.classList.toggle("block")
})
})
const search=()=>{
  const searchbox = document.getElementById("search-item").value.toUpperCase();
  const storeitems = document.getElementById("product-list")
  const product = document.querySelectorAll(".pro")
  const pname=document.getElementsByTagName("h5")

  for(var i=0;i< pname.length; i++){
    let match=product[i].getElementsByTagName('h5')[0];

    if(match){
     let textvalue= match.textContent || match.innerHTML

     if(textvalue.toUpperCase().indexOf(searchbox)> -1){
      product[i].style.display = "";
     }else{
      product[i].style.display = "none";
     }
    }
  }
}

const btn=document.querySelectorAll("button")
// console.log(btn)
btn.forEach(function(button,index){
 button.addEventListener("click",function(event){{
  var btnItem=event.target
  var sanpham=btnItem.parentElement
  var sanphamImg=sanpham.querySelector("img").src
  var sanphamName=sanpham.querySelector("H5").innerHTML
  var sanphamGia=sanpham.querySelector("span").innerHTML
  // console.log(sanphamGia,sanphamImg,sanphamName)
  addCart(sanphamGia,sanphamImg,sanphamName)
 }})

})
function addCart(sanphamGia,sanphamImg,sanphamName){
  var addtr=document.createElement("tr")
  var cartItem=document.querySelectorAll("tbody tr")
  for(var i=0;i<cartItem.length;i++){
    var sanphamT=document.querySelectorAll(".tilte")
    if(sanphamT[i].innerHTML == sanphamName){
      alert("Sản phẩm này đã có trong giỏ hàng của bạn")
      return
    }
  }
 
  var trcontent= '<tr> </td> <td><img src="'+sanphamImg+'" alt=""></td> <td class="tilte">'+sanphamName+'</td> <td><span>'+sanphamGia+'</span>đ</td> <td><input type="number" value="1" min="1" ></td><td ><i class="far fa-times-circle" style="cursor:pointer;" ></i></td></tr>'
  addtr.innerHTML=trcontent
  var cartTable=document.querySelector("tbody")
  // console.log(cartTable)
  cartTable.append(addtr)
  carttotal()
  deleteCart()
}
function carttotal(){
  var totalC=0;

  var cartItem=document.querySelectorAll("tbody tr")
  // console.log(cartItem.length)
  for(var i=0;i<cartItem.length;i++){
    var inputValue=cartItem[i].querySelector("input").value
    // console.log(inputValue)
    var sanphamGia=cartItem[i].querySelector('span').innerHTML
    // console.log(sanphamGia)
  totalA=inputValue*sanphamGia*1000
  totalC=totalC+ totalA
  // totalD=totalC.toLocaleString('de-DE')
  // console.log(totalC)
  inpputchange()
 }
 var cartTotalA=document.querySelector(".price-total span")
 cartTotalA.innerHTML=totalC.toLocaleString('de-DE')
 }

function deleteCart(){
  var cartItem=document.querySelectorAll("tbody tr")
  for(var i=0;i<cartItem.length;i++){
    var proudctT=document.querySelectorAll(".fa-times-circle")
    // console.log(proudctT)
    proudctT[i].addEventListener("click",function(event){
      var cartDelete=event.target
      var cartitemR=cartDelete.parentElement.parentElement
      cartitemR.remove()
      carttotal()
      // console.log(cartitemR)
    })
  }
}
function inpputchange(){
  var cartItem=document.querySelectorAll("tbody tr")
  for(var i=0;i<cartItem.length;i++){
    var inpputValue=cartItem[i].querySelector("input")
    inpputValue.addEventListener("change",function(){
      carttotal()
    })
  }
}
const cartbtn=document.querySelector(".fa-x")
const cartshow=document.querySelector(".fa-shopping-bag")
cartshow.addEventListener("click",function(){
  document.querySelector("#cart").style.right="0%"
})
cartbtn.addEventListener("click",function(){
  document.querySelector("#cart").style.right="-100%"
})
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


let slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }

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

 