import React, {Component} from 'react';
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import Greetings from "./Greetings";

class LoginControl extends Component{
    state = {
        isLoggedIn: false,
    };

    handleLoginClick(){
        this.setState({isLoggedIn: true});
    }

    handleLogoutClick(){
        this.setState({isLoggedIn: false});
    }

    render(){
        const isLoggedIn = this.state.isLoggedIn;
        let button;
        if(isLoggedIn){
            button = <LogoutButton onClick={this.handleLogoutClick.bind(this)}/>;
        } else {
            button = <LoginButton onClick={this.handleLoginClick.bind(this)}/>;
        }
        return(
            <div>
                <Greetings isLoggedIn={isLoggedIn} />
                {button}
            </div>
        );
    }
}

export default LoginControl;