import { Skill, GetSkillList } from "./Skills";

interface Technique {
    name: string;
    bonus: string;
    cost: number;
}

const fSum = (n: number): number => {
    let x = 0;
    for (let i = 0; i <= n; i++) {
        x += i;
    }
    return x;
};

interface ICharacter {

    age: number;
    strength: number;
    agility: number;
    endurance: number;
    perception: number;
    willpower: number;
    intelligence: number;
    skills: Skill[];
    techniques: Technique[];
}

export class Character {
    age: number;
    strength: number;
    agility: number;
    endurance: number;
    perception: number;
    willpower: number;
    intelligence: number;
    skills: Skill[];
    techniques: Technique[];
    constructor(copy?: ICharacter) {
        this.strength = copy && copy.strength || 5;
        this.agility = copy && copy.agility || 5;
        this.endurance = copy && copy.endurance || 5;
        this.perception = copy && copy.perception || 5;
        this.willpower = copy && copy.willpower || 5;
        this.intelligence = copy && copy.intelligence || 5;
        this.skills = copy && copy.skills || GetSkillList();
        this.techniques = [];
        this.age = copy && copy.age || 18;
    }
    public getCalculatedPointsUsed() {
        return fSum(this.strength) * 4
            + fSum(this.agility) * 4
            + fSum(this.endurance) * 4
            + fSum(this.perception) * 4
            + fSum(this.willpower) * 4
            + fSum(this.intelligence) * 4
            + this.skills.map(s => fSum(s.level)).reduce((a, b) => a + b, 0);
    }
    public getStartingPointsAvailable() {
        let p = 200;
        p += Math.min(this.age, 18) * 20;
        if (this.age > 18) p += Math.min(this.age - 18, 26 - 18) * 15;
        if (this.age > 26) p += Math.min(this.age - 26, 40 - 26) * 10;
        if (this.age > 40) p += Math.min(this.age - 40, 70 - 40) * 5;
        return p;
    }

    public getMaximumPointsAvailable() {
        return this.getStartingPointsAvailable() * 2;
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