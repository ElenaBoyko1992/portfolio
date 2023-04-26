import React, {useState} from 'react';
import style from './Contacts.module.scss'
import Title from "../common/Components/Title";
import {useFormik} from "formik";
import {Fade} from "react-awesome-reveal";
import axios from "axios";
import {Alert, Snackbar} from "@mui/material";

function Contacts() {
    const [showSnackbar, setShowSnackbar] = useState(false)
    const [snackbarMessage, setSnackbarMessage] = useState('')
    const [error, setError] = useState(false)

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: ''
        },
        onSubmit: async values => {
            /*alert(JSON.stringify(values));*/
            try {
                await axios.post('https://portfolio-backend-tan.vercel.app/sendMessage', {
                    name: values.name,
                    email: values.email,
                    message: values.message
                })
                setSnackbarMessage('Your message has been sent')
                setError(false)
                formik.resetForm()
            } catch (e) {
                setSnackbarMessage('Some error. Please try again')
                setError(true)
            } finally {
                setShowSnackbar(true)
            }
        },
        validate: values => {
            const errors: any = {};
            if (!values.email) {
                errors.email = 'Please enter your email';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address'
            }
            if (!values.name) {
                errors.name = 'Please enter your name';
            }
            if (!values.message) {
                errors.message = 'Please enter your message';
            }

            return errors;
        }
    })
    return (
        <div className={style.contactsBlock} id={'contacts'}>
            <Fade direction={'left'} triggerOnce={true}>
                <div className={style.contactsContainer}>
                    <Title titleValue={'Contacts'}/>
                    <form className={style.form} action="" onSubmit={formik.handleSubmit}>
                        <div className={style.wrapper}>
                            <input
                                className={formik.touched.name && formik.errors.name ? `${style.input} ${style.error}` : style.input}
                                type="text"
                                placeholder={'Enter your name'}
                                {...formik.getFieldProps('name')}
                            />
                            <div>
                                {formik.touched.name && formik.errors.name ?
                                    <div style={{color: 'red'}}>{formik.errors.name}</div> : null}
                            </div>
                        </div>
                        <div className={style.wrapper}>
                            <input
                                className={formik.touched.email && formik.errors.email ? `${style.input} ${style.error}` : style.input}
                                type="text"
                                placeholder={'email'}
                                {...formik.getFieldProps('email')}
                            />
                            <div>
                                {formik.touched.email && formik.errors.email ?
                                    <div style={{color: 'red'}}>{formik.errors.email}</div> : null}
                            </div>

                        </div>
                        <div className={style.wrapper}>
                            <textarea
                                className={formik.touched.message && formik.errors.message ? `${style.textarea} ${style.error}` : style.textarea}
                                placeholder={'message'}
                                {...formik.getFieldProps('message')}></textarea>
                            <div>
                                {formik.touched.message && formik.errors.message ?
                                    <div style={{color: 'red'}}>{formik.errors.message}</div> : null}
                            </div>
                        </div>
                        <button type="submit" className={style.button}>Send</button>
                    </form>

                </div>
            </Fade>
            {showSnackbar &&
                <Snackbar
                    open={showSnackbar}
                    autoHideDuration={6000}
                    onClose={() => setShowSnackbar(false)}
                >
                    <Alert
                        onClose={() => setShowSnackbar(false)} severity={error ? 'error' : 'success'}
                    >
                        {snackbarMessage}
                    </Alert>
                </Snackbar>}
        </div>
    );
}

export default Contacts;
