import React, { Component } from 'react';
import './App.css';

//components
import Tasks from './components/Tasks';
import TaskForm from './components/TaskForm';
import Users from './components/Users';


const users = [
    {
	"id": 1,
	"name": "Miguel",
	"tasks": [
	    "do the front"
	],
    },
    {
	"id": 2,
	"name": "Mafe",
	"tasks": [
	    "do the algorithm",
	    "do the back",
	],
    },
    {
	"id": 3,
	"name": "other",
	"tasks": [
	],
    },
];


const tasks = [
    {
	"id": 1,
	"description": "do the front",
	"state": "to do",
	"user_id": 1,
    },
    {
	"id": 2,
	"description": "do the algorithm",
	"state": "done",
	"user_id": 2,
    },
    {
	"id": 3,
	"description": "do the back",
	"state": "to do",
	"user_id": 2,
    },
];

//Principal component of the app
class App extends Component {

    state = {
	users: users,
	tasks: tasks
    }
    //function to create a new task in state
    addTask = (description) => {

	const newTask = { 
	    description: description,
	    state: 'to do',
	    id: this.state.tasks.length,
	}
	this.setState({
	    tasks: [...this.state.tasks, newTask]
	})
    }
    //function to delete a task
    deleteTask = (id) => {
	const newTasks = this.state.tasks.filter(task => task.id !== id);
	this.setState({
	    tasks: newTasks
	})
    }
    //function to change the state of the task (to do - done)
    checkDone = (id) => {
	const newTasks = this.state.tasks.map( task => {
	    if ( task.id === id ) {
		if (task.state === "to do") {
		    task.state = "done";
		}
		else {
		    task.state = "to do";
		}
	    }
	    return task
	})
	this.setState({ tasks: newTasks });
    }

    render () {
	return (
	    <div className="App">
	        <h1>Bunny Test!</h1>
		<Users users={this.state.users}/>
		<TaskForm addTask={this.addTask}/>
	        <Tasks
	            deleteTask={this.deleteTask}
	            tasks={this.state.tasks}
	            checkDone={this.checkDone}
		/>
		
	    </div>
	)
    }
}

export default App;
