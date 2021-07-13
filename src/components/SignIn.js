import { Component } from "react";
import { Link } from 'react-router-dom'

class SignIn extends Component {

    state={
        email:'',
        password:''
    }

    signIn = () => {
        this.props.onSignIn(this.state.email, this.state.password);
        this.setState({
            email: '',
            password: '',
        });
    }

    handleChange = (event) => {
        this.setState(({
            [event.target.name]: event.target.value
        }))
    }

    render() {
        return (
            <form className='container'>
                <div className='form-group'>
                    <h2>Sign In</h2>
                    <div className='form-group'>
                        <p>Enter your email-address: </p>
                        <input type='email'
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                            className="form-control" />
                    </div>
                    <div className='form-group'>
                        <p>Enter your password: </p>
                        <input type='password'
                            name='password'
                            value={this.state.password}
                            onChange={this.handleChange}
                            className="form-control" />
                    </div>
                    <Link to='/tasklist'>
                        <button type='button'
                            onClick={this.signIn}
                            className='btn btn-primary'
                        >Sign In</button>
                    </Link>
                    <Link to='/signUp'>
                        <button type='button'
                            className='btn btn-primary ml-1'>Sign Up</button>
                    </Link>
                </div>
            </form>
        )
    }
}

export default SignIn