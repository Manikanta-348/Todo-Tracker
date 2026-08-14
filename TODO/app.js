
let taskbtn = document.querySelector("#taskbtn");

let total = document.querySelector("#total-count");
let completed = document.querySelector("#complete-count");

let count = Number(total.innerText);
let completecount = Number(completed.innerText);

function updateRemaining() {
    let remain=document.querySelector('#remaining-count')
    let remaincount=Number(remain.innerText)
    remain.innerText = count - completecount;
}
function creatingtask(value) {

    let inp = document.querySelector("#task");
    let tasklist = document.querySelector('.tasklist')
    inp.value = "";
    let div = document.createElement("div");
    let check = document.createElement("input");
    let task = document.createElement("span");
    let actions = document.createElement("div");
    let editbtn = document.createElement("button");
    let deletebtn = document.createElement("button");

    check.type = "checkbox";
    check.className = "check";
    div.className = "task";
    task.className = "addingtask";
    actions.className = "actions";
    editbtn.className = "edit";
    deletebtn.className = "delete";

    
    task.innerText = value;
    editbtn.innerText = "Edit";
    deletebtn.innerText = "Delete";

    
    actions.append(editbtn, deletebtn);
    div.append(check, task, actions);
    tasklist.append(div);


    deletebtn.addEventListener("click", function () {

        div.remove();

        if (count > 0) {
            count--;
            total.innerText = count;
            updateRemaining();

            if (check.checked && completecount > 0) {
                completecount--;
                completed.innerText = completecount;
                updateRemaining();
    }
        }
    });

    editbtn.addEventListener("click", function () {

        let newname = prompt("Enter task");

        if (newname == "") {
            return;
        }

        task.innerText = newname;
    });

    check.addEventListener("change", function () {

        if (check.checked) {
            completecount++;
            updateRemaining();
        } else {
            if (completecount == 0) return;
            completecount--;
            updateRemaining();
        }

        completed.innerText = completecount;
        updateRemaining();
    });

    count++;
    total.innerText = count;
    updateRemaining();
}

taskbtn.addEventListener("click", function (e) {

    e.preventDefault();

    let inp = document.querySelector("#task");

    if (inp.value == "") {
        return;
    }

    creatingtask(inp.value);
});

let clearcompleted = document.querySelector('#clearcompleted')
clearcompleted.addEventListener('click',function(e){
    e.stopPropagation()
    let tasks = document.querySelectorAll('.task')
    
    for(let task of tasks){
        let checkbox = task.querySelector('.check')
        if(checkbox.checked == true){
            task.remove()
              count--;
    completecount--;
        }
        total.innerText = count;
completed.innerText = completecount;
updateRemaining();

    }
})
let clearall = document.querySelector('#clearall')
clearall.addEventListener('click',function(e){
    e.stopPropagation()
    let taskslist=document.querySelectorAll('.task')
    for(let task of taskslist){
      task.remove()
    }
    count = 0;
completecount = 0;

total.innerText = count;
completed.innerText = completecount;
updateRemaining();
})

