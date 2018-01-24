import React, {Component} from 'react'
import logo from './invitae_logo.png'

class Titlebar extends Component {
    render = () => <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <h1 className="App-title">Gene Variant Search</h1>
    </header>
}

export default Titlebar;