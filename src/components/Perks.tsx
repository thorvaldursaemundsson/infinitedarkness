import { IHooker } from './Character';

export interface Perk extends IHooker {
    name: string;
    skill: string;
    level: 1 | 2 | 3 | 4 | 5;
    cost(): number;
    description: string;
    results?: string[]
}

interface IPerk {
    name: string;
    skill: string;
    level: 1 | 2 | 3 | 4 | 5;
    description: string;
    results?: string[]
}
const def: IHooker = {
    amount: 0,
    applyTo: ''
};
export class PerkTemplate implements Perk {
    name: string;
    skill: string;
    level: 1 | 2 | 3 | 4 | 5;
    applyTo: string;
    amount: number;
    description: string;
    results?: string[]
    
    cost(): number {
        return this.level * 10;
    }
    constructor(data: IPerk, hook: IHooker = def) {
        this.name = data.name;
        this.skill = data.skill;
        this.level = data.level;
        this.description = data.description;
        this.applyTo = hook.applyTo;
        this.amount = hook.amount;
        this.results = data.results;
    }
}