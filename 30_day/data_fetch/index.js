
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