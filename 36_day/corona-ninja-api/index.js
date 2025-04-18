

// let withKeyUrl = "https://api.api-ninjas.com/v1/covid19?country=canada&X-Api-Key=V3ClVAbqmuVZajSSSyaKpg==xsNmkZI0wP1BcTmZ"


// let url=`https://api.api-ninjas.com/v1/covid19?country=canada`

// let keyHeader =  {
//     headers : {
//       "X-Api-Key" :"V3ClVAbqmuVZajSSSyaKpg==xsNmkZI0wP1BcTmZ"
//     }
//   }

//     fetch(url, keyHeader)
//     .then((res)=>res.json())
//     .then((res)=>console.log(res))


let search = document.getElementById("search")
let corona = document.getElementById("corona")  
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             

search.addEventListener("change",function(e){
    let search = e.target.value
    console.log(search)
    
    fetch(`https://api.api-ninjas.com/v1/covid19?country=${search}&X-Api-Key=V3ClVAbqmuVZajSSSyaKpg==xsNmkZI0wP1BcTmZ`)
    .then((res)=>res.json())
    .then((res)=>{
        showdata(res)
        
    })
})


    
    
    // let url = `https://api.api-ninjas.com/v1/covid19?country=${search}&X-Api-Key=V3ClVAbqmuVZajSSSyaKpg==xsNmkZI0wP1BcTmZ`


let arr ;

function showdata(data){

    corona.innerHTML ="";
     console.log(data)
        data?.map((mov)=> {
          console.log(mov)
            corona.innerHTML += `
            <div class="col-3">
            <div class="card  shadow ">
                 <p>${mov.country}</p> 
               <div class="card-body">
                <h5 class="card-title">${mov.region}</h5>
                <div style="overflow:auto; height:500px">
                ${
             arr = Object.keys(mov.cases).map((el) => `
              <div class="shadow bg-ligh p-2 rounded-2">
                    <p class="badge text-bg-success">${el}</p>
                    <p><b>New: </b> ${mov.cases[el].new}</p>
                    <p><b>Total: </b> ${mov.cases[el].total}</p>
              </div>
              `).join("")
                }
                </div>
               </div>
            </div>
            </div>
        `
     arr = Object.keys(mov.cases)
     console.log(mov.cases[arr[0]])
    //  console.log(arr.splice(1, 100))
})


    
    }