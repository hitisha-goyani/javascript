let arrow = document.getElementById("arrow")
 
 
 let end = 0
 
 
     let ang = 6
    let t = setInterval(function(){
     arrow.style.rotate = `${ang}deg`
     ang+=6
 }, 1000)
 

 function clearing(){
    clearInterval(t)
    }

 let val = e.target.value
 setTimeout(function(){
     clearInterval(t);
    let shake=  document.getElementById("clock")
    shake.className = "shaking clock border border-2 border-dark rounded-circle d-flex justify-center align-items-center"
 }, val)