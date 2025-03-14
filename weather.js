fetch ("https://api.openweathermap.org/data/2.5/weather?q=Calgary&appid=680e6dafdb601f4e3e86f25a9acee8a9&units=metric")

.then(response => response.json())
.then(data =>{
    console.log(data);
    console.log(data.main.temp);
    temperature.textContent = "Temperature: "+data.main.temp+"\u00b0C";

    description.textContent = data.weather[0].description;

    humidity.textContent = "Humidity: "+data.main.humidity;

    tempmin.textContent = "Min Temp: "+data.main.temp_min+"\u00b0C";

    tempmax.textContent = "Max Temp: "+data.main.temp_max+"\u00b0C";

    feels.textContent = "Feels Like: "+data.main.feels_like+"\u00b0C";

    //Insert the icon
    icon.src = "https://openweathermap.org/img/wn/"+data.weather[0].icon+"@2x.png";
})