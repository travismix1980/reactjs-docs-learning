import React, {Component} from "react";

class NameForm extends Component{
    state = {value: ''};

    handleChange(event){
        this.setState({value: event.target.value});
    }

    handleSubmit(event){
        alert('Name: ' + this.state.value);
        this.setState({value: ''});
        event.preventDefault();
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit.bind(this)}>
                <label>
                    Name: 
                    <input type="text" value={this.state.value} onChange={this.handleChange.bind(this)}/>
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default NameForm;