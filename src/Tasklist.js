import { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

class TaskList extends Component {

    deleteTask(id) {
        this.props.onDeleteTask(id);
    }

    addTask() {
        this.props.onAddTask(this.addInput.value, this.props.isAuth);
        this.addInput.value = ''
    }

    signOut() {
        this.props.onSignOut();
    }

    render() {
        if(!this.props.isAuth){
            return(
                <h2>Error, this user is not registered</h2>
            )
        }
        else 
            return (
                <div className='container'>
                    <h2>Tasks list</h2>
                    <p>Add task:</p>
                    <input type='text'
                        className="form-control col-5 mb-2"
                        ref={(input) => { this.addInput = input }} />
                    <button type='button' 
                        onClick={this.addTask.bind(this)}
                        className='btn btn-primary mb-2'>Add</button>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Tasks</th>
                                <th>Status</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.tasklist.map((task) =>
                                <tr key={task.id}>
                                    <td>
                                        {task.text}
                                    </td>
                                    <td className='center'>
                                        <span>
                                            <input type='checkbox' />
                                        </span>
                                    </td>
                                    <td className='center'>
                                        <span style={{cursor:'pointer'}}
                                            onClick={() => this.deleteTask(task.id)}>delete</span>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                    <Link to='/'>
                        <button onClick={this.signOut.bind(this)} 
                            className='btn btn-primary'>
                            Sign Out
                        </button>
                    </Link>
                </div>
            )
    }

}

export default connect(
    state => ({
        tasklist: state.tasklist.tasks.filter(task => task.idEmail === state.tasklist.currentEmail),
        isAuth:state.tasklist.isAuth
    }),
    dispatch => ({
        onDeleteTask: (index) => {
            dispatch({ type: 'DELETE_TASK', payload: index })
        },
        onAddTask: (text, check) => {
            const payload = {
                textAdd: text,
                isAuth: check
            }
            dispatch({ type: 'ADD_TASK', payload })
        },
        onSignOut: () => {
            dispatch({ type: 'SIGN_OUT' })
        }
    })
)(TaskList)