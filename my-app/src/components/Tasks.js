import React, { Component } from 'react';

import Task from './Task'

class Tasks extends Component {
    render () {
	return <ul>
	    { this.props.tasks.map(task => <Task key={task.id} task={task} />)}
	</ul>
    }

}

export default Tasks;
/*
 */
