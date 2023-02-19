import React from 'react';
import style from './Contacts.module.css'
import commonStyles from '../common/Styles/CommonStyles.module.css'
import Title from "../common/Components/Title";
import {useFormik} from "formik";

function Contacts() {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: ''
        },
        onSubmit: values => {
            /*alert(JSON.stringify(values));*/
            formik.resetForm()
        },
    })
    return (
        <div className={style.contactsBlock} id={'contacts'}>
            <div className={`${commonStyles.container} ${style.contactsContainer}`}>
                <Title titleValue={'Contacts'}/>
                <form className={style.form} action="" onSubmit={formik.handleSubmit}>
                    <input className={style.input} type="text"
                           placeholder={'Enter your name'}
                           {...formik.getFieldProps('name')}
                    />
                    <input className={style.input} type="text"
                           placeholder={'email'}
                           {...formik.getFieldProps('email')}
                    />
                    <textarea className={style.textarea}
                              placeholder={'message'}
                              {...formik.getFieldProps('message')}
                    ></textarea>
                    <button type="submit" className={style.button}>Send</button>
                </form>

            </div>
        </div>
    );
}

export default Contacts;
