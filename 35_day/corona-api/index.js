
let url = 'https://api.rootnet.in/covid19-in/stats/latest'

let card = document.querySelector("#coronaCard")  


fetch(url)
.then((res) => res.json())
 .then((res) => {
    console.log(res)
    showStates(res)
})

 function showStates(resp){ 
    resp.data.regional.map((st) =>{
        document.querySelector(".states").innerHTML += `<option value="${st.loc}" >${st.loc}</option>`
    })

  
                  
    document.querySelector(".states").onchange=function(e){
        let data = resp.data.regional.filter((st) => st.loc == e.target.value)  

        console.log(data)
        
        card.innerHTML =`
        <div class="row g-2 p-2 bg-white" >
            <h4>${data[0].loc}</h4>
                        <div class="col-6">
                         <div class="shadow p-2 rounded-2" >   
                            <p>Foreigncase:${data[0].confirmedCasesForeign}</p>
                            </div>
                        </div>
                           
                        
                          <div class="col-6">
                         <div class="shadow p-2 rounded-2" > 
                            <p>Indiancase:${data[0].confirmedCasesIndian  }</p>
                            </div>
                        </div>

                           <div class="col-6">
                         <div class="shadow p-2 rounded-2" > 
                            <p>Deaths:${data[0].deaths  }</p>
                            </div>
                        </div>
                           
                        </div>
        `
    }
 }








// fetch(url)
// .then((res)=>res.json())
// .then((res)=> {
//     // console.log(res)
//     showdata(res)
// })




// function showdata(d){
 
//     card.innerHTML = `
//                     <h4>${d.regional[0].loc}</h4>
//                     <p>${d.regional[0].confirmedCasesForeign}</p>
//                     <img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png" />
//                     <div class="row g-2 p-2" style="background-color:rgb(124, 175, 238)" >
//                         <div class="col-6">
//                         <div class="d-flex">
//                          <div class="shadow p-2 rounded-2" style="background-color:rgb(145, 223, 253)">
//                                 <i class="ri-temp-hot-line fs-3" ></i>
                    
//                                 Temp : ${(data.main.temp - 273.15).toFixed(2)} &deg;c
//                             </div>
//                         </div>
                           
//                         </div>
//                         <div class="col-6">
//                          <div class="d-flex">
//                             <div class="shadow p-2 rounded-2" style="background-color:rgb(78, 136, 216)">
//                                 <i class="ri-windy-line fs-3"></i>
//                                 wind : ${data.wind.speed} m/s
//                             </div>
//                             </div>
//                         </div>
//                         <div class="col-6">
//                          <div class="d-flex">
//                             <div class="shadow p-2" rounded-2 style="background-color:rgb(97, 115, 197)">
//                                 <i class="ri-water-percent-line fs-3"></i>
//                                 Humidity : ${data.main.humidity} %
//                             </div>
//                             </div>
//                         </div>
//                         <div class="col-6">
//                            <div class="d-flex">
//                             <div class="shadow p-2   rounded-2" style="background-color:rgb(91, 193, 255)">
//                                 <i class="ri-water-percent-line fs-3"></i> 
//                                 pressure : ${data.main.pressure} hPa
//                         </div>
//                          </div>
//                     </div>
//     `
// }


