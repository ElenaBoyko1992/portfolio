import React from 'react';
import style from "./ContactForFooter.module.scss";

function ContactForFooter(props: ContactForFooterPropsType) {

    return (
        <a href={props.link} className={style.socialLogo} style={{backgroundImage: `url('${props.logo}')`}}></a>
    );
}

//types
type ContactForFooterPropsType = {
    logo: string
    link: string
}

export default ContactForFooter;
