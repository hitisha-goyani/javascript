



 let api_key = '1709c9e37240d686e3ff7678dde4d81e'
 

 let cityInput = document.querySelector("#city")
 let card = document.querySelector("#weatherCard")
 let list = document.querySelector("#weatherList")


 fetch(`https://pro.openweathermap.org/data/2.5/forecast/?q=paris&appid=1709c9e37240d686e3ff7678dde4d81e`)
 .then((res) => res.json())
 .then((res) => console.log(res))


 cityInput.addEventListener("change",function(e){
    let city = e.target.value
    console.log(city)

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`)
    .then((res) => res.json())
    .then((res) => {
        // console.log(res)
        showWeather(res)
    })


    fetch(`https://pro.openweathermap.org/data/2.5/forecast/?q=${city}&appid=1709c9e37240d686e3ff7678dde4d81e`)
    .then((res) => res.json())
    .then((res) => {console.log(res)
        showWeatherList(res)
    })
    

})

function showWeather(data){
 
    card.innerHTML = `
                    <h4>${data.name}</h4>
                    <p>${data.weather[0].main}</p>
                    <img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png" />
                    <div class="row g-2 p-2"  >
                        <div class="col-6">
                        <div class="d-flex">
                         <div class="shadow p-2 rounded-2" style="background-color:rgb(145, 223, 253)">
                                <i class="ri-temp-hot-line fs-3" ></i>
                    
                                Temp : ${(data.main.temp - 273.15).toFixed(2)} &deg;c
                            </div>
                        </div>
                           
                        </div>
                        <div class="col-6">
                         <div class="d-flex">
                            <div class="shadow p-2 rounded-2 " style="background-color:rgb(78, 136, 216)">
                                <i class="ri-windy-line fs-3"></i>
                                wind : ${data.wind.speed} m/s
                            </div>
                            </div>
                        </div>
                        <div class="col-6">
                         <div class="d-flex">
                            <div class="shadow p-2" rounded-2 style="background-color:rgb(97, 115, 197)">
                                <i class="ri-water-percent-line fs-3"></i>
                                Humidity : ${data.main.humidity} %
                            </div>
                            </div>
                        </div>
                        <div class="col-6">
                           <div class="d-flex">
                            <div class="shadow p-2   rounded-2" style="background-color:rgb(91, 193, 255)">
                                <i class="ri-water-percent-line fs-3"></i> 
                                pressure : ${data.main.pressure} hPa
                        </div>
                         </div>
                    </div>
    `
}


function showWeatherList(ele){
    list.innerHTML = ""
    
    ele.list.map((data)=>{
        list.innerHTML += `
             <div class="row my-2 shadow-md justify-content-center rounded-2">
                          <div class="col-2 border border-white rounded-2 me-2">
                              <p>${data.dt_txt}</p>
                          </div>
                          <div class="col-2 border border-white rounded-2 me-2">
                              <b>${data.weather[0].main}</b>
                              <img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="">
                          </div>
                          
                          <div class="col-2 border border-white rounded-2 me-2">
                              <i class="ri-temp-hot-line"></i>
                              Temp : ${(data.main.temp - 273.15).toFixed(2)} &deg;c
                          </div>
                          <div class="col-2 border border-white rounded-2 me-2">
                              <i class="ri-windy-line"></i>
                                      wind : ${data.wind.speed} m/s
                          </div>
                          <div class="col-2 border border-white rounded-2 me-2">
                              <div class="shadow p-2">
                                  <i class="ri-water-percent-line"></i>
                                  <br/>
                                  Humidity : ${data.main.humidity} %
                              </div>
                          </div>
      
                        </div>
        `
    })



}

