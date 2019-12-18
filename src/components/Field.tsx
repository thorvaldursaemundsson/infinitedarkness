import React, { useState } from 'react';
import { Paper, Button } from '@material-ui/core';
import { Label } from './Label';

interface FieldProps {
    label: string;
    value: number;
    max?: number;
    min?: number;
    modifier?: number;
    enableButtons?: boolean;
    onChange: (n: number) => void;
}


const rand = (min: number, max: number) => {
    return Math.round(Math.random() * (max - min) + min);
};

const d10 = () => rand(1, 10);
export const Field: React.FC<FieldProps> = ({ label, value, onChange, max, min, modifier, enableButtons, children }) => {
    const [viewChildren, setViewChildren] = useState(false);
    let ma = max !== undefined ? max : 10;
    let mi = min !== undefined ? min : 1;
    let total = modifier !== undefined ? value + modifier : value;
    return <Paper className="extraPadding">
        <Label>{label}:</Label> <Label>{value} {modifier !== undefined ? ` | ${modifier} | ${total}` : null}</Label>
        {enableButtons === true ? <Button size="small" variant="contained" onClick={() => onChange(ma <= value ? value : value + 1)}>+</Button> : null}
        {enableButtons === true ? <Button size="small" variant="contained" onClick={() => onChange(mi >= value ? value : value - 1)}>-</Button> : null}

        {children !== undefined ? viewChildren === true ?
            <Paper><Button size="small" variant="contained" onClick={() => setViewChildren(false)}>X</Button>{children} </Paper>
            : (enableButtons === true ? <Button size="small" variant="contained" onClick={() => setViewChildren(true)}>?</Button> : null)
            : null}
    </Paper>
}