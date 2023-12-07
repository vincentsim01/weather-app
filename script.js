
let cityinput=document.getElementById('cityinput');
let cityinputbutton=document.getElementById('cityinputbutton');
let showlocation=document.getElementById('showlocation');
let showtemperature=document.getElementById('showtemperature');
let showweather=document.getElementById('showweather');
let showhumidity=document.getElementById('showhumidity');
let showwindspeed=document.getElementById('showwindspeed');


let showlocation2=document.getElementById('showlocation2');


cityinput.addEventListener('change', getCity);



function getCity(event){

    showlocation.innerHTML=`This is the Weather In ${event.target.value}`;

    let theURL=`https://api.openweathermap.org/data/2.5/weather?q=${event.target.value}&appid=286ad2f78fee5038e5f4c39b2c60a946`;


        //api calling
        fetch(theURL,{method:'GET'})
        //return promise
        .then((res) =>  res.json())
        //resolve the promise
        .then((data) => {
            console.log(data)
            let cityName = data.name;

            showlocation2.innerHTML=`The City from API is ${cityName}`;
            showtemperature.innerHTML=`The temperature from API is ${(data.main.temp-273.15).toFixed(2)}C`;
            showweather.innerHTML=`The weather from API is ${(data.weather[0].main)}`;
            showhumidity.innerHTML=`The humidity from API is ${(data.main.humidity)}%`;
            showwindspeed.innerHTML=`The wind speed from API is ${(data.wind.speed)} km/hr`;


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

