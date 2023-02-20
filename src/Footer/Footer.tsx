import React from 'react';
import style from './Footer.module.scss'
import commonStyles from "../common/Styles/CommonStyles.module.scss";
import Title from "../common/Components/Title";
import Skill from "../Skills/Skill/Skill";
import telegramLogo from "../assets/icons/telegram-svgrepo-com.svg";
import ContactForFooter from "./ContactForFooter";

function Footer(props: FooterPropsType) {
    return (
        <div className={style.footer}>
            <div className={`${commonStyles.container} ${style.footerContainer}`}>
                <Title titleValue={'Elena Boiko'}/>
                <div className={style.socialLogos}>
                    {props.contactsForFooter.map((c) => <ContactForFooter key={c.id} logo={c.logo} link={c.link}/>)}
                </div>
            </div>
        </div>
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
