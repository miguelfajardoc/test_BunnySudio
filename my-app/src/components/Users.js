import React, { Component } from 'react';

import User from './User'

class Users extends Component {
    render () {
	return <ul>
	    { this.props.users.map(user => <User key={user.id} user={user} />)}
	</ul>
    }

}

export default Users;
