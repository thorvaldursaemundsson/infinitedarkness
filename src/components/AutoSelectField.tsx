import React, { useState } from 'react';
import { Paper, TextField } from '@material-ui/core';
import { Label } from './Label';

interface IAutoSelectFieldProps {
    values: string[];
    value: string;
    onChange: (n: string) => void;
}



const AutoSelectField: React.FC<IAutoSelectFieldProps> = ({ values, value, onChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const intersectString = (a: string, b: string): boolean => {
        const al = a.toLowerCase();
        const bl = b.toLowerCase();
        if (al === bl) return false;
        if (al.startsWith(bl) || bl.startsWith(al)) return true;
        if (al.endsWith(bl) || bl.endsWith(al)) return true;
        return false;
    }
    return <>
        <TextField value={value} onChange={(e) => onChange(e.target.value)} onFocus={() => setIsOpen(true)} ></TextField>
        {(isOpen && value != '') && <Paper style={{position:'absolute', background:'white', zIndex:999}}>
            {values.map(v => {
                if (!intersectString(v, value)) return null;
                else return (<Paper style={{background:'white', cursor:'pointer', margin:'6px', padding:'4px'}} onClick={() => {onChange(v); setIsOpen(false)}}>{v}</Paper>)
            })}
        </Paper>}
    </>
}

export default AutoSelectField;