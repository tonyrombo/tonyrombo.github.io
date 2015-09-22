"use strict";
var app = function (){
	this.saveToDo = 0;
	this.demo = 0;
	var list = [];
	var countTask = 0;

	this.createNew = function(){
		var userImput = document.getElementById("newToDo").value;
		if (userImput !== "") {
			var task = {
				id :++countTask,
				text : userImput,
				done : false
			};

			var ToDoList = document.getElementById("toDoList");
			toDoList.innerHTML += content(task.text, task.id);

			list.push(task);

			console.log("click en save");
		}else{
			alert("No se pueden almacenar campos vacíos");
		};
	}

	this.deleteItem = function(itemId){
		var index = getArrayIndex(itemId);
		if (index != null) {
			list.splice(index, 1);
			var item = document.getElementById('task'+itemId);
			item.parentNode.removeChild(item);
		};
	};

	this.toggleDone = function(itemId){
		var index = getArrayIndex(itemId);
		if (index != null) {
			list[index].done = !list[index].done; 
		};

		var item = document.getElementById('task'+itemId).getElementsByTagName('input')[0];

		if (item.hasAttribute("checked")) {
			item.removeAttribute("checked");
		}else{
			item.setAttribute("checked", "");
		};
	}

	this.displayTasks = function(){
		var displayTasks = document.getElementById("displayTasks");
		displayTasks.innerHTML = taskContent(taskCounter().all, taskCounter().done, taskCounter().toDo);
	}

	var getArrayIndex = function(itemId){
		for (var i = 0; i < list.length; i++) {
			if (list[i].id == itemId) {
				return i;
			};
		};
		return null;
	};

	var taskCounter = function(){
		var doneCounter = 0;
		for (var i = 0; i < list.length; i++) {
			if(list[i].done){
				doneCounter ++;
			}
		};

		return {
			all: list.length,
			done: doneCounter,
			toDo: (list.length - doneCounter)
		}
	}

	var taskContent = function(all, done, todo){
		return '<li class="task-item">'+
					'<p class="task">All items: '+all+'</p>'+
					'<p class="task">Tasks Done: '+done+'</p>'+
					'<p class="task">Tasks To Do: '+todo+'</p>'+
				'</li>';
	}

	var content = function(text, id) {
		return '<li id="task' + id + '" class="ToDo">' +
					'<input name="checker" class="check" type="checkbox" onclick="correrApp.toggleDone(' + id + ')"/> '+
					'<p class="item-text">' + text + '</p>' +
					'<button name="delete" value="delete" class="removeToDo" onclick="correrApp.deleteItem(' + id + ')">Delete</button>'+
				'</li>'
	};
};

var correrApp = new app;