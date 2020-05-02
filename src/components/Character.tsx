import { Skill } from "./Skills";
import { Perk } from './Perks';
import { Trait } from "./traits/Traits";
import { GetSkillList } from "./GetSkillList";

export const fSum = (n: number): number => {
    let x = 0;
    for (let i = 0; i <= n; i++) {
        x += i;
    }
    return x;
};

export interface IHooker {
    applyTo: string;
    amount: number;
}

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
    traits: Trait[];
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
    traits: Trait[];
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
        this.traits = (copy && copy.traits) || [];
        if (copy !== undefined && copy.perks !== undefined) this.perks = copy.perks;
        else this.perks = [];
        this.age = (copy && copy.age) || 24;
    }
    public getAttributeValueByName(attribute: string): number {
        switch (attribute) {
            case 'strength': return this.strength;
            case 'agility': return this.agility;
            case 'endurance': return this.endurance;
            case 'perception': return this.perception;
            case 'willpower': return this.willpower;
            case 'intelligence': return this.intelligence;
            default: return 0;
        }
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

    public getCharacterPointsCostPerks() {
        return this.perks.length > 0 ? this.perks.map(p => p.cost()).reduce((a, b) => a + b) : 0;
    }

    public getCharacterPointsCostTraits() {
        return this.traits.length > 0 ? this.traits.map(t => t.cost).reduce((a, b) => a + b) : 0;
    }

    public getCharacterPointsCostSkills() {
        return this.skills.map(s => fSum(s.level)).reduce((a, b) => a + b, 0);
    }

    public getCharacterPointsCostAttribute() {
        const intMultipler = this.species === 'merlion' ? 3 : 4;
        return fSum(this.strength) * 4
            + fSum(this.agility) * 4
            + fSum(this.endurance) * 4
            + fSum(this.perception) * 4
            + fSum(this.willpower) * 4
            + fSum(this.intelligence) * intMultipler;
    }

    public getCalculatedPointsUsed(){
        return this.getCharacterPointsCostPerks() + this.getCharacterPointsCostSkills() + this.getCharacterPointsCostTraits();
    }

    public getCalculatedPointsUsedPointBuy() {
        return this.getCalculatedPointsUsed() + this.getCharacterPointsCostAttribute();
    }

    public getCalculatedPointsLeft() {
        return this.getStartingPointsAvailable() - this.getCalculatedPointsUsed();
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

    private static CharacterPoints(start: number, agePhases: number[], expPhases: number[], age:number) {
        let p = start;
        if (agePhases.length !== expPhases.length) console.error('age Phases and expPhases must be of equal length!');
        let prevPhase = 0;
        for (var phase in agePhases) {
            let currentAgePhase = agePhases[phase];
            let expPhase = expPhases[phase];

            let ageRange = currentAgePhase - prevPhase;
            if (age > prevPhase) p += Math.min(age - prevPhase, ageRange) * expPhase;
            prevPhase = currentAgePhase;
        }

        return p;
    }

    public static CharacterPointsHuman(age:number) {
        return Character.CharacterPoints(0, [18, 26, 40, 80], [10, 8, 6, 4], age);
    }

    public static CharacterPointsMerlion(age:number) {
        return Character.CharacterPoints(0, [16, 28, 50, 90], [10, 8, 6, 4], age);
    }

    public static CharacterPointsKlackon(age:number) {
        return Character.CharacterPoints(0, [10, 20, 40, 80, 160, 320, 640], [4, 5, 6, 8, 10, 11, 12], age);
    }

    public static ExperienceMultiplerHuman(age:number) {
        if (age > 60) return 1;
        if (age > 50) return 1.5;
        if (age > 40) return 2;
        if (age > 35) return 2.5;
        if (age > 30) return 3;
        if (age > 26) return 3.5;
        if (age > 22) return 4;
        if (age > 18) return 4.5;
        return 5;
    }

    public static ExperienceMultiplerMerlion(age:number) {
        if (age > 70) return 1;
        if (age > 60) return 1.5;
        if (age > 50) return 2;
        if (age > 35) return 2.5;
        if (age > 30) return 3;
        if (age > 26) return 3.5;
        if (age > 22) return 4;
        if (age > 18) return 4.5;
        return 5;
    }

    public static ExperienceMultiplerKlackon(age:number) {
        if (age > 100) return 3;
        if (age > 80) return 2.5;
        if (age > 60) return 2;
        if (age > 40) return 1.5;
        return 1;
    }

    private characterPointsHuman() {
        return Character.CharacterPointsHuman(this.age);
    }

    private characterPointsMerlion() {
        return  Character.CharacterPointsMerlion(this.age);
    }

    private characterPointsKlackon() {
        return Character.CharacterPointsKlackon(this.age);
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
        if (this.age < 16) return 3 * + (this.getHook('exp') + 1);
        if (this.age < 20) return 2.5 * + (this.getHook('exp') + 1);
        if (this.age < 24) return 2 * + (this.getHook('exp') + 1);
        if (this.age < 28) return 1.75 * + (this.getHook('exp') + 1);
        if (this.age < 32) return 1.5 * + (this.getHook('exp') + 1);
        if (this.age < 36) return 1.25 * + (this.getHook('exp') + 1);
        return 1;
    }

    public getLife() {
        return this.strength + this.endurance * 2 + this.getHook('life');
    }

    public getMana() {
        return this.endurance + this.willpower * 2 + this.getHook('mana');
    }

    public getFearResistence() {
        return this.willpower + 2 + this.getHook('fear');
    }

    public getDamageBonusSmall() {
        return Math.floor(this.strength / 5) + this.getHook('lightmelee');
    }

    public getDamageBonusMedium() {
        return Math.floor(this.strength / 4) + this.getHook('mediummelee');
    }
    public getDamageBonusLarge() {
        return Math.floor(this.strength / 3) + this.getHook('largemelee');
    }

    public getSequence() {
        return this.perception + this.agility + this.getHook('sequence');
    }

    public getHook(applyTo: string): number {

        return this.sumOr(applyTo, this.perks, 0) + this.sumOr(applyTo, this.traits, 0);
    }

    public explain(what:string):string {
        switch (what){
            case 'strength': return 'muscle power';
            case 'endurance': return 'stamina';
            case 'agility': return 'speed, coordination';
            case 'perception': return 'seeing, hearing';
            case 'intelligence': return 'brain power';
            case 'willpower': return 'brain stamina';
            case 'life': return 'STR + 2x END';
            case 'mana': return 'END +2x WILL';
            case 'fearResistence': return 'WILL + 2';
            case 'age': return 'how old';
            case 'damageBonus': return 'STR /5, /4, /3';
            case 'name': return '';
            case 'gender': return '';
            case 'species': return '';
            case 'pointsLeft': return 'points remaining';
            case 'experienceMultiplier': return 'exp bonus';
            default: return '';
        }
    }

    private sumOr(applyTo: string, sum: IHooker[], or: number): number {
        let s = sum.filter(perk => perk.applyTo === applyTo).map(p => p.amount);
        if (s.length > 0) return s.reduce((a, b) => a + b);
        else return or;
    }
}