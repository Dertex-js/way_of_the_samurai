import React from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: "Oleg"},
        {id: 2, name: "Azaliya"},
        {id: 3, name: "Denis"},
        {id: 4, name: "Artem"},
        {id: 5, name: "Tuna"},
        {id: 6, name: "Danis"}
    ]

    let messages = [
        {id: 1, message: "Hi"},
        {id: 2, message: "How are u?"},
        {id: 3, message: "Have a nice day"}
    ]

    let dialogsElements = dialogs.map( d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = messages.map( m => <Message message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
}

export default Dialogs;