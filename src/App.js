import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import ButtonComponent from './ButtonComponent';
import picRock from './pulpitrock.jpg'
// import FontIcon from 'material-ui/FontIcon';
// import {blue500, red500, greenA200} from 'material-ui/styles/colors';

class App extends Component {


    render() {
        const style = {
            margin: 12,
        };
        // const iconStyles = {
        //   marginRight: 24,
        // };

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
                        <RaisedButton label="Primary" primary={true} style={style}/>

                        <ButtonComponent/>

                        <img src={picRock} width="100" height="50" alt={"dddd"}/>

                        Welcome to Product Portal

                        <RaisedButton label="ADD" primary={true} style={style}/>

                        <RaisedButton label="DELETE" primary={true} style={style}/>
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default App;
