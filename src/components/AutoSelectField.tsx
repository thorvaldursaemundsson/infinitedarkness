import React, { useState } from 'react';
import { Paper, TextField } from '@material-ui/core';

interface IAutoSelectFieldProps {
    values: string[];
    value: string;
    onChange: (n: string) => void;
}



const AutoSelectField: React.FC<IAutoSelectFieldProps> = ({ values, value, onChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [toolTip, setToolTip] = useState('');
    const intersectString = (a: string, b: string): boolean => {
        const al = a.toLowerCase();
        const bl = b.toLowerCase();
        if (al === bl) return true;
        if (al.startsWith(bl) || bl.startsWith(al)) return true;
        if (al.endsWith(bl) || bl.endsWith(al)) return true;
        if (al.match(bl) || bl.match(al)) return true;
        return false;
    }
    const pressEnter = (e:React.KeyboardEvent<HTMLDivElement>):void => {
        setToolTip(e.key);
        switch (e.key.toUpperCase()) {
            case 'ENTER' :
            case 'ESCAPE' : setIsOpen(false); return;
            default : setIsOpen(true); return;
        }
    };
    return <>
        <TextField title={toolTip} value={value} onChange={(e) => onChange(e.target.value)} onFocus={() => setIsOpen(true)} onKeyUp={(e) => pressEnter(e)} ></TextField>
        {(isOpen) && <Paper style={{position:'absolute', background:'white', zIndex:999}}>
            {values.map(v => {
                if (!intersectString(v, value)) return null;
                else return (<Paper style={{background:'white', cursor:'pointer', margin:'6px', padding:'4px'}} onClick={() => {onChange(v); setIsOpen(false)}}>{v}</Paper>)
            })}
        </Paper>}
    </>
}

export default AutoSelectField;