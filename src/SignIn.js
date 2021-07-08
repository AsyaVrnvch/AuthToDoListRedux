import { Component } from "react";
import { connect } from "react-redux"
import { Link } from 'react-router-dom'

class SignIn extends Component {

    signIn() {
        this.props.onSignIn(this.emailInput.value, this.passwordInput.value, this.props.accList);
        this.emailInput.value = '';
        this.passwordInput.value = '';
    }

    render() {
        return (
            <form className='container'>
                <div className='form-group'>
                    <h2>Sign In</h2>
                    <div className='form-group'>
                        <p>Enter your email: </p>
                        <input type='email' 
                            ref={(input) => { this.emailInput = input }} 
                            className="form-control"/>
                    </div>
                    <div className='form-group'>
                        <p>Enter your password: </p>
                        <input type='password' 
                            ref={(input) => { this.passwordInput = input }} 
                            className="form-control" />
                    </div>
                    <Link to='/tasklist'>
                        <button type='button'
                            onClick={this.signIn.bind(this)}
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

export default connect(
    state => ({
        accList: state.account.accounts
    }),
    dispatch => ({
        onSignIn: (curEmail, curPass, accList) => {
            const payload = {
                email: curEmail,
                password: curPass,
                acc: accList
            }
            dispatch({ type: 'SIGN_IN', payload });
        },
    })
)(SignIn)