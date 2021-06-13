import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
import * as EmailValidator from 'email-validator';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { username, password } = this.state;
        
        if (!EmailValidator.validate(username)) {
            
            alert("Please enter valid email address");
            return
        }

        if (username && password) {
            let users = JSON.parse(localStorage.getItem('users')) || [];
            if (users.length > 0) {
                let firstUser = users[0];
                if (firstUser.username === username && firstUser.password === password) {
                    this.props.history.push('/home')
                }else{
                    
                    alert("Invalid username and password");
                }
            }else{
                
                    alert("User not found - consider registering as a new user.");
            }
            
        }
    }

    render() {
        const { username, password, submitted } = this.state;
        return (
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <form name="form" onSubmit={this.handleSubmit}>
                        <h3>Login</h3>

                        <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                            <label htmlFor="username">Email</label>
                            <input type="text" className="form-control" name="username" value={username} onChange={this.handleChange} />
                            {submitted && !username &&
                                <div className="help-block" style={{color: "red",fontSize:10}}>*Username is required</div>
                            }
                        </div>

                        <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange} />
                            {submitted && !password &&
                                <div className="help-block" style={{color: "red",fontSize:10}}>*Password is required</div>
                            }
                        </div>

                        <div className="form-group">
                            <button className="btn btn-primary">Login</button>
                            <Link to="/register" style={{marginLeft:150}} className="btn btn-link"><button className="btn btn-primary">Register</button></Link>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default LoginPage;