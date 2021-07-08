import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './store/index'
import { composeWithDevTools } from 'redux-devtools-extension'
import { BrowserRouter } from 'react-router-dom'

const store = createStore(reducer, composeWithDevTools())

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
    , document.getElementById('root'))