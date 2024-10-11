const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();                     //web load 후 바로 출력
setInterval(getClock, 1000);    //1초 후 이어서 출력

// function sayHello(){
//     console.log("hello");
// }
// setInterval(sayHello, 1000);   //function, ms..  1000ms마다 function 실행
// setTimeout(sayHello, 5000);    //function, ms..  5000ms후에 function 실행

// "1".padStart(2, "0");    //padding 추가 함수.. stringd의 시작 부분을 "0"으로 maxLentgh = 2까지 채워줘
// padEnd();    //뒤에 추가