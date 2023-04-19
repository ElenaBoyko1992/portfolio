import React, {DetailedHTMLProps, LinkHTMLAttributes} from 'react'
import style from "common/Components/ButtonLink.module.scss";

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан

type DefaultLinkPropsType = DetailedHTMLProps<LinkHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>

type ButtonPropsType = DefaultLinkPropsType

export const ButtonLink: React.FC<ButtonPropsType> = ({children, href, ...restprops}) => {
    return (
        <a className={style.button} href={href} {...restprops}>{children}</a>
    )
}


