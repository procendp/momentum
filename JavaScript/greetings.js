const loginForm = document.querySelector("#loginForm");
const loginInput = document.querySelector("#loginForm input");
const greeting = document.querySelector("#greeting")

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "userName";

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);

    const userName = loginInput.value;
    localStorage.setItem(USERNAME_KEY, userName);
    paintGreetings(userName);
}

function paintGreetings(userName){
    greeting.innerText = `Hello ${userName}!!`;
    greeting.classList.remove(HIDDEN_CLASSNAME);    // 숨어있던 greeting 보여주기
    // greeting.innerText = "Hello " + userName + "!";
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if (savedUserName === null){
    //localStorage에 유저 정보 없을 때
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}
else {
    //show the greeting
    paintGreetings(savedUserName);
}