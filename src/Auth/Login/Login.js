import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
import {RaisedButton, TextField, RadioButton, RadioButtonGroup} from 'material-ui';

class Login extends Component {
    componentDidMount(){
        document.title = "Login"
    }

    render() {
        const style = {
            margin: 15,
        };
        return (
            <div style={{textAlign: 'center'}}>
                <br/>
                <Typography variant="h4" gutterBottom>
                    Please enter your login and password
                </Typography>
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
