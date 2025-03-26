let timer = setInterval(show,1000)

let i=0;

function show(){
    document.getElementById("time").innerHTML = `⏰ ${i}`
    i++
}

let dontStop = setTimeout(function(){
        clearInterval(timer)
        // alert("timer Ended")
    }, 5000)
    
    
    function clearing(){
        clearTimeout(dontStop)
        console.log("cleared")
    }