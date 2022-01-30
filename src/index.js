import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';
import { StateProvider } from './components/store/Provider';
import reducer, {initalState} from './components/store/reducer'



ReactDOM.render(
<StateProvider initalState={initalState} reducer={reducer} >
        <App />
</StateProvider>, 
document.getElementById('root'))
