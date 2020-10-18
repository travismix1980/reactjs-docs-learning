import React from 'react';
import ReactDOM from 'react-dom';

const formatName = (user) => {
    return `${user.firstName} ${user.lastName}`;
}

const getGreeting = (user) => {
    if(user){
        return <h1>Hello, {formatName(user)}</h1>
    }
    return <h1>Hello, stranger.</h1>
}

const user = {
    firstName: 'Travis',
    lastName: 'Mix',
    avatarUrl: 'https://www.w3schools.com/howto/img_avatar.png',
}

const element = (
    <div tabIndex="0">
        {getGreeting(user)}
        <img src={user.avatarUrl} alt="avatar"/>
    </div>
);


ReactDOM.render(
    element,
    document.getElementById('root')
);

