const loginForm = document.querySelector("#loginForm");
const loginInput = document.querySelector("#loginForm input");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

const link= document.querySelector("a");
const greeting = document.querySelector("#greeting")

const HIDDEN_CLASSNAME = "hidden";  //string 담는 건 대문자로 써주는 게 관례
const USSERNAME_KEY = "userName";  //string 담는 건 대문자로 써주는 게 관례

function onLoginSubmit(event){
    event.preventDefault();  // preventDefault() : 어떤 event의 기본 행동이든지 발생되지 않도록 막는 것
                                                // 누군가 form을 submit하면 브라우저는 기본적으로 페이지를 새로고침하는데 이걸로 막음
    
    loginForm.classList.add(HIDDEN_CLASSNAME);  // 로그인 후 input란 숨겨주기
    const userName = loginInput.value;
    localStorage.setItem(USSERNAME_KEY, userName); // input된 값 localStorage에 저장
    paintGreetings(userName);
    // const userName = loginInput.value;
       // if (userName === "") {
       //     // loginInput.value = "hello "
       //     alert("Plese write your name");
       // }
       // else if (userName.length > 15) {
       //     alert("your name is too long. please text again");
        
       // }
       // console.log(loginInput.value);
}

// function handleLinkClick(event){
//     event.preventDefault();
//     // alert("Clicked!");
// }

// loginButton.addEventListener("click", onLoginBtnClick)
loginForm.addEventListener("submit", onLoginSubmit)
// link.addEventListener("click", handleLinkClick)

function paintGreetings(userName){
    greeting.classList.remove(userName);    // 숨어있던 greeting 보여주기
    greeting.innerText = `Hello ${savedUserName}!!`;
    // greeting.innerText = "Hello " + userName + "!";
}

const savedUserName = localStorage.getItem(USSERNAME_KEY);

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



// ===========================================================================================================
//const h1 = document.querySelector("div.hello:first-child h1");      // CSS 방식.. class hello를 찾고

// h1 click
//function handleTitleClick(){
    //const clickedClass ="clickActive";

    //h1.classList.toggle(clickedClass);
    //// toggle로 대체 가능 <like button> ----------------------------
    //// if (h1.classList.contains(clickedClass)) {
    ////     h1.classList.remove(clickedClass);
    //// }
    //// else{
    ////     h1.classList.add(clickedClass);
    //// }
    //// -----------------------------------------------


    /*  
        h1.className = "clickActive";    // CSS 내 클래스 불러오는 방법
        
        h1.style.color = "green"; 
        -> 이것처럼 CSS 변경 사항을 자바스크립트에서 직접 처리하는 것보다 
            위처럼 CSS에서 처리하고 여기서 동작하게 만드는 게 좋은 구조 
    */
// }

// h1.addEventListener("click", handleTitleClick);



// =========================================================================================================================
// // h1 mouse enter
// function handleTitleHover(){
//     h1.style.color = "green";
//     h1.innerText = "Mouse Here!";
// }

// // h1 mouse leave
// function handleTitleLeave(){
//     h1.style.color = "blue";
//     h1.innerText = "Mouse Gone!";
// }

// // 웹 화면 크기 변경할 때
// function handleWindowResize(){
//     document.body.style.backgroundColor = "tomato";
// }

// // 페이지에서 ctrl + c 할 때
// function handleWindowCopy(){
//     alert("You can't copy anything in this page");
// }

// // wifi disconnect
// function handleWindowOffline(){
//     alert("No WIFI!");
// }

// // wifi connect
// function handleWindowOnline(){
//     alert("GOOD WIFI!");
// }

// h1.addEventListener("click", handleTitleClick)       // 'click하면' 다음 함수를 불러옴..  <*** handleTitleClick() 은 실행하는 순간 불러옴>
// h1.addEventListener("mouseenter", handleTitleHover)  // mouse enter (hover)
// h1.addEventListener("mouseleave", handleTitleLeave)  // mouse leave
// // h1.onclick = handleTitleClick;
// // h1.onmouseenter = handleTitleHover;      // 위와 같음
// // h1.onmouseleave = handleTitleLeave;      // 하지만 이렇게 사용하면 removeEventListener 할 수 없음


// window.addEventListener("resize", handleWindowResize)
// window.addEventListener("copy", handleWindowCopy)
// window.addEventListener("offline", handleWindowOffline)
// window.addEventListener("online", handleWindowOnline)

// =========================================================================================================================

/*
[자바스크립트를 통해 HTML 가져오기]

getElementById()            : 해당 id 하나만 불러올 수 있음
getElementsByClassName()    : 해당 Class name으로 가져오고 array에 할당 //많은 element 가져올 때 유용
getElementsByTagName()      : Tag 가져와서 array에 할당
queryselector/querySelectAll  : element를 CSS 방식으로 검색할 수 있음, 해당 Tag 및 id Class name에 속한 요소 불러올 수 있고, 
                            중복 요소 많으면 (첫번째 요소/모든 조건) 보여줌
*/







//----------------------------------------------------------------------------------------------------------------------------------------
// const title = document.querySelectorAll(".hello h1:first-child");      // 여러가지 h1 중 첫번째만 찾기
//----------------------------------------------------------------------------------------------------------------------------------------
// const selector = document.querySelector("#hello");       //ID 찾기
// const selector = document.getElementById("hello");       //위와 같음
//----------------------------------------------------------------------------------------------------------------------------------------
// const hellos = document.getElementsByTagName("h1");  // tag : anchor, div, section, button ...
// const hellos = document.getElementsByClassName("Jam");
//----------------------------------------------------------------------------------------------------------------------------------------
// const title = document.getElementById("Jam"); // id는 HTML 내 id와 같아야 불러올 수 있음, but 보통 id로 찾지 않고 className으로 찾음
// hellos.innerText = "Got you!";
// console.log(title.className);
//----------------------------------------------------------------------------------------------------------------------------------------
// document.title = "Hello, Jam!"   // document ==> website HTML
//----------------------------------------------------------------------------------------------------------------------------------------

// const age= prompt("How old are you?");
// console.log(typeof age);

// if (isNaN(age)) {
//     prompt("please write a number")
// }
//----------------------------------------------------------------------------------------------------------------------------------------