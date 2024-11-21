var sign = document.querySelector("#signupName");
var signinEmail = document.querySelector("#signinEmail");
var signinPassword = document.querySelector("#signinPassword");
var email = document.querySelector("#signupEmail");
var password = document.querySelector("#signupPassword");
var sidiv = document.querySelector("#si-div");
var sighupbtn = document.querySelector("#btnsighup");
var sighinbtn = document.querySelector("#signinbtn");

sighinbtn?.addEventListener("click", login);
sighupbtn?.addEventListener("click", signUp);







var userscont = [];

if (localStorage.getItem("users") == null) {
  userscont = [];
} else {
  userscont = JSON.parse(localStorage.getItem("users"));
}

function signUp() {
  if (isEmpty() == false) {
    sidiv.innerHTML =
      '<span class="text-danger m-3">All inputs is required</span>';
    clear();
    return false;
  }

  if (isEmailExist() == false) {
    sidiv.innerHTML =
      '<span class="text-danger m-3">email already exists</span>';
  } else {
    var user = {
      name: sign.value,
      email: email.value,
      password: password.value,
    };

    userscont.push(user);
    localStorage.setItem("users", JSON.stringify(userscont));
    success();
    clear();
  }
}

function clear() {
  sign.value = "";
  email.value = "";
  password.value = "";
}

function isEmpty() {
  if (
    signupName.value == "" ||
    signupEmail.value == "" ||
    signupPassword.value == ""
  ) {
    return false;
  } else {
    return true;
  }
}

function success() {
  sidiv.innerHTML = '<span class="text-success m-3">Success</span>';
}


function isEmailExist() {
  for (var i = 0; i < userscont.length; i++) {
    if (userscont[i].email.toLowerCase() == sign.value.toLowerCase()) {
      return false;
    }
  }
}




/--------------------------------------------------------------------------------------------------------------------------------------------/ 






function isLoginEmpty() {
  if (signinPassword.value == "" || signinEmail.value == "") {
    return false;
  } else {
    return true;
  }
}

function login() {
    if (isLoginEmpty() == false) {
        document.getElementById('incorrect').innerHTML = '<span class="text-danger m-3">All inputs is required</span>'
        return false
    }
    for (var i = 0; i < userscont.length; i++) {
        if (userscont[i].email.toLowerCase() == signinEmail.value.toLowerCase() && userscont[i].password.toLowerCase() == signinPassword.value.toLowerCase()) {
            localStorage.setItem('Username', userscont[i].name)
         window.location.href="home.html"
 } else {
            document.getElementById('incorrect').innerHTML = '<span class="p-2 text-danger">incorrect email or password</span>'
        }
    }
}




var username = localStorage.getItem('Username')
if (username) {
    document.getElementById('username').innerHTML = "Welcome " + username
}






function logout() {
    localStorage.removeItem('Username')
}

