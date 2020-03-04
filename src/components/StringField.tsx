import React from 'react';
import { TextField } from '@material-ui/core';
import { Label } from './Label';

interface FieldProps {
    label: string;
    value: string;
    enableEdit?: boolean;
    onChange: (n: string) => void;
}

const StringField: React.FC<FieldProps> = (props: FieldProps) => {
    if (props.enableEdit !== true) return <div><Label>{props.label}:</Label><Label>{props.value}</Label></div>
    else return <div>
        <Label>{props.label}:</Label>
        <TextField value={props.value} onChange={(e) => props.onChange(e.target.value)} >{props.value}</TextField>
    </div>
}

export default StringField;