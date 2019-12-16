import {Perk} from './../Perks';
import React from 'react';
import TextField from '@material-ui/core/TextField';

export class Generic10Perk implements Perk
{
    name: string;    
    skill: string;
    cost: number;
    description(): JSX.Element {
        return <TextField />;
    }
    constructor(name: string, skill:string){
        this.name = name;
        this.skill = skill;
        this.cost = 10;
    }
    
}