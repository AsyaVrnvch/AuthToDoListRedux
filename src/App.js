import {Route} from 'react-router-dom'
import './App.css'
import SignUpContainer from './containers/signUpContainer'
import SignInContainer from './containers/signInContainer'
import TaskListContainer from './containers/taskListContainer'

function App() {
    return (
        <>
        <Route exact path='/'>
            <SignInContainer />
        </Route>
        <Route exact path='/tasklist'>
            <TaskListContainer />
        </Route>
        <Route exact path='/signUp'>
            <SignUpContainer />
        </Route>
        </>

    )
}

export default App