// ------------------default parameters------------------------

function fun(n=1){
    return n*n
}

console.log(fun(10))
console.log(fun())


console.log("---------------------------------------------------------")

function call(name="xyz",message="hello",money=0){

    console.log(message  + " ," + name + " ," +money+ "$")

}

call("hiti","welcome",100)
call("vibhuti","hey",30)
call()
console.log("---------------------------------------------------------")


// --------------splice-array cut-------------

let arr = [1,2,3,4,5]
arr.splice(1,3)

console.log(arr)

console.log("---------------------------------------------------------")

// -----------------splice-replace element-------------------


let arr1 = ["mango","apple","banana","lemon"]

// arr1[0] = "orange"

arr1.splice(0 , 2,"x","y")

// arr1.splice(-2 , 2)

console.log(arr1)

// console.log(arr1.splice(-2,2))

console.log("--------------------slice-------------------------------------")



//------------slice - arr copy------------------

let arr4 = [ 1, 2, 3, 4]

console.log(arr4.slice(1,3))

console.log("------------------------flat---------------------------------")

//------------------flat------------------------

let arr2 = [[1, 2], [3, 4], [5, 6], [7, 8], 9] 
let newarr = arr2.flat()
console.log(newarr)

console.log("---------------------------------------------------------")

let arr3 = [[1, 2], [3, 4], [5, 6], [7, 8], 9]   /// let arr = [[1, 2, 3], [4, 5, 6],[7, 8, 9]]


let newArr = arr3.flat()

let chunk = []

for(let i=0; i<newArr.length; i=i+3) 
{
    let sub = []
   for(let j=i; j<i+3; j++) 
   {
     sub.push(newArr[j])
    }
    chunk.push(sub)
}

console.log(chunk)

console.log("--------------------splice-divide-array-------------------------------------")

// splice - arr

let arr5 = [[1, 2], [3, 4], [5, 6], [7, 8], 9]   /// let arr5 = [[1, 2, 3], [4, 5, 6],[7, 8, 9]]


let newa = arr5.flat()

let c = []

for(let i=0;i<newa.length;i){

    c.push(newa.splice(0,3))
}

console.log(c)

// -----------------spread operator-----------------

console.log("--------------------spread operator-------------------------------------")

let arr6 = [ 1, 2, 3]
let arr7 = [ 4, 5, 6]
let arr8 = [ 7, 8, 9 ]

// let big = arr6.concat(arr7,arr8)

let big =[...arr6,...arr7,...arr8]


console.log(big)

console.log("--------------------rest operator-------------------------------------")

function rest(...name1){

    console.log(name1)

    let [...re] = name1;

    console.log(...re)

}

// let arr9 = []
rest("hitisha","vibhut","aara","vaishali")


console.log("--------------------object use for in for of -------------------------------------")
//for in - using in object
//for of - using in array 

let obj = {
    name: "hitisha",
    age : 22, 
    marks : 80,
    city : "PUne",
    country : "India",
    pin : 1234,
    nums : [1, 2, 3, 4]
}

for(let key in obj)
    {
        console.log( key + " : " +obj[key])
    }
    
    let name3 = "lorem2"
    for(let val of name3)
    {
        console.log(val)
    }
