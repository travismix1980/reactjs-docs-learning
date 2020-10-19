import React from "react";
import Clock from "./components/Clock";
import Toggle from "./components/Toggle";
import LoginControl from "./components/LoginControl";
import Page from "./components/Page";
import NumberList from "./components/NumberList";
import NameForm from "./components/NameForm";
import Reservation from "./components/Reservation"

function App(){
    const numbers = [1,2,3,4,5,6,7,8,9,10];
    return (
        <div>
            <Page>
                <Clock />
                <Toggle />
                <LoginControl />
                <br />
                <NameForm />
                <br />
                <Reservation />
                <NumberList numbers={numbers} />
            </Page>

        </div>
    );
}

export default App;