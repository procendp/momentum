const h1 = document.querySelector("div.hello:first-child h1");      // CSS 방식.. class hello를 찾고

// h1 click
function handleTitleClick(){
    h1.style.color = "red";
    h1.innerText = "Mouse Click!";
}

// h1 mouse enter
function handleTitleHover(){
    h1.style.color = "green";
    h1.innerText = "Mouse Here!";
}

// h1 mouse leave
function handleTitleLeave(){
    h1.style.color = "blue";
    h1.innerText = "Mouse Gone!";
}

// 웹 화면 크기 변경할 때
function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
}

// 페이지에서 ctrl + c 할 때
function handleWindowCopy(){
    alert("You can't copy anything in this page");
}

// wifi disconnect
function handleWindowOffline(){
    alert("No WIFI!");
}

// wifi connect
function handleWindowOnline(){
    alert("GOOD WIFI!");
}

h1.addEventListener("click", handleTitleClick)       // 'click하면' 다음 함수를 불러옴..  <*** handleTitleClick() 은 실행하는 순간 불러옴>
h1.addEventListener("mouseenter", handleTitleHover)  // mouse enter (hover)
h1.addEventListener("mouseleave", handleTitleLeave)  // mouse leave
// h1.onclick = handleTitleClick;
// h1.onmouseenter = handleTitleHover;      // 위와 같음
// h1.onmouseleave = handleTitleLeave;      // 하지만 이렇게 사용하면 removeEventListener 할 수 없음


window.addEventListener("resize", handleWindowResize)
window.addEventListener("copy", handleWindowCopy)
window.addEventListener("offline", handleWindowOffline)
window.addEventListener("online", handleWindowOnline)
















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