import React from 'react';
import style from './Contacts.module.css'
import commonStyles from '../common/Styles/CommonStyles.module.css'
import Title from "../common/Components/Title";

function Contacts() {
    return (
        <div className={style.contactsBlock} id={'contacts'}>
            <div className={`${commonStyles.container} ${style.contactsContainer}`}>
                <Title titleValue={'Contacts'}/>
                <form className={style.form} action="">
                    <input className={style.input} type="text"/>
                    <input className={style.input} type="text"/>
                    <textarea className={style.textarea}></textarea>
                    <button type="submit" className={style.button}>Send</button>
                </form>

            </div>
        </div>
    );
}

export default Contacts;
