import { bindActionCreators } from 'redux';
import { Sign_In } from '../actions/accountAction'
import SignIn from '../components/SignIn'
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        onSignIn: bindActionCreators(Sign_In, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)