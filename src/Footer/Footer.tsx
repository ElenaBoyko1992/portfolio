import React from 'react';
import style from './Footer.module.scss'
import Title from "../common/Components/Title";
import {ButtonLink} from "common/Components/ButtonLink";

function Footer(props: FooterPropsType) {
    return (
        <footer className={style.footer}>
            <div className={style.footerContainer}>
                <Title titleValue={'Elena Boiko'}/>
                <div className={style.socialLogos}>
                    {props.contactsForFooter.map((c) => <ButtonLink href={c.link} className={style.socialLogo}
                                                                    style={{backgroundImage: `url('${c.logo}')`}}
                                                                    key={c.id}/>)}
                </div>
            </div>
        </footer>
    );
}

//types
export type ContactsForFooterType = {
    id: number
    name: string
    logo: string
    link: string
}
type FooterPropsType = {
    contactsForFooter: Array<ContactsForFooterType>
}

export default Footer;
