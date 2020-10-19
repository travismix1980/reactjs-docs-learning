import React, {Component} from "react";
import WarningBanner from "./WarningBanner";

class Page extends Component{
    state = {
        showWarning: true,
    };

    warningOn(){
        this.setState({
            showWarning: !this.state.showWarning,
        });
    }

    render() {
        return(
            <div>
                <WarningBanner warn={this.state.showWarning}/>
                <button onClick={this.warningOn.bind(this)}>
                    {this.state.showWarning ? 'Hide Warning' : 'Show Warning'}
                </button>
                {this.props.children}
            </div>
        );
    }
}

export default Page;