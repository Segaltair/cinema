import React, {Component} from 'react'
import "@fortawesome/fontawesome-free/css/all.css";

export default class Like extends Component {
    render() {
        return (<div>
            <i className={this.isLiked()}
               style={{cursor: "pointer"}}
               aria-hidden={"true"}
               onClick={this.props.onClick}
            />
        </div>)
    }

    isLiked() {
        if (this.props.liked)
            return "fas fa-heart";
        else
            return "far fa-heart";
    }
}