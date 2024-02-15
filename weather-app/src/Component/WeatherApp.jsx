import React from 'react'
// import search_icon from "..Assets/search.png"
import clear_icon from "..Assets/clear.png"
import cloud_icon from "C:\Users\Arije\OneDrive\Desktop\Final Project\weather-app\src\Component\Assets\cloud.png"
import drizzle_icon from "..Assets/drizzle.png"
import humidity_icon from "..Assets/humidity.png"
import rain_icon from "..Assets/rain.png"
import snow_icon from "..Assets/snow.png"

const WeatherApp = () => {

    const api_key = "d56b79742c3acdb5e015be6b1d88d1ac";

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
        wind[0].innerHTML = data.wind.speed+" kmph"
        temperature[0].innerHTML = data.main.temp+" °C";
        location[0].innerHTML = data.name;
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
            <img src={cloud_icon} className='bg-light rounded mt-4' alt=""
            width='120' height='100'/>
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