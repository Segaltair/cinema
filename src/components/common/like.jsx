import React from 'react'
import "@fortawesome/fontawesome-free/css/all.css";

const Like = props =>
    (<div>
        <i className={props.liked ? "fas fa-heart" : "far fa-heart"}
           style={{cursor: "pointer"}}
           aria-hidden={"true"}
           onClick={props.onClick}
        />
    </div>);

export default Like;