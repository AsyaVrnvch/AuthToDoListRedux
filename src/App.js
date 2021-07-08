import SignIn from './SignIn'
import TaskList from './Tasklist'
import {Route} from 'react-router-dom'
import SignUp from './Registration'

function App() {
    return (
        <>
        <Route exact path='/'>
            <SignIn />
        </Route>
        <Route exact path='/tasklist'>
            <TaskList />
        </Route>
        <Route exact path='/signUp'>
            <SignUp />
        </Route>
        </>

    )
}

export default App