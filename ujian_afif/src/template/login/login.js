import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import { Input } from "../../component"

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: "",
            password: ""
         }
    }

    setValue = el => {
        this.setState({
            [el.target.name]: el.target.value
        })
    }

    render() {
        if (this.props.isLogin) {
            return <Redirect to="/" />
        }

        const { username, password } = this.state;

        return (
            <div>
                <div>
                    <div>Please Login!</div>
                </div>
                <div>
                    <Input type="text" value={username} name="username" id="username" placeholder="Masukkan Username" onChange={this.setValue} />
                    <span id="valid-username"></span>
                </div>
                <div>
                    <Input type="password" value={password} name="password" id="password" placeholder="Masukkan Password" onChange={this.setValue} />
                    <span id="valid-password"></span>
                </div>
                <Input type="button" name="login" value="Login" onClick={() => this.props.doLogin(username, password)} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return{
        isLogin: state.Auth.statusLogin
    }
}

const mapDispatchToProps = dispatch => ({
    changeLogin: () => dispatch({
        type : "LOGIN_SUCCESS"
    })
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);