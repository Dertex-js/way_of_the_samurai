import React from 'react';
import s from "./Friend.module.css";

const Friend = (props) => {


    return (
        <div className={s.friendblock}>
            <img src={props.state.href} />
            <p>{props.state.name}</p>
        </div>
    )
}

export default Friend;