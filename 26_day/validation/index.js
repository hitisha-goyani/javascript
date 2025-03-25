
 
 
 let user1 = document.getElementById("username")
 let pass1 = document.getElementById("password")
 
 user1.addEventListener("keyup", function(e){
 let val = e.target.value
     if(!val.includes("@")){
         let span = document.getElementById("span")
         span.style.display = "block"
     }
     else{
         let span = document.getElementById("span")
        span.style.display = "none"
     }
     if(val.length < 10)
     {
         let span1 = document.getElementById("span1")
         span1.style.display = "block"   
     }
     else{
         let span1 = document.getElementById("span1")
         span1.style.display = "none"   
     }
     console.log(e.target.value)
 
     if(cap(val)){
         console.log("must me locawercase")
     }
     else{
         console.log("")
     }
 })
 
 
 
 
 
 pass1.addEventListener("change", function(e){
     let val = e.target.value;
     if(sp(val)){
          let span2 = document.getElementById("span2")
         span2.style.display = "none"
     }
     else{
         let span2 = document.getElementById("span2")
         span2.style.display = "block"
     }
 
 
 })
 
 
 
 
 
 
 
 
 
 
 function login(){
    let user= document.getElementById("username").value
    let pass= document.getElementById("password").value
 
    if(user.length < 200)
    {
     if(pass.length > 8)
     {
           let obj ={
             username : document.getElementById("username").value,
             password : document.getElementById("password").value
         }
 
         console.log(obj)
    }
     }
   
   
 }
 
 
 
 
 function cap(str){
    for(let s in str){
           if(str[s] === str[s].toLocaleUpperCase())
           {
             return true
           }
     }
     return false;
 }
 
 console.log(cap(str))


 function sp(str){
          if(str[s] == "@","#","^") 
          {
            return true
          }
    }

    return false
