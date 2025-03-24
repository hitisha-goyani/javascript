let obj = {

    name :"poonam",
    post:"manager",
    age:30
}

console.log(obj)


console.log("*********************************************************************")

let obj2 = new Object("bharat","director",20)

console.log(obj2.name,obj2.post,obj2.age)


console.log("*********************************************************************")

class staff{

    constructor(name,post,age)
    {
        this.name=name
        this.post=post
        this.age=age
    }
}

let st = new staff("jency","faculty",45)

console.log(st)

let st1 = new staff("kavite","designe",32)

console.log(st1)


console.log("*********************************************************************")
let big = {

    data:11
}

let small = big;

small.data=3;

console.log(small)


console.log("*********************************************************************")

class includ{
    constructor(str){
     return  this.str = str;
    }

    includes(char){
        for(let i=0; i<this.str.length; i++){
            if(this.str[i] == char)
            {
                return true;
            }
          
        }
        return false
    }


    charAt(index){
            return this.str[index]
    }

}

let inc = new includ("hitisha")


console.log(inc.includes("z"))


console.log(inc.charAt(2))
