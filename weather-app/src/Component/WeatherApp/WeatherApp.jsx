import React, { useState } from 'react'
// import search_icon from "..Assets/search.png"
// import clear_icon from "..Assets/clear.png"
// import cloud_icon from '.Images/cloud.png'
// import drizzle_icon from "..Assets/drizzle.png"
// import humidity_icon from "..Assets/humidity.png"
// import rain_icon from "..Assets/rain.png"
// import snow_icon from "..Assets/snow.png"
import Cloud from "../cloudIcon.png"
import Clear from "../clear.png"
import Drizzle from "../drizzle.png"
import Rain from "../rain.png"
import Snow from "../snow.png"

const WeatherApp = () => {

    const api_key = "d56b79742c3acdb5e015be6b1d88d1ac";

    const[wicon, setWicon] = useState(Cloud);

    const search = async () => {
        const element = document.getElementsByClassName("cityInput")
        if(element[0].value === ''){
            return 0;
        }

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;

        let response = await fetch(url);
        let data = await response.json();
        const humidity = document.getElementsByClassName("humidity-percent");
        const wind = document.getElementsByClassName("wind-rate");
        const temperature = document.getElementsByClassName("weather-temp");
        const location = document.getElementsByClassName("weather-location");

        humidity[0].innerHTML = data.main.humidity+" %";
        wind[0].innerHTML = Math.floor(data.wind.speed)+" kmph"
        temperature[0].innerHTML = Math.floor(data.main.temp)+" °C";
        location[0].innerHTML = data.name;

        if(data.weather[0].icon === "01d" || data.weather[0].icon === "01n"){
            setWicon(Clear);
        }
        else if(data.weather[0].icon === "02d" || data.weather[0].icon === "02n"){
            setWicon(Cloud);
        }
        else if(data.weather[0].icon === "03d" || data.weather[0].icon === "03n"){
            setWicon(Drizzle);
        }
        else if(data.weather[0].icon === "04d" || data.weather[0].icon === "04n"){
            setWicon(Drizzle);
        }
        
        else if(data.weather[0].icon === "09d" || data.weather[0].icon === "03n"){
            setWicon(Rain);
        }
        else if(data.weather[0].icon === "10d" || data.weather[0].icon === "10n"){
            setWicon(Rain);
        }
        else if(data.weather[0].icon === "13d" || data.weather[0].icon === "13n"){
            setWicon(Snow);
        }
        else if(data.weather[0].icon === "0d" || data.weather[0].icon === "03n"){
            setWicon(Drizzle);
        }
        else{
            setWicon(Clear);
        }
    }

  return (
    <div className='container'>
        <div className="top-bar d-flex justify-content-center pt-5">
            <input type="text" placeholder='search' className='cityInput' />
            <div className='search-icon ms-3' onClick={()=>{search()}}>
                <i class="fa-solid fa-magnifying-glass fs-2"></i>
            </div>
        </div>
        <div className="weather-image">
            <img src={wicon} className='bg-light rounded mt-4' alt=""/>
        </div>
        <div className="weather-temp text-light d-flex justify-content-center">
            24°C
        </div>
        <div className="weather-location text-light d-flex justify-content-center">London</div>
        <div className="data-container d-flex justify-content-center mt-5">
            <div className="element mt-5">
                <img src="https://i.pinimg.com/564x/6a/59/98/6a5998ab2da1b63c8cf08d217634cc59.jpg" alt="" className='icon' width={50} height={40}/>
                <div className="data">
                    <div className="humidity-percent">64%</div>
                    <div className="text">Humidity</div>
                </div>
            </div>
            <div className="element mt-5">
                {/* <img src="" alt="" className='icon' width={50} height={40}/> */}
                <i class="icon2 fa-solid fa-wind text-light fs-1 mt-3"></i>
                <div className="data">
                    <div className="wind-rate">18 km/h</div>
                    <div className="text">Wind Speed</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WeatherApp