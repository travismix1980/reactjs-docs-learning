import React from "react";
import Clock from "./components/Clock";
import Toggle from "./components/Toggle";
import LoginControl from "./components/LoginControl";
import Page from "./components/Page";

function App(){
    return (
        <div>
            <Page>
                <Clock />
                <Toggle />
                <LoginControl />
            </Page>

        </div>
    );
}

export default App;