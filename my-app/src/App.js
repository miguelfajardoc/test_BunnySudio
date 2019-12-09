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


class App extends Component {

    state = {
	users: users,
	tasks: tasks
    }

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

    render () {
	return (
	    <div className="App">
	        <h1>Bunny Test!</h1>
		<Users users={this.state.users}/>
		<TaskForm addTask={this.addTask}/>
	        <Tasks tasks={this.state.tasks}/>
	    </div>
	)
    }
}

export default App;
