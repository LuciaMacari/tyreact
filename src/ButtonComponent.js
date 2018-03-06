import React, {Component} from 'react';
import {RaisedButton} from "material-ui";

class ButtonComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {showButton: false};
    }

    handleClick() {
        console.log('I have been clicked');
        alert("I have been clicked")
        console.log(this)
        if (this.state.showButton){
            this.setState({ showButton: false });
        } else {
            this.setState({ showButton: true });
        }
    }

    render() {
        const style = {
            margin: 12,
        };
        return (
            <div>
                <RaisedButton label="Show/hide button" primary={true} style={style} onClick={() => this.handleClick()}/>
                { this.state.showButton ? <RaisedButton  label="Davin" primary={true} style={style} onClick={() => this.handleClick}/> : null }
            </div>
        );
    }
}

export default ButtonComponent;
