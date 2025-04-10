

let url='https://dummyjson.com/recipes'

let food = document.getElementById("food")

// promises

// function callapi(){

//     fetch(url)
//     .then((res)=>res.json())
//     .then((res) => 
//     {
//         console.log(res)
//     })

//     .catch(()=>{
//         console.log("something went wrong")
//     })
// }

// callapi()

// async await

getData()

async function getData(){

    try{
        let res = await fetch(url)
        let data= await res.json()
        console.log(data)
        showData(data.recipes)
    }
    catch(err){
        console.log(err)
    }
}

function showData(data){

    food.innerHTML = ""

    data.map((d)=>{
        console.log(d)
        food.innerHTML += ` <div class="col-3 g-3">
        <div class="card  shadow ">
             <img src=${d.image} class="card-img-top w-100" alt="..." />
           <div class="card-body">
            <h5 class="card-title">${d.name}</h5>
            <button  class="btn btn-primary btn-sm">${d.rating}</button>
           </div>
        </div>
        </div>`
        
    })

}