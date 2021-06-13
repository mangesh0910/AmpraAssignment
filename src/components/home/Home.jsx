import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

class HomePage extends React.Component {

    constructor() {
        super()
        let users = JSON.parse(localStorage.getItem('users')) || [];
        this.state = {
            users : users,
            user : users.length > 0 ? users[0] : undefined
        }

        this.handleDeleteUser = this.handleDeleteUser.bind(this);
    }

    handleDeleteUser(e) 
    {   
        e.preventDefault();
        localStorage.removeItem("users");
        this.props.history.push('/login');
    }

    render() {
        const { user, users } = this.state;
        return (
            <div className="container dashboard">
                <h1>Hi {user.firstName}!</h1>
                <p>You're logged in with React!!</p>
                <p>
                    <Link to="/login" className="btn btn-primary">Logout</Link>
                    <button className="btn btn-primary deleteBtn" onClick={this.handleDeleteUser}>Delete User</button>
                </p>
            </div>
        );
    }
}

export default HomePage;