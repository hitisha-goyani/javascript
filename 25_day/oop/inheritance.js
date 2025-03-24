
console.log("-----------------------------single inheritance------------------------------------------")

class parent {
     name ="tata"

}

class child extends parent{
    show(){
        console.log(this.name)
    }
}

 let car = new child()  

car.show()

console.log("-----------------------------hierarchical inheritance------------------------------------------")

class animal {

    name = "animal"
}

class dog extends animal{

    show(){
        console.log("dog is :" + this.name)
    }
}

class cat extends animal {
    show(){
        console.log("cat is :"+this.name)
    }

}

let ani = new cat()
let ani2 = new dog()

ani.show()
ani2.show()



console.log("-----------------------------multiply level inheritance------------------------------------------")

class grandfather{

    show () {
        console.log("he is grandfather")
        
    }
}

class father extends grandfather{

}

class child1 extends father{

}


let c = new child()
c.show()

// console.log("-----------------------------multiple inheritance------------------------------------------")

// class a {

//     a(){
//         console.log("this is a")
//     }
// }
// class b {

//     b(){
//         console.log("this is b")
//     }
// }

// class c2 extends a , b{

//     c2(){
//         console.log("this is c")
//     }

    

// }

