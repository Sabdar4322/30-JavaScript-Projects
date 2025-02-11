let inputTask = document.getElementById("inputTask");
let addTaskBtn = document.getElementById("addTask");
let taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", function() {
    let taskText = inputTask.value.trim();

    if(taskText !== "") {
        let li = document.createElement("li");
        li.innerText = taskText;

        let deleteBtn = document.createElement("button");
        deleteBtn.innerText = "delete";
        deleteBtn.style.marginLeft = "10px";

        deleteBtn.addEventListener("click", function() {
            li.remove();
        });

        li.appendChild(deleteBtn);

        taskList.appendChild(li);

        inputTask.value = "";
    } else {
        alert("Please enter a task");
    }
});