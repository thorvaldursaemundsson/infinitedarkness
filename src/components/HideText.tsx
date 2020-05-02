import React from "react";

interface IHideText {
    isEdit: "edit" | "print" | "explain" | "hide";
    explain: string;
    txt: string | number;
}
export const HideText: React.FC<IHideText> = ({ isEdit, txt, explain }) => {
    if (isEdit === "edit")
        return <>{txt}</>;
    else if (isEdit === "explain")
        return <>{explain}</>;
    else return null;
}

interface IEditText extends IHideText {
    onChange: (str: string) => void;
}

const EditText: React.FC<IEditText> = ({ isEdit, onChange, txt, explain }) => {
    if (isEdit === "edit")
        return <input type="text" onChange={(e) => onChange(e.target.value)} value={txt}></input>
    else return <HideText txt={txt} isEdit={isEdit} explain={explain} />
}



export default EditText;