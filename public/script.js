// TASK LIST


// Setting up variables for our HTML elements using DOM selection
const form = document.getElementById("taskform");
const button = document.querySelector("#taskform > button"); // Complex CSS query
const tasklist = document.getElementById("tasklist");
const taskInput = document.getElementById("taskInput");
const dueDateInput = document.getElementById("dueDateInput");
const estimatedTimeInput = document.getElementById("estimatedTimeInput");
const priorityInput = document.getElementById("priorityInput");
const submitButton = document.getElementById("submit-button");

// Event listener for Button click
// This could also be form.addEventListener("submit", function() {...} )


submitButton.addEventListener("click", function (event) {
    event.preventDefault(); // Not as necessary for button, but needed for form submit

    let task = taskInput.value // Task name value
    
    let date = (new Date()).toLocaleDateString('en-GB'); // Due date value

    let time = estimatedTimeInput.value; // Estimated time value

    let priority = priorityInput.value; // Priority value

    if (taskInput.value == ""){
        taskInput.classList.add('red');
    }
    if (taskInput.value != ""){
        taskInput.classList.remove('red');
    }

    if (dueDateInput.value == ""){
        dueDateInput.classList.add('red');
    }
    if (dueDateInput.value != ""){
        dueDateInput.classList.remove('red');
    }

    if (estimatedTimeInput.value == ""){
        estimatedTimeInput.classList.add('red');
    }
    if (estimatedTimeInput.value != ""){
        estimatedTimeInput.classList.remove('red');
    }

    if (priorityInput.value == ""){
        priorityInput.classList.add('red');
    }
    if (priorityInput.value != ""){
        priorityInput.classList.remove('red');
    }

    if (taskInput.value != "" && dueDateInput.value != "" && estimatedTimeInput.value != "" && priorityInput.value != ""){
        addTask(task, date, time, priority, false);
    }


    // Call the addTask() function using
    

    /*
    if(form.taskInput.value == ""){
        form.taskInput.classList.add("red");
    }
    else if (form.taskInput.value != ""){
        form.taskInput.classList.remove("red");
    }

    if(form.dueDateInput.value == ""){
        form.dueDateInput.classList.add("red");
    }

    if(form.estimatedTime.value == ""){
        form.estimatedTime.classList.add("red");
    }

    if(form.priority.value == ""){
        form.priority.classList.add("red");
    }

    if (form.taskInput.value != "" && form.dueDateInput.value != "" && form.estimatedTime.value != "" && form.priority.value != ""){
        
    }
    */

    // Log out the newly populated taskList everytime the button has been pressed
    console.log(taskList);
})


    



// Create an empty array to store our tasks
var taskList = [];

function addTask(title, dueDate, estimatedTime, priorityRating, checked) {
    var task = {
        id: Date.now(),
        title: title,
        dueDate: dueDate,
        estimatedTime: estimatedTime,
        priorityRating: priorityRating,
        checked: checked
    };

    // Add the task to our array of tasks
    taskList.push(task);
    
    window.localStorage.setItem(task.id, JSON.stringify({ 
        title: title,
        dueDate: dueDate,
        estimatedTime: estimatedTime,
        priorityRating: priorityRating,
        checked: checked }));

    // Separate the DOM manipulation from the object creation logic
    //addToLocalStorage(task);
    renderTask(task);
    //console.log(task.checked)
}

// when there are elements in the local storage, get them by index number
for (var i = 0; i <= localStorage.length - 1; i++) {
    key = localStorage.key(i);
    getFromLocalStorage(key)
}


// Render tasks from local storage
function getFromLocalStorage(taskId) {
    task = JSON.parse(window.localStorage.getItem(taskId));
      renderTask(task);
  }

function onlyGetFromLocalStorage(taskId) {
    task = JSON.parse(window.localStorage.getItem(taskId));
  }



// Function to display the item on the page
function renderTask(task) {
    
    updateEmpty();

    let item = document.createElement("ul");
    item.classList.add("tasks");
    item.setAttribute('date-id', task.id)
    item.innerHTML = "<p>" + "<li class=task_title>" + task.title + task.priorityRating + "</li>" + "<div id='extraInfo'>" + "<li class=task_due>" + task.dueDate + "</li>" + "<li class=task_time>" + task.estimatedTime + " min" + "</li>" + "<li class=task_priority>" + "</div>" + "<p>";
    tasklist.appendChild(item);


    // Setup delete button DOM elements
    let delButton = document.createElement("button");
    
    let delButtonText = document.createTextNode("x");
    delButton.appendChild(delButtonText);

    delButton.classList.add("del-button");

    let checkbox = document.createElement('input');
    checkbox.classList.add("done")
    checkbox.type = "checkbox";

    item.appendChild(checkbox);
    item.appendChild(delButton); // Adds a delete button to every task
    

    // Checkbox making div blue if it is checked
    checkbox.addEventListener("change", function(event){
        if (this.checked) {
            item.classList.add("blue") 
        } else {
            item.classList.remove("blue")
        }
        });

 



    delButton.addEventListener("click", function (event) {
        event.preventDefault();
        // this removes the item from the consoles array
        let id = event.target.parentElement.getAttribute('date-id');

        let index = taskList.findIndex(task => task.id === Number(id));


        // Removes items added recently but not the items that have been pulled from local storage
        window.localStorage.removeItem(id);
        
        removeItemFromArray(taskList, index);
        
        item.remove();

        // Remove the task item from the page when button clicked
        // Because we used 'let' to define the item, this will always delete the right element
    });

    // Clear the value of the input once the task has been added to the page
    form.reset();
}




function removeItemFromArray(arr, index) {
    if (index > -1) {
        arr.splice(index, 1)
    }
    return arr;
}

function updateEmpty(){
    if (localStorage.length > 0) {
        document.getElementById("whenEmpty").style.display = 'none';
    } else {
        document.getElementById("whenEmpty").style.display = 'block';
    }
}