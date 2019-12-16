import gun1 from './perks/gun1.json';
import gun2 from './perks/gun2.json';
import gun3 from './perks/gun3.json';
import gun4 from './perks/gun4.json';
import { JSXElement } from '@babel/types';
import React from 'react';
import { GetSkillList } from './Skills';
import { Generic10Perk } from './perks/Generic10';


export interface Perk {
    name: string;
    skill: string;
    cost: number;
    description(): JSX.Element;
}

interface IPerk {
    name: string;
    skill: string;
    cost: number;
    description: string;
}

class PerkTemplate implements Perk{
    name: string;
    skill: string;
    cost: number;
    _description:string;
    description():JSX.Element  {
        return <>{this._description}</>;
    }
    constructor(data:IPerk) {
        this.name = data.name;
        this.skill = data.skill;
        this.cost = data.cost;
        this._description = data.description;
    }
}
const Skills =GetSkillList();
export const GetPerkList = (): Perk[] => {
    
    const generic10All = Skills.map(m => new Generic10Perk("custom "+m.name, m.name))

    return [
        ...generic10All,
        new PerkTemplate({ ...gun1 }),
        new PerkTemplate({ ...gun2 }),
        new PerkTemplate({ ...gun3 }),
        new PerkTemplate({ ...gun4 }),
        
    ].sort(sortPerk);
}

const sortPerk = (prevPerk:Perk, nextPerk:Perk) => {
    if (prevPerk.skill !== nextPerk.skill) return prevPerk.skill > nextPerk.skill ? 1 : -1;
    else return prevPerk.cost > nextPerk.cost ? 1 : -1;
};