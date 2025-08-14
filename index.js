const API_KEY = "65919f7a3b8875c4abe9c485af550bbf";

async function showWeather() {
 try{
    let city = "bargarh";

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
  
    const data = await response.json();
    console.log("Weather data -->" , JSON.stringify(data));
  
    let newPara = document.createElement("p");
    newPara.textContent = `${data?.main?.temp.toFixed(2)}°C`;
    document.body.appendChild(newPara);
    renderWeatherInfo(data);
 }
 catch(err){
    // handle the error here
 }
 
}

async function getCustomWeatherDetails() {
try{
    let lat =15.6333;
    let lon=18.3333;

    let result = await fetch(`https://api.openweathrmap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
    let data = result.json();

    console.log(data);
}

}
