import React, { Component } from 'react';

class User extends Component {

    /*
    StyleCompleted(){
	return {
	    fontSize: '20px',
	    color: this.props.task.state === 'done' ? 'green' : 'gray',
	    textDecoration: 'none',
	}
    }
    */

    render () {
	const {user} = this.props

	return <li>
		 {user.name}
	         <div>
	           <button>Update</button>
	           <input type='text' />
	         </div>
		   <button style={btnDelete}>
		     delete
		   </button>
	       </li>
	       }

}

const btnDelete = {
    borderRadius: '30%',
}

export default User;
