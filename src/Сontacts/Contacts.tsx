import React from 'react';
import style from './Contacts.module.css'
import commonStyles from '../common/Styles/CommonStyles.module.css'

function Contacts() {
    return (
        <div className={style.contactsBlock}>
            <div className={`${commonStyles.container} ${style.contactsContainer}`}>
                <h2 className={`${commonStyles.title} ${style.distantWorkTitle}`}>My contacts</h2>
                <form action="">
                    <input type="text"/>
                    <input type="text"/>
                    <textarea></textarea>
                </form>
                <button>send</button>
            </div>
        </div>
    );
}

export default Contacts;
