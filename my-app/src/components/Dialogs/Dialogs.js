import React from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map( d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.state.messages.map( m => <Message message={m.message}/>)

    let newMessageAdd = React.createRef();

    let sendMessage = () => {
        let text = newMessageAdd.current.value;
        alert(text)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>
                    {messagesElements}
                </div>
                <div>
                    <textarea ref={newMessageAdd}></textarea>
                </div>
                <div>
                    <button onClick={ sendMessage }>Send Message</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;