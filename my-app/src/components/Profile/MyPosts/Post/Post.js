import React from 'react';
import s from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxLkbtTa0kfmKizxJgqECQLdlt_xq1R2jEQQ&usqp=CAU" alt="avatar"/>
            { props.message }
            <div>
                { props.likesCount } <span>like</span>
            </div>
        </div>
    )
}

export default Post;