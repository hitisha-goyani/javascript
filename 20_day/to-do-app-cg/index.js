let task = document.getElementById("task");
let add = document.getElementById("add");
let tbody = document.getElementById("tbody");

add.addEventListener("click", addTask);

let task_arr = [];


function  addTask(){

    let obj = {

        id: Math.round(Math.random()*1000),
        text : task.value,
        status : false

    }
    if(task.name==""){
       
        task_arr.push(obj)

    }
    else{
        task_arr = task_arr.map((ele)=>{

            if(ele.id == task.name)
                {
                    ele.text = task.value;
            }
            return ele;
        })
    }

   

    showTask(task_arr)
    task.name=""

}

//change status started//
function changeStatus(id) {
    task_arr = task_arr.map((ele) => {
        if (ele.id == id) {
            ele.status = !ele.status;
        }
        return ele;
    });

    showTask(task_arr);
}
//change status ended//




//task delete started//


function taskdelete(e){

    task_arr = task_arr.filter((ele)=>ele.id !=e)

    showTask(task_arr)
}

//task delete ended//




//task edit started//
function taskedit(e){

    console.log(e);
    task.value = e.text;
    task.name = e.id
}
//task edit ended//





function showTask(array) {
    tbody.innerHTML = ""; 
    
    array.map((ele) => {
        let tr = document.createElement("tr");
        let td_text = document.createElement("td");
        let td_status = document.createElement("td");
        let td_edit = document.createElement("td");
        let td_delete = document.createElement("td");
        let btn_edit = document.createElement("button");
        let btn_delete = document.createElement("button");
        let checkbox = document.createElement("input");

        td_text.textContent = ele.text;

        // Create the checkbox and add it to the status cell
        checkbox.type = "checkbox";
        checkbox.checked = ele.status;  // Reflect task status (checked if completed)
        checkbox.classList.add("form-check-input");
        checkbox.onclick = () => changeStatus(ele.id);  // Change status on click

        td_status.append(checkbox);

        btn_edit.innerHTML = `<i class="ri-edit-2-fill"></i>`;
        btn_edit.setAttribute("class", "btn btn-primary btn-sm");
        btn_delete.innerHTML = `<i class="ri-delete-bin-5-line"></i>`;
        btn_delete.setAttribute("class", "btn btn-danger btn-sm");

        btn_edit.onclick = () => taskedit(ele);
        btn_delete.onclick = () => taskdelete(ele.id);

        td_edit.append(btn_edit);
        td_delete.append(btn_delete);

        tr.append(td_text, td_status, td_edit, td_delete);

       
        if (ele.status) {
            tr.setAttribute("class", "table-success");
        } else {
            tr.setAttribute("class", "table-warning");
        }

        tbody.append(tr);
        
    task.value = "";
    });
}

