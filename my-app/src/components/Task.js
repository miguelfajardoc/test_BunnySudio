import React, { Component } from 'react';

class Task extends Component {

    StyleCompleted(){
	return {
	    fontSize: '20px',
	    color: this.props.task.state === 'done' ? 'green' : 'gray',
	    textDecoration: 'none',
	}
    }


    render () {
	const {task} = this.props
	return <li  style={this.StyleCompleted()} >
		 {task.description} - {task.state}
		   <input type="checkbox" onChange={this.props.checkDone.bind(this, task.id)}/>
	           <button style={btnDelete} onClick={this.props.deleteTask.bind(this, task.id)}>
		     delete
		   </button>
	       </li>
	       }

}

const btnDelete = {
    borderRadius: '30%',
}

export default Task;

/**/

/*aqui {this.props.task.description}*/
