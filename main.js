let searchButton = document.querySelector("button");
let input = document.querySelector("#inp");
let temps = document.querySelector("#temp");
let image = document.querySelector("#images")
let weatherType = document.querySelector("#type");
let city = document.querySelector("#city");
let apiKey = "6f0a990f0d586db612b60637d03140b9";


   async function getWeatherData(){
        let weatherData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${apiKey}&units=metric`);
        console.log(weatherData)

       let jsonWeatherdata =await weatherData.json();

       if(jsonWeatherdata.cod == 400){
        alert("Enter your location")
        image.src="error1.png"
        city.innerHTML="";
        temps.innerHTML="";
        weatherType.innerHTML="";
       }

       if(jsonWeatherdata.cod == 404){
        alert("Enter your write location")
        image.src="error2.png"
        city.innerHTML="search";
        temps.innerHTML="";
        weatherType.innerHTML="";
       }

       city.innerHTML = jsonWeatherdata.name;
       temps.innerHTML = jsonWeatherdata.main.temp;
       weatherType.innerHTML = jsonWeatherdata.weather[0].main;

       console.log(jsonWeatherdata);

       if(weatherType.innerHTML == "Clouds"){
        image.src="clouds.png"
       }else if(weatherType.innerHTML == "Clear"){
        image.src="clears.png"
       }else if(weatherType.innerHTML == "Haze"){
        image.src="haze.png"
       }else if(weatherType.innerHTML == "Rain"){
        image.src="rain.png"
       }else if(weatherType.innerHTML == "Strom"){
        image.src="strom.png"
       }

    }

    function myFun(){
      search=input.value;
      getWeatherData()
    }
    