class regist{

    constructor(){

        this.username = "hiti123"
        this.pass = "12345"
        this.balance;
    }

    login(username,pass){
        if(this.username == username && this.pass == pass){

        console.log("login successfuly..............")
        }

        else{
            console.log("invalid creadintial....")
        }
    }
}

const user = new regist()

user.login("hiti123","12345")



class array{
    constructor(){
        return[]
    }
}




console.log("*********************************************************************")


let obj = new Object()

let arr = new Array()

console.log(arr)