// let promiseOne = new Promise(function(resovle,reject){

//     setTimeout(()=>{
//         console.log("this is promise problem")
//         let obj = {username:"hitisha",pass:"1234"}
//         resovle(obj)

//     },1000)

// })

// let firsthen = promiseOne.then(function(user){
//     return user.username
// })

// firsthen.then(function(user){
//     console.log(user)
// })


// let promiseOne = new Promise(function(resovle,reject){

//         setTimeout(()=>{
//             console.log("this is promise problem")
//             let obj = {username:"hitisha",pass:"1234"}
//             let error = true;
//             if(error){
//                 reject()
//             }
//             else{
//                  resovle(obj)  
//             }
         
    
//         },1000)
    
//     })
//     .then(function(user){
//         return user.username
//     })
    
//     .then(function(user){
//         console.log(user)
//     })
//     .catch(function(){
//         console.log("something went wrong...")
//     })


//data resolved 

fetch('https://fakestoreapi.com/products')
.then(function(response){
  return response.json()
})
.then(function(res){
    return res[1]
})
.then(function(data){
    return data.title
})
.then(function(t){
    console.log(t)
})


// // showing data

// fetch('https://fakestoreapi.com/products')
// .then((response) => response.json())
// .then((res)=> showData(res))
// .catch(() =>{
//     console.log("something went wrong in api..!")
//      document.querySelector("body").innerHTML = `<img width="400px" src="https://i.pinimg.com/originals/e4/30/10/e430101033efff9a294eaafecbac846a.gif" /> <h3>something went wrong in api..!</h3>`
// })
// .finally



// function showData(data){
//     document.querySelector("body").innerHTML = ""
    
//     data.map((ele)=>{
        
//         document.querySelector("body").innerHTML += `<img width="50px" src=${ele.image} /> <h3>${ele.title}</h3>`
//     })

// }


// data, error, and loading

let loading = true;

fetch('https://randomuser.me/api?results=500')
.then((response) => response.json())
.then((res)=> showData(res))
.catch(() =>{
    console.log("something went wrong in api..!")
     document.querySelector("body").innerHTML = `<img width="400px" src="https://i.pinimg.com/originals/e4/30/10/e430101033efff9a294eaafecbac846a.gif" /> <h3>something went wrong in api..!</h3>`
})
.finally(() => {
    loading = false
})
     

if(loading)
{
     document.querySelector("body").innerHTML = `<img width="400px" src="https://i.pinimg.com/originals/8a/c1/29/8ac12962c05648c55ca85771f4a69b2d.gif" /> 
   <h3>loading..!</h3>`  
}



function showData(data){
    document.querySelector("body").innerHTML = ""
    
    data.results.map((ele)=>{
        
        // document.querySelector("body").innerHTML += `<img width="50px" src=${ele.image} /> <h3>${ele.title}</h3>`
        document.querySelector("body").innerHTML += `<h3>${ele.name.first}</h3>
        <img src=${ele.picture.large}></img>`
    })

}
