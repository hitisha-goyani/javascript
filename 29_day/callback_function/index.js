
// CALLBACK FUNCTION

// EVENT LOOP

// SYNCHRONOUSE single thread

// ASYNCHRONOUSE multiple thread 



// function first(){
//     console.log("first function")
// }

// setTimeout(first, 2000)


// function second(){
//     console.log("second Function")
// }
// second()


let data;

function api(sd){
    console.log("api is runing")
    data = {name: "red & white"}
    
    sd(data)
}

console.log("api is runing.....")
setTimeout(function(){
    api(showData)
}, 10000)



function showData(){
    console.log(data.name)
}
   



function first(sec){

    sec()
}

function second(){

}

first(second)