function card(img, title, price,city){
    return `
        <div class="card">
        <img style="height:200px" src=${img} class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${title}</h5>
          ${price ? `<h4>${price}</h4>` : '' }  
           <h5 class="card-title">${city}</h5>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
        </div>
    `
}

export default card