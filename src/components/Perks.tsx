import gun1 from './perks/gun1.json';
import gun2 from './perks/gun2.json';
import gun3 from './perks/gun3.json';
import gun4 from './perks/gun4.json';
import React from 'react';
import { GetSkillList } from './Skills';
import { IHooker } from './Character.js';


export interface Perk extends IHooker {
    name: string;
    skill: string;
    level:1|2|3|4|5;
    cost():number;
    description(): JSX.Element;
}

interface IPerk {
    name: string;
    skill: string;
    level:1|2|3|4|5;
    description: string;
}

class PerkTemplate implements Perk {
    name: string;
    skill: string;
    level:1|2|3|4|5;
    applyTo: string;
    amount: number;
    _description: string;
    description(): JSX.Element {
        return <>{this._description}</>;
    }
    cost() :number {
        return this.level*10;
    }
    constructor(data: IPerk, hook: IHooker) {
        this.name = data.name;
        this.skill = data.skill;
        this.level = data.level;
        this._description = data.description;
        this.applyTo= hook.applyTo;
        this.amount = hook.amount;
    }
}
const Skills = GetSkillList();
export const GetPerkList = (): Perk[] => {
    return [

    ].sort(sortPerk);
}

const sortPerk = (prevPerk: Perk, nextPerk: Perk) => {
    if (prevPerk.skill !== nextPerk.skill) return prevPerk.skill > nextPerk.skill ? 1 : -1;
    else return prevPerk.cost > nextPerk.cost ? 1 : -1;
};