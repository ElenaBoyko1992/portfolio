import React from 'react';
import style from "./ContactForFooter.module.css";

function ContactForFooter(props: ContactForFooterPropsType) {

    return (

          <a href={props.link} className={style.box} style={{backgroundImage: `url('${props.logo}')`}}></a>

    );
}

//types
type ContactForFooterPropsType = {
    logo: string
    link: string
}

export default ContactForFooter;
