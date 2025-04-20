



let product = document.getElementById("product")

getpro()

function getpro(){
    let url = 'https://dummyjson.com/products/search?q=phone'
    
        fetch(url)
        .then((res)=>res.json())
        .then((res)=>{
            showProduct(res.products)
            
        })
    }

    function showProduct(data){

        product.innerHTML = ""
    
        data.map((d)=>{
            console.log(data)
            product.innerHTML += 
            ` <div class="col-3 g-3">
            <div class="card  shadow ">
                 <img src=${d.images} class="card-img-top w-100" alt="..." />
               <div class="card-body">
                <h5 class="card-title">${d.title}</h5>
                <button  class="btn btn-primary btn-sm"></button>
               </div>
            </div>
            </div>`
            
        })
    
    }