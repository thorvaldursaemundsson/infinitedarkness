import { Skill, GetSkillList } from "./Skills";
import { Perk } from './Perks';

const fSum = (n: number): number => {
    let x = 0;
    for (let i = 0; i <= n; i++) {
        x += i;
    }
    return x;
};

export interface ICharacter {
    name: string;
    species: string;
    gender: string;
    background: string;
    age: number;
    strength: number;
    agility: number;
    endurance: number;
    perception: number;
    willpower: number;
    intelligence: number;
    skills: Skill[];
    perks: Perk[];
}

export class Character {
    name: string;
    species: string;
    gender: string;
    age: number;
    background: string;
    strength: number;
    agility: number;
    endurance: number;
    perception: number;
    willpower: number;
    intelligence: number;
    skills: Skill[];
    perks: Perk[];
    constructor(copy?: ICharacter) {
        this.name = (copy && copy.name) || "";
        this.species = (copy && copy.species) || "";
        this.gender = (copy && copy.gender) || "";
        this.background = (copy && copy.background) || "";
        this.strength = (copy && copy.strength) || 4;
        this.agility = (copy && copy.agility) || 4;
        this.endurance = (copy && copy.endurance) || 4;
        this.perception = (copy && copy.perception) || 4;
        this.willpower = (copy && copy.willpower) || 4;
        this.intelligence = (copy && copy.intelligence) || 4;
        this.skills = (copy && copy.skills) || GetSkillList();
        if (copy !== undefined && copy.perks !== undefined) this.perks = copy.perks;
        else this.perks = [];
        this.age = (copy && copy.age) || 24;
    }


    public getCalculatedPointsUsed() {
        const perkCost = this.perks.length > 0 ? this.perks.map(p=>p.cost).reduce((a,b) => a+b) : 0;
        return fSum(this.strength) * 4
            + fSum(this.agility) * 4
            + fSum(this.endurance) * 4
            + fSum(this.perception) * 4
            + fSum(this.willpower) * 4
            + fSum(this.intelligence) * 4
            + this.skills.map(s => fSum(s.level)).reduce((a, b) => a + b, 0)
            + perkCost;
    }
    public getStartingPointsAvailable() {
        let p = 300;
        p += Math.min(this.age, 18) * 16;
        if (this.age > 18) p += Math.min(this.age - 18, 26 - 18) * 12;
        if (this.age > 26) p += Math.min(this.age - 26, 40 - 26) * 8;
        if (this.age > 40) p += Math.min(this.age - 40, 70 - 40) * 4;
        return p;
    }

    public getMaximumPointsAvailable() {
        return this.getStartingPointsAvailable() * 2;
    }

    public getExperienceMultiplier() {
        if (this.age < 16) return 3;
        if (this.age < 20) return 2.5;
        if (this.age < 24) return 2;
        if (this.age < 28) return 1.75;
        if (this.age < 32) return 1.5;
        if (this.age < 36) return 1.25;
        return 1;
    }

    public getHitpoints() {
        return this.strength + this.endurance * 2;
    }

    public getMana() {
        return this.endurance + this.willpower * 2
    }

    public getDamageBonusSmall() {
        return Math.floor(this.strength / 4);
    }

    public getDamageBonusMedium() {
        return Math.floor(this.strength / 3);
    }
    public getDamageBonusLarge() {
        return Math.floor(this.strength / 2);
    }
}