import React, { useState } from "react";

interface IHideText {
    isEdit: "edit" | "print" | "explain" | "hide";
    explain: string;
    txt: string;
}

export const HideText: React.FC<IHideText> = ({ isEdit, txt, explain }) => {
    if (isEdit === "edit")
        return <span className='no-print'>{txt}</span>;
    else if (isEdit === "explain")
        return <span className='no-print'>{explain}</span>;
    else return null;
}

interface IEditText extends IHideText {
    onChange: (str: string) => void;
}

const EditText: React.FC<IEditText> = ({ isEdit, onChange, txt, explain }) => {
    if (isEdit === "edit")
        return <input className='no-print' type="text" onChange={(e) => onChange(e.target.value)} value={txt}></input>
    else return <HideText txt={txt} isEdit={isEdit} explain={explain} />
}

interface IHideNumber {
    isEdit: "edit" | "print" | "explain" | "hide";
    explain: string;
    txt: number;
}

export const HideNumber: React.FC<IHideNumber> = ({ isEdit, txt, explain }) => {
    if (isEdit === "edit")
        return <span className='no-print'>{txt}</span>;
    else if (isEdit === "explain")
        return <span className='no-print'>{explain}</span>;
    else return null;
}

interface IEditNumber extends IHideNumber {
    onChange: (str: number) => void;
}
const parseNumber = (p:string, d:number):number => {
    const n = parseFloat(p);
    if (isNaN(n)) return d;
    return n;
};
export const EditNumber: React.FC<IEditNumber> = ({ isEdit, onChange, txt, explain }) => {
    if (isEdit === "edit")
        return <input className='no-print' type="text" onChange={(e) => onChange(parseNumber(e.target.value, txt))} value={txt}></input>
    else return <HideNumber txt={txt} isEdit={isEdit} explain={explain} />
}

interface ISelectText extends IEditText {
    options: string[];
}

export const SelectText: React.FC<ISelectText> = ({ isEdit, onChange, txt, explain, options }) => {
    const [isOpen, setIsOpen] = useState(false);

    if (isEdit === "edit") {
        return <>
            <input onFocus={() => setIsOpen(true)} className='no-print' type="text" onChange={(e) => onChange(e.target.value)} value={txt}></input>
            {isOpen &&
                <span className="SelectTextBlock">
                    {options.map(option => <span className="SelectTextOption" onClick={() => { onChange(option); setIsOpen(false); }}>{option}</span>)}
                </span>}
        </>
    }
    else return <HideText txt={txt} isEdit={isEdit} explain={explain} />
}


export default EditText;