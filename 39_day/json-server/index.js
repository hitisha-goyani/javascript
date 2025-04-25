
let formData = document.getElementById("formData")
const url = "http://localhost:4050/user"



async function postData(user) {

let obj = {
    method : "POST",
    body : JSON.stringify(user),
    headers : {
        "Content-Type" : "application/json"
    }
}
    let resp = await fetch(url, obj)
    // let data = await res.json();
    // console.log(dat)
} 



formData.addEventListener("submit", function(e){
    e.preventDefault()
    
    let obj = {
        name : e.target[0].value,
        age : e.target[1].value,
        pic : e.target[2].value
    }
    
    postData(obj)
})












async function fetchData(){
    let res = await fetch(url)
    let data = await res.json()
    showData(data)
}


function showData(data){

    data.map((ele) => {
        document.getElementById("users").innerHTML += `<div class="col-3">
                <div class="shadow">
                    <div class="card" >
                        <img src=${ele.pic} class="card-img-top rounded-circle" style="height:200px" alt="...">
                        <div class="card-body">
                          <h5 class="card-title">${ele.name}</h5>
                          <p class="card-text">Age: ${ele.age}</p>
                          <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                      </div>
                </div>
            </div>`
    })

}



fetchData()


