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

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
	
	if(usernameValue === '') {
		setErrorFor(username, 'Tên người dùng không thể để trống');
		return
	} else {
		setSuccessFor(username);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email không được để trống');
		return
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Địa chỉ email không hợp lệ');
		return
	} else {
		setSuccessFor(email);
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Mật khẩu không đúng');
		return
	} else {
		setSuccessFor(password);
	}
	
	if(password2Value === '') {
		setErrorFor(password2, 'Mật khẩu không đúng');
		return
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Mật khẩu không đúng');
		return
	} else{
		setSuccessFor(password2);
	}
	alert("Đăng ký thành công!");
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
