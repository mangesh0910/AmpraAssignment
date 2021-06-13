import React from 'react';
import { Link } from 'react-router-dom';
import * as EmailValidator from 'email-validator';

class RegisterPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                firstName: '',
                lastName: '',
                username: '',
                password: ''
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });

        const { user } = this.state;
        if (user.firstName && user.lastName && user.username && user.password) {
            let users = []
            users.push(user);
            localStorage.setItem('users', JSON.stringify(users));
            this.props.history.push('/home');
        }
    }

    render() {
        const { user, submitted } = this.state;
        return (
            <div className="auth-wrapper">
                <div className="auth-inner">
                <form name="form" onSubmit={this.handleSubmit}>
                <h3>Register</h3>
                    <div className={'form-group' + (submitted && !user.firstName ? ' has-error' : '')}>
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" className="form-control" name="firstName" value={user.firstName} onChange={this.handleChange} />
                        {submitted && !user.firstName &&
                            <div className="help-block" style={{color: "red",fontSize:10}}>*First Name is required</div>
                        }
                        {
                            !user.firstName.match(/^[a-zA-Z ]*$/)&&
                            <div className="help-block" style={{color: "red",fontSize:10}}>*Please Enter Alphabates Character only</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.lastName ? ' has-error' : '')}>
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" className="form-control" name="lastName" value={user.lastName} onChange={this.handleChange} />
                        {submitted && !user.lastName &&
                            <div className="help-block" style={{color: "red",fontSize:10}}>*Last Name is required</div>
                        }
                        {
                            !user.lastName.match(/^[a-zA-Z ]*$/)&&
                            <div className="help-block" style={{color: "red",fontSize:10}}>*Please Enter Alphabates Character only</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.username ? ' has-error' : '')}>
                        <label htmlFor="username">Email</label>
                        <input type="text" className="form-control" name="username" value={user.username} onChange={this.handleChange} />
                        {
                            submitted && !user.username &&
                            <div className="help-block" style={{color: "red",fontSize:10}}>*Email is required</div>
                            
                        }    
                    </div>
                    <div className={'form-group' + (submitted && !user.password ? ' has-error' : '')}>
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" name="password" value={user.password} onChange={this.handleChange} />
                        {submitted && !user.password.match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/) && 
                            <div className="help-block" style={{color: "red",fontSize:10}}>*Password must contain at least 8 character and at least one number,special character,upper case and lower case letter</div>
                        }
                    
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary">Register</button>
                        <Link to="/login" style={{marginLeft:150}} className="btn btn-link"><button className="btn btn-primary">Cancel</button></Link>
                    </div>
                </form>
                </div>
            </div>
        );
    }
}

export default RegisterPage;