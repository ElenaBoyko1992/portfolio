import React from 'react';
import style from './Contacts.module.scss'
import Title from "../common/Components/Title";
import {useFormik} from "formik";
import {Fade} from "react-awesome-reveal";

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
            <Fade direction={'left'} triggerOnce={true}>
                <div className={style.contactsContainer}>
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
            </Fade>
        </div>
    );
}

export default Contacts;
