import { Component } from "react";
import { Link } from 'react-router-dom'

class SignUp extends Component {
    state = {
        email: '',
        password: '',
        errors: {
            emailError: '',
            passwordError: ''
        },
        isAuth:true
    }

    constructor(props) {
        super(props)
        this.setFirstData = this.setFirstData.bind(this)
    }

    checkPassword = () => {
        let isValid = false;
        if (this.state.password.length >= 6) {
            isValid = true
        }
        return isValid
    }

    checkEmail = () => {
        let isValid = false;
        let currentEmail = this.state.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
        if (currentEmail) {
            isValid = true
        }
        return isValid
    }

    setFirstData() {
        const email = this.checkEmail();
        const pass = this.checkPassword();
        let emailError, passwordError = ''
        this.setState({errors:{emailError, passwordError}})

        if (pass && email) {
            this.setState({
                isAuth:true
            })
            this.props.onSetFirstData(this.state.email, this.state.password);
        }
        else {
            if (!email) {
                emailError = 'Invalid email address'
            }

            if (!pass) {
                passwordError = 'Error. Password must be at least 6 characters long'

            }
            this.setState({
                errors: { emailError, passwordError },
                isAuth:false
            })
        }
        
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        if (this.props.isSuccessSignUp) {
            return (
                <>
                    <h3>
                        You have successfully registered!
                    </h3>
                    <Link to='/'>
                        <button type='button' className='btn btn-primary' onClick={this.props.onMainMenu}>
                            Return to main menu
                        </button>
                    </Link>
                </>
            )

        }
        else {
            return (
                <form className='container'>
                    <div className='form-group'>
                        <h2>Sign Up</h2>
                        <div className='form-group'>
                            <p>Enter your email-address: </p>
                            <input type='email'
                                name='email'
                                value={this.state.email}
                                className="form-control"
                                onChange={this.handleChange} />
                            <p className='red'>{this.state.errors.emailError}</p>
                        </div>
                        <div className='form-group'>
                            <p>Enter your password: </p>
                            <input type='password'
                                name='password'
                                value={this.state.password}
                                className="form-control"
                                onChange={this.handleChange} />
                            <p className='red'>{this.state.errors.passwordError}</p>
                        </div>
                        <Link to='/signUp'>
                            <button type='button'
                                className='btn btn-primary mr-1'
                                onClick={this.setFirstData}>Confirm</button>
                        </Link>
                        <Link to='/' >
                            <button type='button'
                                className='btn btn-primary'
                                onClick={this.props.onMainMenu}>Cancel</button>
                        </Link>
                        <div>
                            {
                                this.state.isAuth ? (
                                    <p className='red'>{this.props.singUpError}</p>
                                ):(<p></p>)
                            }
                        </div>
                    </div>
                </form>
            )
        }
    }
}

export default SignUp

