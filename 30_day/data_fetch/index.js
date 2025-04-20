<<<<<<< HEAD
fetch('https://fakestoreapi.com/products/1')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
    


=======

// let url = 'https://fakestoreapi.com/products'
 let url = 'https://randomuser.me/api?results=1000'


fetch(url)
.then((res)=> res.json())
.then((data) =>{
    console.log(data.results)
    showData(data.results)
})




function showData(data){
    document.querySelector(".box").innerHTML = ""

    data.map((ele) => {
        document.querySelector(".box").innerHTML += `<img src=${ele.picture.large} />`
    })
}
>>>>>>> ba34d75292bc469059b57e7e11c95b38bd585d61
