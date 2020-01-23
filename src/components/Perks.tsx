import React from 'react';
import { IHooker } from './Character';

export interface Perk extends IHooker {
    name: string;
    skill: string;
    level: 1 | 2 | 3 | 4 | 5;
    cost(): number;
    description(): JSX.Element;
}

interface IPerk {
    name: string;
    skill: string;
    level: 1 | 2 | 3 | 4 | 5;
    description: string;
}

export class PerkTemplate implements Perk {
    name: string;
    skill: string;
    level: 1 | 2 | 3 | 4 | 5;
    applyTo: string;
    amount: number;
    _description: string;
    description(): JSX.Element {
        return <>{this._description}</>;
    }
    cost(): number {
        return this.level * 10;
    }
    constructor(data: IPerk, hook: IHooker) {
        this.name = data.name;
        this.skill = data.skill;
        this.level = data.level;
        this._description = data.description;
        this.applyTo = hook.applyTo;
        this.amount = hook.amount;
    }
}