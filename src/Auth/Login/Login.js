import React, {Component} from 'react';
import {RaisedButton, TextField, RadioButton, RadioButtonGroup} from 'material-ui';

class Login extends Component {
    render() {
        const style = {
            margin: 15,
        };
        return (
            <div style={{textAlign: 'center'}}>
                <TextField
                    hintText="Enter your Username"
                    floatingLabelText="Username"
                    onChange={(event, newValue) => this.setState({username: newValue})}
                />
                <br/>
                <TextField
                    type="password"
                    hintText="Enter your Password"
                    floatingLabelText="Password"
                    onChange={(event, newValue) => this.setState({password: newValue})}
                />
                <br/>
                <RadioButtonGroup name="isHospital" defaultSelected="0">
                    <RadioButton
                        value="0"
                        label="Patient"
                        style={{margin: '0 auto', width: '10%', display: 'inline-block'}}
                    />
                    <RadioButton
                        value="1"
                        label="Hospital"
                        style={{margin: '0 auto', width: '10%', display: 'inline-block'}}
                    />
                </RadioButtonGroup>
                <br/>
                <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
            </div>
        );
    }
}

export default Login;
