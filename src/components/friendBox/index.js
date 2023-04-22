import React, {Component} from 'react';
import "./friend.css"
import FriendInfo from "../friendInfo";
import Intimacy from "../intimacy";
import ProfilePic from "../profilePic";
class Index extends Component {
    render() {
        return (
            <div>
                <div className="friendBox">
                    <div className="infoBox"><ProfilePic/></div>
                    <div className="infoBox"><Intimacy/></div>
                    <FriendInfo/>
            </div>
        </div>
        );
    }
}

export default Index;