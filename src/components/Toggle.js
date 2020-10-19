import React, {Component} from "react";

class Toggle extends Component{
    state = {isToggleOn: true};

    handleClick(){
        this.setState(state => ({
            isToggleOn: !state.isToggleOn,
        }));
    }

    render(){
        return (
            <button onClick={this.handleClick.bind(this)}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}

export default Toggle;