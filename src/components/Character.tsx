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

    public getMaxStrength() {
        switch (this.species) {
            case 'human':
                if (this.age < 14) return Math.min(Math.floor(this.age / 18) + 1, 11);
                if (this.age < 26) return 11;
                if (this.age < 36) return 12;
                if (this.age < 50) return 10;
                if (this.age < 66) return 9;
                if (this.age < 90) return 8;
                return 7;
            case 'merlion':
                if (this.age < 12) return Math.min(Math.floor(this.age / 14) + 1, 10);
                if (this.age < 26) return 10;
                if (this.age < 40) return 11;
                if (this.age < 70) return 10;
                if (this.age < 90) return 9;
                return 8;
            case 'klackon':
                return 4 + Math.floor(Math.sqrt(this.age));
            default: return 10;
        }
    }
    public getMaxAgility() {
        switch (this.species) {
            case 'human':
                return 10;
            case 'merlion':
                return 12;
            case 'klackon':
                return 9;
            default: return 10;
        }
    }
    public getMaxEndurance() {
        switch (this.species) {
            case 'human':
                if (this.age < 14) return Math.min(Math.floor(this.age / 18) + 2, 11);
                if (this.age < 26) return 12;
                if (this.age < 36) return 13;
                if (this.age < 50) return 12;
                if (this.age < 66) return 11;
                if (this.age < 90) return 10;
                return 9;
            case 'merlion':
                if (this.age < 12) return Math.min(Math.floor(this.age / 14) + 1, 10);
                if (this.age < 26) return 10;
                if (this.age < 40) return 11;
                if (this.age < 70) return 10;
                if (this.age < 90) return 9;
                return 8;
            case 'klackon':
                return 12
            default: return 10;
        }
    }
    public getMaxPerception() {
        switch (this.species) {
            case 'human':
                if (this.age < 18) return Math.min(Math.floor(this.age / 18) + 1, 13);
                if (this.age < 26) return 12;
                if (this.age < 30) return 11;
                if (this.age < 36) return 9;
                if (this.age < 42) return 8;
                if (this.age < 50) return 7;
                return 6;
            case 'merlion':
                return 11;
            case 'klackon':
                return 12;
            default: return 10;
        }
    }
    public getMaxWillpower() {
        switch (this.species) {
            case 'human':
                return 12;
            case 'merlion':
                return 8;
            case 'klackon':
                return 9;
            default: return 10;
        }
    }
    public getMaxIntelligence() {
        switch (this.species) {
            case 'human':
                return 10;
            case 'merlion':
                return 16;
            case 'klackon':
                return 5 + Math.floor(Math.sqrt(Math.sqrt(this.age)));
            default: return 10;
        }
    }

    public getCalculatedPointsUsed() {
        const perkCost = this.perks.length > 0 ? this.perks.map(p => p.cost).reduce((a, b) => a + b) : 0;
        return fSum(this.strength) * 4
            + fSum(this.agility) * 4
            + fSum(this.endurance) * 4
            + fSum(this.perception) * 4
            + fSum(this.willpower) * 4
            + fSum(this.intelligence) * 4
            + this.skills.map(s => fSum(s.level)).reduce((a, b) => a + b, 0)
            + perkCost;
    }

    private characterPoints(start: number, agePhases: number[], expPhases: number[]): number {
        let p = start;
        if (agePhases.length !== expPhases.length) console.error('age Phases and expPhases must be of equal length!');
        let prevPhase = 0;
        for (var phase in agePhases) {
            let currentAgePhase = agePhases[phase];
            let expPhase = expPhases[phase];

            let ageRange = currentAgePhase - prevPhase;
            if (this.age > prevPhase) p += Math.min(this.age - prevPhase, ageRange) * expPhase;
            prevPhase = currentAgePhase;
        }

        return p;
    }

    private characterPointsHuman() {
        return this.characterPoints(300, [18, 26, 40, 70], [16, 12, 8, 4]);
    }

    private characterPointsMerlion() {
        return this.characterPoints(200, [16, 24, 50, 90], [20, 16, 12, 6]);
    }

    private characterPointsKlackon() {
        return this.characterPoints(100, [10, 20, 40, 80, 160, 320, 640], [6, 8, 10, 12, 16, 18, 18]);
    }



    public getStartingPointsAvailable() {

        switch (this.species) {
            case 'human': return this.characterPointsHuman();
            case 'merlion': return this.characterPointsMerlion();
            case 'klackon': return this.characterPointsKlackon();
            default: return this.characterPointsHuman();
        }
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