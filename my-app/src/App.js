import React, { Component } from 'react';
import './App.css';
import Tasks from './components/Tasks';
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

console.log(tasks);

class App extends Component {

    state = {
	users: users,
	tasks: tasks
    }
    render () {
	return (
	    <div className="App">
	        <h1>Bunny Test!</h1>
		<Users users={this.state.users}/>
	        <Tasks tasks={this.state.tasks}/>
	    </div>
	)
    }
}

export default App;
