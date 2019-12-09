import React, { Component } from 'react';

class TaskForm extends Component {

    state = {
	description: '',
    }

    onSubmit = e => {
	this.props.addTask(this.state.description);
	e.preventDefault();
    }

    onChange = e => {
	this.setState({
	    [e.target.name]: e.target.value,
	})
    }



    render() {
	return (
	    <form onSubmit={this.onSubmit}>
		<textarea placeholder="write a task description"
	                  onChange={this.onChange}
	                  value={this.state.description}
		          name="description"
		/>
		<button type="submit">Save task </button>
	    </form>
	)
    }
    

}

export default TaskForm;
