import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {

    render() {
        const styleExample = {
            margin: 12,
        };
        return (
            <div className="App">
                <MuiThemeProvider>
                    <div>
                        <header className="App-header">
                            <img src={logo} className="App-logo" alt="logo"/>
                            <h1 className="App-title">Welcome to React</h1>
                        </header>
                        <p className="App-intro">
                            To get started, edit <code>src/App.js</code> and save to reload.
                        </p>
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default App;
