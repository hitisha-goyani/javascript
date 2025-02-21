//  let stud1 = () =>{

//     return("i am student1 ")

// }

// console.log(stud1());

// let stud2 = () =>{

//     console.log("i am student2 ")

// }

// stud2();

// // implicit 

// let stud3 = () => "i am student3"

// console.log(stud3())


// //explicit

// let emp = () =>{

//     console.log("i am employeee")
// }
// console.log(emp())


// object in function

function m(name1){
    return  `this is ${name1} wannta to meet`;

}

let employee = {

    name: "mina patel",
    age : 30,
    email : "mina@gmail.com",
    data : m(this.name)
    }
    
console.log(employee.data)


// let product ={
//     name:"oppo ",
//     price:34000,
//     rating:4.2,
//     emi : () => `<h1>phone:${this.name}</h4>`
// }
// console.log(product.emi())


// //array function

// console.log(this)

 let arr = [1,2,3,4,5];

//  const print = (ele) =>{
//     console.log(ele)
//  }

//  arr.forEach(print)

 arr.forEach((ele)=>console.log(ele*ele))

