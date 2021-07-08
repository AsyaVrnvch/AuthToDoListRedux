import { Component } from "react";
import { connect } from "react-redux"
import { Link } from 'react-router-dom'

class SignUp extends Component {

    setFirstData() {
        this.props.onSetFirstData(this.emailInput.value, this.passwordInput.value);
    }

    render() {
        console.log(this.props.yetReg)
        return(
            <form className='container'>
                <div className='form-group'>
                    <h2>Sign Up</h2>
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
                    <Link to={
                        this.props.yetReg===0 ? '/' : '/signUp'
                    }>
                        {/* проблема в том, что условие link-а срабатывает раньше,
                        чем переопределяется переменная isReg */}
                        <button type='button'
                            className='btn btn-primary mr-1'
                            onClick={this.setFirstData.bind(this)}>Confirm</button>
                    </Link>
                    <Link to='/'>
                        <button type='button'
                            className='btn btn-primary'>Cancel</button>
                    </Link>
                    <div>
                        {
                            this.props.yetReg===1 ? 
                            <p>Please check the data.The user with this email address is already registered</p> : ''
                        }
                    </div>
                </div>
            </form>
        )
    }
}

export default connect(
    state => ({
        yetReg: state.account.yetReg
    }),
    dispatch => ({
        onSetFirstData: (email,password) => {
            const payload={
                e:email,
                p:password
            }
            dispatch({type:'SIGN_UP', payload})
        }
    })
)(SignUp)
