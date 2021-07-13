import { bindActionCreators } from 'redux';
import { DeleteTask, AddTask, ChangeTask } from '../actions/tasksAction'
import { MainMenu } from '../actions/accountAction'
import TaskList from '../components/Tasklist'
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        tasklist: state.tasklist.tasks.filter(task => task.idEmail === state.account.currentEmail),
        isAuth: state.account.isAuth,
        currentEmail: state.account.currentEmail,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onDeleteTask: bindActionCreators(DeleteTask, dispatch),
        onAddTask: bindActionCreators(AddTask, dispatch),
        onChange: bindActionCreators(ChangeTask, dispatch),
        onMainMenu: bindActionCreators(MainMenu, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList)

