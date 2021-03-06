//Adding task after clicking 'Enter' key
document.addEventListener('DOMContentLoaded', (event) => {
    let inputTask = document.getElementById("inputTask");
    let addTaskButton = document.getElementById("addTaskButton");

    inputTask.addEventListener("keydown", function(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            addTask();
        }
    });

    addTaskButton.addEventListener('click', () => {
        addTask();
    });

});


function addTask() {

    //Getting elements from HTML document
    let contentTasks = document.getElementById('mainFrameContentTasks');
    let hintForTasks = document.getElementById('hintForTasks');
    let inputTask = document.getElementById("inputTask");

    //checking if input is not empty
    if (inputTask.value !== '') {
        let taskContainer = document.createElement('div');
        taskContainer.className = 'task';

        let taskContainerText = document.createElement('div');
        taskContainerText.className = 'taskText col-11';
        taskContainerText.innerText = inputTask.value;

        let taskContainerButton = document.createElement('button');
        taskContainerButton.className = 'taskButton col-1 col-s-1';
        taskContainerButton.innerText = '✘';

        //adding listener onClick for deleting task
        taskContainerButton.addEventListener('click', () => {
            taskContainerButton.parentNode.remove();
            if (contentTasks.getElementsByTagName('div').length == 0) {
                hintForTasks.style.display = "block";
            }
        });

        //setting input empty after adding the task
        inputTask.value = '';

        //hiding hint 'Here you will see your tasks!'
        if (hintForTasks != null) {
            hintForTasks.style.display = "none";
        }

        //appending all divs to website
        taskContainer.appendChild(taskContainerText);
        taskContainer.appendChild(taskContainerButton);
        contentTasks.appendChild(taskContainer);
    }
}