import React from 'react';
import { Paper, Button } from '@material-ui/core';
import { Label } from './Label';

interface FieldProps {
    label: string;
    value: number;
    max?: number;
    min?: number;
    modifier?: number;
    onChange: (n: number) => void;
}

export const Field: React.FC<FieldProps> = ({ label, value, onChange, max, min, modifier }) => {
    let ma = max !== undefined ? max : 10;
    let mi = min !== undefined ? min : 1;
    let total = modifier !== undefined ? value + modifier : value;
    return <Paper>
        <Label>{label}: {value} {modifier !== undefined ? '+ ' + modifier + ' = ' + total : null}</Label>
        <Button onClick={() => onChange(ma <= value ? value : value + 1)}>+</Button>
        <Button onClick={() => onChange(mi >= value ? value : value - 1)}>-</Button>
    </Paper>
}