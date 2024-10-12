/* 
    웹에 날씨 띄우기
    https://openweathermap.org/api
*/

const API_KEY = "417c994566214fe30ac11fb1a2ee8516";

function onGeoOk(position){
    const latitude = position.coords.latitude;      // 형태 : 37.5390208
    const longitude = position.coords.longitude;    // 형태 : 127.074304        // API 활용하여 내 위치 장소로 보여줄 것
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`    // &units=metric : 화씨 -> 섭씨
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}c /`;
    }); // fetch : Javascript에서 API 불러오기
}

function onGeoError(){
    alert("Can't find you. No weather for you..");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);