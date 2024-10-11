//축구선수 명언 무작위로 웹에 보여주기
const qouteList = [
    {
        qoute: "You have to fight to reach your dream. You have to sacrifice and work hard for it.",
        author: "Lionel Messi",
    },
    {
        qoute: "I dont have time for hobbies. At the end of the day, I treat my job as a hobby. It’s something I love doing.",
        author: "David Beckham",
    },
    {
        qoute: "When people succeed, it is because of hard work. Luck has nothing to do with success.",
        author: "Diego Maradona",
    },
    {
        qoute: "If you do not believe you can do it then you have no chance at all.",
        author: "Arsene Wenger",
    },
    {
        qoute: "Every disadvantage has got its advantage.",
        author: "Johan Cruyff",
    },
    {
        qoute: "Aim for the sky and you’ll hit the ceiling. Aim for the ceiling and you’ll stay on the floor.",
        author: "Bill Shankly",
    },
    {
        qoute: "I’ve never played for a draw in my life.",
        author: "Alex Ferguson",
    },
    {
        qoute: "It’s true I don’t know much about the players here, but they definitely know who I am.",
        author: "Zlatan Ibrahimovic",
    },
    {
        qoute: "Losers complain, winners train.",
        author: "José Mourinho",
    },
    {
        qoute: "I worked on my weaknesses and made them my strengths.",
        author: "Sydney Leroux",
    },
];

const qoute = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

// function

const todaysQuote = qouteList[Math.floor(Math.random() * qouteList.length)];

qoute.innerText = todaysQuote.qoute;
author.innerText = todaysQuote.author;

// Math.random()   // random number in 0 to 1..     0 ~ 10 숫자 필요하면 그만큼 곱해서 사용
// Math.round()    // 반올림
// Math.ceil()     // 올림
// Math.floor()    // 내림
