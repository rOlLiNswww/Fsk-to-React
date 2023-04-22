import React, {Component} from 'react';
import Sidebar from "./components/Sidebar";
import Friend from "./components/friendBox";
import LoginInfo from "./components/loginInfo";
import TopBar from "./components/topBar";
import "./App.css"
import FriendInfo from "./components/friendInfo";

class App extends Component {
    render() {
        return (
            <div>
                <TopBar/>
                <Sidebar/>
                <Friend/>
                <Friend/>

            </div>
        );
    }
}

export default App;