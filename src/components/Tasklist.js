import { Component } from 'react';
import { Link } from 'react-router-dom'

class TaskList extends Component {

    state={
        taskName:''
    }

    constructor(props) {
        super(props)
        this.addTask = this.addTask.bind(this)
    }

    addTask() {
        this.props.onAddTask(this.state.taskName, this.props.isAuth, this.props.currentEmail);
        this.setState({
            taskName:''
        });
    }

    handleChange = (event) => {
        this.setState(({
            [event.target.name]: event.target.value
        }))
    }

    render() {
        if (!this.props.isAuth) {
            return (
                <>
                    <h2>Error, this user is not registered</h2>
                    <Link to='/'>
                        <button type='button' className='btn btn-primary'>
                            Return to main menu
                        </button>
                    </Link>
                </>
            )
        }
        else
            return (
                <div className='container'>
                    <h2>Tasks list</h2>
                    <p>Add task:</p>
                    <input type='text' required
                        className="form-control col-5 mb-2"
                        name='taskName'
                        value={this.state.taskName}
                        onChange={this.handleChange}/>
                    <button type='button'
                        onClick={this.addTask}
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
                                            <input type='checkbox' onClick={() => this.props.onChange(task.id)} />
                                        </span>
                                    </td>
                                    <td className='center'>
                                        <span style={{ cursor: 'pointer' }}
                                            onClick={() => this.props.onDeleteTask(task.id)}>delete</span>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                    <Link to='/'>
                        <button onClick={this.props.onMainMenu}
                            className='btn btn-primary'>
                            Sign Out
                        </button>
                    </Link>
                </div>
            )
    }

}

export default TaskList