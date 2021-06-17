import React from "react";
import s from "./Dialogs.module.css"

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + " " + s.active}>
                    1
                </div>
                <div className={s.dialog}>
                    2
                </div>
                <div className={s.dialog}>
                    3
                </div>
                <div className={s.dialog}>
                    4
                </div>
                <div className={s.dialog}>
                    5
                </div>
                <div className={s.dialog}>
                    6
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How are u?</div>
                <div className={s.message}>Nigga</div>
            </div>
        </div>
    );
}

export default Dialogs;