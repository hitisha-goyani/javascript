let task = document.getElementById("task")
let add = document.getElementById("add")
let tbody = document.getElementById("tbody")


add.addEventListener("click",addTask)


let task_arr = [];


function  addTask(){

    let obj = {
    
        text : task.value,
        status : false

    }

    task_arr.push(obj)

    showTask(task_arr)
}

function changeStatus(e){ 
    
    let new_task_arr = task_arr.map((ele) =>{
        if(ele.text==e){
           ele.status = !ele.status
        }
        return ele
    })

    showTask(new_task_arr)

}


function showTask(array){

    tbody.innerHTML = ""
    array.map((ele)=>{

        let tr = document.createElement("tr");
        let td_text = document.createElement("td"); 
        let td_status = document.createElement("td"); 
        let td_edit = document.createElement("td"); 
        let td_delete = document.createElement("td");
        let btn_edit = document.createElement("button"); 
        let btn_delete = document.createElement("button"); 
        
        td_text.textContent = ele.text;

        td_status.textContent = ele.status ? "✔️ completed" :"✖️ not completed";

        td_status.onclick = () => changeStatus(ele.text)

        btn_edit.innerHTML=  `<i class="ri-edit-2-fill"></i>`
        btn_delete.innerHTML=  `<i class="ri-delete-bin-5-line"></i>`

        td_edit.append(btn_edit)

        td_delete.append(btn_delete)


         tr.append(td_text, td_status, td_edit, td_delete)

         if(ele.status)
         {
             tr.setAttribute("class", 'table-success')
         }
         else{
            tr.setAttribute("class", 'table-warning')
         }
         
    tbody.append(tr)  

    })
}