import type React from 'react';
import type { ButtontextProps } from '../interface';
import './styles.css';

export const Button_Text:React.FC<ButtontextProps> = (Props) => {

    return (

        <>
        
            <a href={`${Props.route ? Props.route : '#'}`} className={`buttoncstm p-medium ${Props.classname}`} onClick={Props.onClick}>{Props.text}</a>
        </>
    )
}


export const Button_Text_Icon:React.FC<ButtontextProps> = (Props) => {

    return (

        <>

            <a href={`${Props.route ? Props.route : '#'}`} className={`buttoncstm buttoncstmflex ${Props.classname}`} onClick={Props.onClick}>
                {Props.icon && <>
                    {Props.icon}
                </>
                }
                <span>{Props.text}</span>
            </a>
        </>
    )
}

export const Button_Text_IconRev:React.FC<ButtontextProps> = (Props) => {

    return (

        <>

            <a href={`${Props.route ? Props.route : '#'}`} className={`buttoncstm buttoncstmflex flex_d-row-rev ${Props.classname}`} onClick={Props.onClick}>
                {Props.icon && <>
                    {Props.icon}
                </>
                }
                <span>{Props.text}</span>
            </a>
        </>
    )
}