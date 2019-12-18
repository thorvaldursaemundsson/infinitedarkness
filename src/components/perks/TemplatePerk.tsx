import {Perk} from './../Perks';
import React from 'react';
import TextField from '@material-ui/core/TextField';

export class TemplatePerk implements Perk
{
    name: string;    
    skill: string;
    cost: number;
    description(): JSX.Element {
        return <TextField />;
    }
    constructor(name: string, skill:string, cost: number){
        this.name = name;
        this.skill = skill;
        this.cost = cost;
    }
    
}