import React, {Component} from 'react';
import "./profilePic.css"

class Index extends Component {
    render() {
        return (
            <div>
                <img className="profilePic" src={[require("./spiderman.jpeg")]} alt=""/>
                <p className="name">Peter Parker</p>
                <progress className="intimacy" max="100" value="90"></progress>
            </div>
        );
    }
}

export default Index;