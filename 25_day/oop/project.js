class bank{
    constructor(username, password){
        this.username = username
        this.password = password 
        this.balance = 0
    }


    deposite(username, password, balance){
            if(this.username==username && this.password ==password)
            {
                this.balance += balance
            }
            else{
                console.log("invalide creadinal..1")
            }
    }


    show(username, password){
            if(this.username==username && this.password ==password)
            {
                console.log("balance: ", this.balance)
            }
            else{
                console.log("invalide creadinal..1")
            }
    }

    widraw(username, password, balance){
            if(this.username==username && this.password ==password)
            {

                if(this.balance < balance){
                    console.log("inserficiant balance..1")
                }
                else{
                    this.balance -= balance
                    console.log("widrawal : ", balance)
                    console.log("current bal : ", this.balance)
                }
               
            }
            else{
                console.log("invalide creadinal..1")
            }
    }




}
let User1 = new bank("vani", 123)


User1.deposite("vani", 123, 1500)
User1.deposite("vani", 123, 100)


// User1.show("vani", 123)


User1.widraw("vani", 123, 1500)


let User2 = new bank("haina", 456)

User2.show("haina", 456)
User2.deposite("haina", 456, 10000)
User2.show("haina", 456)