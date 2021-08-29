import React from 'react';
import Friend from "./Friend/Friend";
import s from "./Friends.module.css";

const Friends = (props) => {

    return (
        <div>
            <div>
                <h3 className={s.title}>Friends</h3>
            </div>
            <div className={s.imgblock}>
                <Friend state={props.state.friendTuna}/>
                <Friend state={props.state.friendDanis}/>
                <Friend state={props.state.friendAzaliya}/>
            </div>
        </div>

    )
}

export default Friends;