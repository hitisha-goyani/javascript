let main = document.getElementById("main")
let btn = document.getElementById("btn")

btn.addEventListener("click",show)

let count = 0;

function show(){

    count++; 

    let div = document.createElement("div");
    let h3 =  document.createElement("h3");
    let button = document.createElement("button");
    let p  = document.createElement("p");
    let b = document.createElement("b")
    let p1 = document.createElement("p");

    let img = document.createElement("img")


    div.setAttribute("class","box")
    b.setAttribute("class","count")
    button.setAttribute("class","btn1")

    p.textContent="Cranes are large birds with long legs and necks."
    h3.textContent=" Cranes"
    h3.style.textAlign="center"
    button.textContent="more"
    
    b.textContent=count
    img.src="1.jpg"
    img.style.width="100%"
   


    button.addEventListener("click",function(){

        // alert("this is count "+ b.textContent)
     

       p1.textContent="Chipmunks are known for storing food in their cheek pouches and hibernating during the winter"
       p1.style.color=" #51642D"
    })

    div.append(b,h3,img,p,button,p1)

    main.append(div)
}

