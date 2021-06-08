console.log("sdfhds");


// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}


// 91dae7681d02d377bf82a50ecca42054


const weatherApi = {
    key:"91dae7681d02d377bf82a50ecca42054",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather"
}

let searchInputBox=document.getElementById('input-box');
// console.log(searchInputBox);



//Event listner function on key press
searchInputBox.addEventListener('keypress',(event)=>{

    if(event.keyCode ==13){
    console.log(searchInputBox.value);
    getWheatherReport(searchInputBox.value);

    document.querySelector('.weather-body').style.display="block";
    }
})

// Get weather report

// function getWheatherReport (city)
// {
//     fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}`);

// }


function getWheatherReport(city)
{
    // url="https://api.github.com/users";
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`).then((weather)=>{
        return weather.json();
    }).then(showReport);
}
// getWheatherReport('London');


function showReport(weather){
    // console.log(weather);
// console.log("this");
// console.log(weather.name);
    // console.log(weather.main.temp);
    // console.log(weather.main.temp_max);
    // console.log(weather.main.temp_min);


    let cityname=`${weather.name}, ${weather.sys.country}`;
 document.getElementById("cityname").innerHTML=cityname;


let temp=`${Math.round(weather.main.temp)}&deg;C`;
document.getElementById("temp").innerHTML=temp;


let max_min=`${Math.ceil(weather.main.temp_max)}&deg;C (max) /${Math.floor(weather.main.temp_min)}&deg;C (min)`;
document.getElementById("max_min").innerHTML=max_min;


let weatherType=`${weather.weather[0].main}`;
 document.getElementById("weather").innerHTML=weatherType;

// let weatherType=document.getElementById("weather");
// weatherType.innerHTML=`${weather.weather[0].main}`;

// console.log("rahu");
// console.log(weather.weather[0].main);



let date=document.getElementById("date");
let todayDate = new Date();
date.innerText=dateManage(todayDate);


function dateManage(dateArg)
{
    let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let months=["January","Feburaury","March","April","May","June","July","September","October","November","Decembeer"];
    let year=dateArg.getFullYear();
    let month=months[dateArg.getMonth()];
    let date=dateArg.getDate();
    let day=days[dateArg.getDay()];

   
    return `${date} ${month} (${day}) , ${year} `;

}

if(weatherType=='Clouds')
{
   
    document.body.style.backgroundImage="url('cloud.jpg')";
}
else if(weatherType=='Clear')
{
   
    document.body.style.backgroundImage="url('clear.jpg')";
}
else if(weatherType=='Haze')
{
    // console.log('r1');
    document.body.style.backgroundImage="url('haze1.jpg')";
}
else if(weatherType=='Rain')
{
    // console.log('r1');
    document.body.style.backgroundImage="url('rain.jpg')";
}
// else if(weatherType.textContent=='Clouds')
// {
//     console.log('r2');
//     document.body.style.backgroundImage="url('cloud.jpg')";
// }
// else if(weatherType.textContent=='Haze')
// {
//     console.log('r3');
//     document.body.style.backgroundImage="url('haze.jpg')";
// }

// date.innerHTML='$'

}



//show weather report
//Date manage