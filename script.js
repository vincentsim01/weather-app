
let cityinput=document.getElementById('cityinput');
// let cityinputbutton=document.getElementById('cityinputbutton');
let showlocation=document.getElementById('showlocation');
let showtemperature=document.getElementById('showtemperature');
let showweather=document.getElementById('showweather');
let showhumidity=document.getElementById('showhumidity');
let showwindspeed=document.getElementById('showwindspeed');
let resultcontainer=document.getElementById('resultcontainer');
let showprompt=document.getElementById('showprompt');


let showlocation2=document.getElementById('showlocation2');


cityinput.addEventListener('change', getCity);



function getCity(event){

    // showlocation.innerHTML=`This is the Weather In ${event.target.value}`;

    if(event.target.value==""){
        showprompt.classList.remove('nona');
        showprompt.innerHTML="<h1>Please Enter A Value</h1>";
        resultcontainer.classList.add('nona');

    }

    else {
        showprompt.classList.add('nona');
        showprompt.innerHTML=""
        resultcontainer.classList.remove('nona');

    }



    let theURL=`https://api.openweathermap.org/data/2.5/weather?q=${event.target.value}&appid=286ad2f78fee5038e5f4c39b2c60a946`;




        //api calling
        fetch(theURL,{method:'GET'})
        //return promise
        .then((res) =>  res.json())
        //resolve the promise
        .then((data) => {
            console.log(data)
            let cityName = data.name;

            showlocation2.innerHTML=`<h1>The City is ${cityName}</h1>`;
            showtemperature.innerHTML=`The temperature is ${(data.main.temp-273.15).toFixed(2)}C`;
            showhumidity.innerHTML=`The humidity is ${(data.main.humidity)}%`;
            showwindspeed.innerHTML=`The wind speed is ${(data.wind.speed)} km/hr`;



            if(data.weather[0].main=="Rain"){
                showweather.innerHTML=`<img src="https://i.ibb.co/TTzVD2W/rain.png" class="weatherimage"> The weather is ${(data.weather[0].main)}`;
            }else if(data.weather[0].main=="Haze"){
                showweather.innerHTML=`<img src="https://i.ibb.co/jHj79gX/mist.png" class="weatherimage"> The weather is ${(data.weather[0].main)}`;

            }else if(data.weather[0].main=="light rain"){
                showweather.innerHTML=`<img src="https://i.ibb.co/RyM16B2/drizzle.png" class="weatherimage"> The weather is ${(data.weather[0].main)}`;

            }else if(data.weather[0].main=="Clouds"){
                showweather.innerHTML=`<img src="https://i.ibb.co/THX9p7Z/clouds.png" class="weatherimage"> The weather is ${(data.weather[0].main)}`;

            }else if(data.weather[0].main=="Fog"){
                showweather.innerHTML=`<img src="https://i.ibb.co/jHj79gX/mist.png" class="weatherimage"> The weather is ${(data.weather[0].main)}`;

            }else if(data.weather[0].main=="Snow"){
                showweather.innerHTML=`<img src="https://i.ibb.co/0mc6SRj/snow.png" class="weatherimage"> The weather is ${(data.weather[0].main)}`;

            }else{
                showweather.innerHTML=`<img src="https://i.ibb.co/tX6Cbgk/clear.png" class="weatherimage"> The weather is ${(data.weather[0].main)}`;

            }


        })



}

















let x = document.getElementById('out');
let y = document.getElementById('weather');

function geolocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition)
    }else{
        x.innerText = "Geo Not Supported"
    }
}

function showPosition(data){
    console.log(data)
    let lat = data.coords.latitude;
    let lon = data.coords.longitude;
    x.innerText = `Latitude is ${lat} and longitude is ${lon}`
    const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`;
    //api calling
    fetch(url,{method:'GET'})
    //return promise
    .then((res) =>  res.json())
    //resolve the promise
    .then((data) => {
        console.log(data)
        let cityName = data.city.name;
        let temp = data.list[0].temp.day+" °C"
        y.innerText=`Weather of ${cityName} is ${temp}`
    })
}


// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=286ad2f78fee5038e5f4c39b2c60a946

