const input_box = document.querySelector(".input-box");
const searchBtn = document.querySelector("#searchBtn");
const weather_img = document.querySelector("#weather-img");
const temperature = document.querySelector(".temperature");
const description = document.querySelector(".description");
const humidity = document.querySelector("#humidity");
const wind_speed = document.querySelector("#wind-speed");
const location_not_found =document.querySelector(".location-not-found");
const weather_body=document.querySelector(".weather-body");

async function checkWeather(location){
 let api_key = "77c687de2fcd189d1b8edf8d6747b853";
 let url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api_key}`;

 const weather_data = await fetch(`${url}`).then(response => response.json());
 console.log(weather_data);



if(weather_data.cod == "404"){

   location_not_found.style.display = "flex";
   weather_body.style.display = "none";
   return;
}
location_not_found.style.display = "none";
weather_body.style.display = "flex";

 temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;

 description.innerHTML = `${weather_data.weather[0].description}`;

 humidity.innerHTML = `${weather_data.main.humidity}%`;

 wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;

switch(weather_data.weather[0].main){
    case 'Clouds':
     weather_img.src = "images/cloud.png"; 
     break;  
    case 'Clear':
     weather_img.src = "images/clear.png"; 
    break;  
    case 'Rain':
     weather_img.src = "images/rain.png"; 
    break;  
    case 'Mist':
     weather_img.src = "images/mist.png"; 
     break; 
    case 'Snow':
    weather_img.src = "images/snow.png"; 
    break;   
               
}



}






searchBtn.addEventListener('click',()=>{
    checkWeather(input_box.value);
})