let obj = new Object()

console.log(obj)

console.log("-------------------------------------------------------------------------------")

class faculty{

    constructor(name , subject){

        this.name = name
        this.subject = subject
    }

        print(){
            console.log("faculty name is : " + this.name + " , subject is : "+this.subject)
        }
}

const newobj =  new faculty("hina" , "hindi teacher")

newobj.print()



console.log("-------------------------------------------------------------------------------")


let faculty2 = {

    name : "neha",
    subject:"english",


    print:function(){
        // console.log("faculty name is : " + this.name + " , subject is : "+this.subject)
        console.log("faculty name is : " + faculty2.name + " , subject is : "+faculty2.subject)

        
    }
}

let fac = faculty2;

fac.name = "mina"

fac.print()