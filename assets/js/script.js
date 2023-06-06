"use strict";

let todoList = [];

function addTask() {
    let inp = document.getElementById('inp');
    let listUl = document.getElementById('list');

    let task = inp.value;

    if (task.trim() !== "") {
        todoList.push(task);

        let li = document.createElement('li');
        li.textContent = task;

        let button = document.createElement('button');
        button.textContent = 'Delete';
        button.addEventListener('click', function() {
            removeTask(task);
        });

        li.appendChild(button);
        listUl.appendChild(li);

        inp.value = "";
    } else {
        inp.classList.add('danger');
        alert("Please enter a task!");
    }
}

function removeTask(task) {
    let index = todoList.indexOf(task);
    if (index !== -1) {
        todoList.splice(index, 1);
        refreshList();
    }
}

function refreshList() {
    let listUl = document.getElementById('list');
    listUl.innerHTML = "";

    for (let i = 0; i < todoList.length; i++) {
        let li = document.createElement('li');
        li.textContent = todoList[i];

        let button = document.createElement('button');
        button.textContent = 'Delete';
        button.addEventListener('click', function() {
            removeTask(todoList[i]);
        });

        li.appendChild(button);
        listUl.appendChild(li);
    }
}
