import { bindActionCreators } from 'redux';
import SignUp from '../components/SignUp'
import { SetFirstData, MainMenu } from '../actions/accountAction'
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        isSuccessSignUp: state.account.isSuccessSignUp,
        singUpError: state.account.singUpError
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onMainMenu: bindActionCreators(MainMenu, dispatch),
        onSetFirstData: bindActionCreators(SetFirstData, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)

