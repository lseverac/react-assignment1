import React, {Component} from 'react';
import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {

    state = {
        userName : 'user1'
    }

    changeUserNameHandler = (event) => {
        this.setState({
            userName : event.target.value
        })
    }

    render() {
        return (
                <div className="App">
                    <h1>React - Assignment 1</h1>
                    <UserInput changeUserNameHandler={this.changeUserNameHandler} defaultName={this.state.userName}/>
                    <br/>
                    <UserOutput userName={this.state.userName}/>
                    <UserOutput userName="user2"/>
                </div>
        );
    }
}

export default App;
