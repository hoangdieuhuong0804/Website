const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password');

form.addEventListener('submit', e => {
	e.preventDefault();
	checkInputs();
	signup();
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
		setErrorFor(password, 'Mật khẩu không đúng');
		return
	} else{
		setSuccessFor(password);
	}
	alert("Đăng ký thành công!!!");
}

function setErrorFor(input, message) {
	const input__field = input.parentElement;
	const small = input__field.querySelector('small');
	input__field.className = 'input__field error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'input__field success';
}
	
function isEmail(email) {
	return  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function signup() {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var user = {
      username: username,
      email: email,
      password: password,
    };
    var json = JSON.stringify(user);
    localStorage.setItem(username, json);
  }

  function login(e) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var user = localStorage.getItem(username);
    var data = JSON.parse(user);
    if (!user) {
      alert("Sai tên hoặc mật khẩu!!!");
    } else if (
      username == data.username &&
      email == data.email &&
      password == data.password
    ) {
      alert("Đăng nhập thành công!");
      window.location.href = "index.html";
    } else {
      alert("Sai tên hoặc mật khẩu!!!");
    }
  }