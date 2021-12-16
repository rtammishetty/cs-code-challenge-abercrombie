(function () {
    const taskInput = document.getElementById("new-task");
    const addButton = document.getElementsByTagName("button")[0];
    const incompleteTasksHolder = document.getElementById("incomplete-tasks");
    const completedTasksHolder = document.getElementById("completed-tasks");

    const createNewTaskElement = function (taskString, arr) {
        listItem = document.createElement("li");
        checkBox = document.createElement("input");
        label = document.createElement("label");
        editInput = document.createElement("input");
        editButton = document.createElement("button");
        deleteButton = document.createElement("button");

        checkBox.type = "checkbox";
        editInput.type = "text";
        editButton.innerText = "Edit";
        editButton.className = "edit";
        deleteButton.innerText = "Delete";
        deleteButton.className = "delete";
        label.innerText = taskString;

        listItem.appendChild(checkBox);
        listItem.appendChild(label);
        listItem.appendChild(editInput);
        listItem.appendChild(editButton);
        listItem.appendChild(deleteButton);

        return listItem;
    };

    const addTask = function () {
        if (taskInput.value === "" || taskInput.value === null) {
            alert("Please give an item name")
            return false;
        } else {
            let listItemName = taskInput.value;
            listItem = createNewTaskElement(listItemName);
            incompleteTasksHolder.appendChild(listItem);
            bindTaskEvents(listItem, taskCompleted);
            taskInput.value = "";
        }


    };

    const editTask = function () {
        let listItem = this.parentNode;
        let editInput = listItem.querySelectorAll("input[type=text")[0];
        let label = listItem.querySelector("label");
        let button = listItem.getElementsByTagName("button")[0];

        let containsClass = listItem.classList.contains("editMode");
        if (containsClass) {
            label.innerText = editInput.value;
            button.innerText = "Edit";
        } else {
            editInput.value = label.innerText;
            button.innerText = "Save";
        }

        listItem.classList.toggle("editMode");
    };

    const deleteTask = function (el) {
        let listItem = this.parentNode;
        let ul = listItem.parentNode;
        ul.removeChild(listItem);
    };

    const taskCompleted = function (el) {
        let listItem = this.parentNode;
        completedTasksHolder.appendChild(listItem);
        bindTaskEvents(listItem, taskIncomplete);
    };

    const taskIncomplete = function () {
        let listItem = this.parentNode;
        incompleteTasksHolder.appendChild(listItem);
        bindTaskEvents(listItem, taskCompleted);
    };

    const bindTaskEvents = function (taskListItem, checkBoxEventHandler, cb) {
        let checkBox = taskListItem.querySelectorAll("input[type=checkbox]")[0];
        let editButton = taskListItem.querySelectorAll("button.edit")[0];
        let deleteButton = taskListItem.querySelectorAll("button.delete")[0];
        editButton.onclick = editTask;
        deleteButton.onclick = deleteTask;
        checkBox.onchange = checkBoxEventHandler;
    };

    addButton.addEventListener("click", addTask);

    for (let i = 0; i < incompleteTasksHolder.children.length; i++) {
        bindTaskEvents(incompleteTasksHolder.children[i], taskCompleted);
    }

    for (let i = 0; i < completedTasksHolder.children.length; i++) {
        bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);
    }
})();
