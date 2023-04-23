import React, {Component} from 'react';
import Sidebar from "./components/Sidebar";
import Friend from "./components/friendBox";
import LoginInfo from "./components/loginInfo";
import TopBar from "./components/topBar";
import "./App.css"
import FriendInfo from "./components/friendInfo";
import ProfilePage from "./components/profilePage";

class App extends Component {
    render() {
        return (
            <div>
                <Sidebar/>
                <TopBar/>
                <ProfilePage/>

            </div>
        );
    }
}

export default App;