import React, { useState } from 'react';
import { Paper, Button } from '@material-ui/core';
import { Label } from './Label';

interface FieldProps {
    label: string;
    value: number;
    max?: number;
    min?: number;
    modifier?: number;
    enableDice?: boolean;
    onChange: (n: number) => void;
}


const rand = (min: number, max: number) => {
    return Math.round(Math.random() * (max - min) + min);
};

const d10 = () => rand(1, 10);
//results[0] + ' + ' + results[1] + ' ' + 
export const Field: React.FC<FieldProps> = ({ label, value, onChange, max, min, modifier, enableDice, children }) => {
    const [results, setResults] = useState([0, 0]);
    const [viewChildren, setViewChildren] = useState(false);
    let ma = max !== undefined ? max : 10;
    let mi = min !== undefined ? min : 1;
    let total = modifier !== undefined ? value + modifier : value;
    enableDice = enableDice === undefined ? false : enableDice;
    return <Paper>
        <Label>{label}:</Label> <Label>{value} {modifier !== undefined ? ` | ${modifier} | ${total}` : null}</Label>
        <Button onClick={() => onChange(ma <= value ? value : value + 1)}>+</Button>
        <Button onClick={() => onChange(mi >= value ? value : value - 1)}>-</Button>
        {enableDice ? <Button onClick={() => setResults([d10(), d10()])}>&</Button> : null}
        {results[0] !== 0 ? `(${total}) + d10(${results[0]}) + d10(${results[1]}) = ${total + results[0] + results[1]}`
            : null}
            {children !== null ? viewChildren === true ? 
                <Paper><Button onClick={() => setViewChildren(false)}>X</Button>{children} </Paper>
                : <Button onClick={() => setViewChildren(true)}>?</Button> 
            : null}
    </Paper>
}