import React from 'react';
import style from './Contacts.module.css'
import commonStyles from '../common/Styles/CommonStyles.module.css'

function Contacts() {
    return (
        <div className={style.contactsBlock}>
            <div className={`${commonStyles.container} ${style.contactsContainer}`}>
                <h2 className={`${commonStyles.title} ${style.contactsTitle}`} >Contacts</h2>
                <form className={style.form} action="" >
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
