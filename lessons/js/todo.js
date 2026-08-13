// 1. Find the parts of the HTML page we need to use
const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

// 2. Wait for the user to click the "Add task" button
addButton.addEventListener("click", function() {
    // Get the words typed into the input box
    const task = taskInput.value;

    // Check if the input box is empty
    if (task === "") {
        alert("Please enter a task");
        return; // Stop the code here if it is empty
    }

    // 3. Create a new list item (li) for the task
    const li = document.createElement("li");
    li.textContent = task + " "; // Add a little space after the text

    // 4. Create an Edit button
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    
    // Make the Edit button work when clicked
    editButton.addEventListener("click", function() {
        const newTask = prompt("Edit your task:", li.firstChild.textContent.trim());
        if (newTask !== null && newTask.trim() !== "") {
            li.firstChild.textContent = newTask + " ";
        }
    });

    // 5. Create a Delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    
    // Make the Delete button work when clicked
    deleteButton.addEventListener("click", function() {
        taskList.removeChild(li); // Remove this item from the list
    });

    // 6. Put the buttons inside the list item, and put the list item into the list
    li.appendChild(editButton);
    li.appendChild(deleteButton);
    taskList.appendChild(li);

    // 7. Clear the input box so the user can type a new task
    taskInput.value = "";
});
