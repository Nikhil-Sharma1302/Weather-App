
let btn=document.querySelector(".giveapi");
let city=document.querySelector(".city");
let temp=document.querySelector(".temp");
let nam=document.querySelector(".cityName");
let humi=document.querySelector(".humi");
let feel=document.querySelector(".feel");
let pre=document.querySelector(".pres");
let zone=document.querySelector(".zone");
let lat=document.querySelector(".lat");
let lon=document.querySelector(".lon");
let spe=document.querySelector(".spe");
let gus=document.querySelector(".gus");
btn.addEventListener("click",async()=>{
      city.innerText=nam.value.toUpperCase();
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${nam.value}&appid=8f3b30cda069cdedffaf70c8b0c453a9`;
      let   api= await fetch(url);
      let response= await api.json();
      console.log(response);
      temp.innerText=`${(response.main.temp-273.15).toFixed(2)} °C`;
      humi.innerText = response.main.humidity;
      feel.innerText = `${(response.main.feels_like-273.15).toFixed(2)} °C `;
      pre.innerText= response.main.pressure;
      zone.innerText= response.timezone;
      lon.innerText= response.coord.lon;
      lat.innerText= response.coord.lat;
      spe.innerText= response.wind.speed;
      gus.innerText= response.wind.gust ;
});
