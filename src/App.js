import React, {Component} from 'react';
import Search from './Search'
import TitleBar from './Titlebar'
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <TitleBar/>
                <Search/>
            </div>
        );
    }
}


export default App;
