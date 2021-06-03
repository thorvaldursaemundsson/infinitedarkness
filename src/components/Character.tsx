import { Skill } from "./general/Skills";
import { Perk } from './general/Perks';
import { Trait } from "./traits/Traits";
import { GetSkillList } from "./general/GetSkillList";
import { race } from "./races/Races";
import { humansData } from "./races/Humans";
import { merlionsData } from "./races/Merlions";
import { nekovianData } from "./races/Nekovians";
import { shambrasData } from "./races/Shambras";
import { synthsData } from "./races/Synth";

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

export type CharacterSize = 'minute' | 'tiny' | 'small' | 'medium' | 'large' | 'huge' | 'gigantic' | 'colossal' | 'titanic';
export const CharacterSizes = ['minute', 'tiny', 'small', 'medium', 'large', 'huge', 'gigantic', 'colossal', 'titanic'];

export interface ICharacter {
    name: string;
    species: race;
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
    size: CharacterSize;
    bonusExp?: number | undefined;
}

export class Character {
    name: string;
    species: race;
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
    size: CharacterSize;
    bonusExp: number;
    constructor(copy?: ICharacter) {
        this.name = (copy && copy.name) || "";
        this.species = (copy && copy.species) || 'human';
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
        this.size = (copy && copy.size) || 'medium';
        this.bonusExp = (copy && copy.bonusExp && copy.bonusExp) || 0;
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

    public getCalculatedPointsUsed() {
        return this.getCharacterPointsCostPerks() + this.getCharacterPointsCostSkills() + this.getCharacterPointsCostTraits();
    }

    public getCalculatedPointsUsedPointBuy() {
        return this.getCalculatedPointsUsed() + this.getCharacterPointsCostAttribute();
    }

    public getCalculatedPointsLeft() {
        return this.getStartingPointsAvailable() - this.getCalculatedPointsUsed();
    }

    private getSkillLevel(skillName: string) {
        var skill = this.skills.find(s => s.name === skillName);
        if (skill !== undefined) return skill.level;
        return 0;
    }

    public getDamageAbsorption() {
        return this.getHook('damageAbsorption');
    }

    public getActiveDefense() {
        const combat = this.getSkillLevel('combat');
        const acrobatics = this.getSkillLevel('acrobatics');
        return this.getPassiveDefense() + Math.max(combat, acrobatics) + this.getHook('activedefense');
    }

    public getPassiveDefense() {
        return this.getBaseDefense() + Math.max(this.agility, 0) + this.getHook('passivedefense');
    }

    private getDefenseFromSize() {
        switch (this.size) {
            case 'minute': return 16;
            case 'tiny': return 14;
            case 'small': return 12;
            case 'medium': return 10;
            case 'large': return 8;
            case 'huge': return 6;
            case 'gigantic': return 2;
            case 'colossal': return -4;
            case 'titanic': return -10;
        }
    }

    public getBaseDefense() {
        return this.getDefenseFromSize() + this.getHook('basedefense');
    }

    public getBaseCarryingCapacity() {
        return (this.strength + 1 + this.getHook('carryingCapacity')) * 4;
    }

    public getSizeSpeed() {
        switch (this.size) {
            case 'minute': return 3;
            case 'tiny': return 4;
            case 'small': return 5;
            case 'medium': return 6;
            case 'large': return 7;
            case 'huge': return 8;
            case 'gigantic': return 10;
            case 'colossal': return 12;
            case 'titanic': return 15;
        }
    }

    public getSpeedFromSkill() {
        let athletics = this.getSkillLevel('athletics');
        if (athletics >= 18) return 3;
        else if (athletics >= 12) return 2;
        else if (athletics >= 6) return 1;
        return 0;
    }

    public getSpeedFromSpecies() {
        switch (this.species) {
            case 'human': return 1;
            case 'merlion': return 1;
            case 'nekovian': return 2;
            case 'shambras': return 0;
            case 'synth': return 0;
            default: return 0;
        }
    }

    public getBaseSpeed(): number {
        const base = this.getSpeedFromSpecies();

        const size = this.getSizeSpeed();

        const skill = this.getSpeedFromSkill();

        const hookBonus = this.getHook('speed');

        return base + size + skill + hookBonus;

    }


    public getStartingPointsAvailable(): number {

        switch (this.species) {
            case 'human': return humansData.experiencePoints(this.age) + this.bonusExp; 
            case 'merlion': return merlionsData.experiencePoints(this.age) + this.bonusExp; 
            case 'shambras': return shambrasData.experiencePoints(this.age) + this.bonusExp;
            case 'nekovian': return nekovianData.experiencePoints(this.age) + this.bonusExp;
            case 'synth': return synthsData.experiencePoints(this.age) + this.bonusExp;
        }
    }

    public getExperienceMultiplier(): number {
        switch (this.species) {
            case 'human': return Math.max(humansData.experienceMultipler(this.age) + this.getHook('experienceMultiplier'), 1);
            case 'merlion': return Math.max(merlionsData.experienceMultipler(this.age) + this.getHook('experienceMultiplier'), 1);
            case 'shambras': return Math.max(shambrasData.experienceMultipler(this.age) + this.getHook('experienceMultiplier'), 1);
            case 'nekovian': return Math.max(nekovianData.experienceMultipler(this.age) + this.getHook('experienceMultiplier'), 1);
            case 'synth': return Math.max(synthsData.experienceMultipler(this.age) + this.getHook('experienceMultiplier'), 1);
        }

    }
    public getLife() {
        let athleticsBonus = 0;
        const athletics = this.getSkillLevel('athletics');
        if (athletics >= 9) athleticsBonus++;
        if (athletics >= 18) athleticsBonus++;

        return Math.max(athleticsBonus + this.strength + this.endurance * 2 + this.getHook('life'), 1);
    }

    public getMana() {
        let spellsBonus = 0;
        const spells = this.getSkillLevel('spells');
        if (spells >= 9) spellsBonus++;
        if (spells >= 18) spellsBonus++;
        return Math.max(spellsBonus + this.endurance + this.willpower * 2 + this.getHook('mana'), 1);
    }

    public getMentalHealth() {
        let mentalHealthBonus = 0;
        const empathy = this.getSkillLevel('empathy');
        const survival = this.getSkillLevel('survival');
        if (empathy >= 9) mentalHealthBonus++;
        if (survival >= 9) mentalHealthBonus++;
        return Math.max(mentalHealthBonus + this.willpower * 2 + this.getHook('mentalHealth'), 1);
    }

    public getSequence() {
        return Math.max(this.perception + this.agility + this.getHook('sequence'), 0);
    }

    public getHook(applyTo: string): number {

        return this.sumOr(applyTo, this.perks, 0) + this.sumOr(applyTo, this.traits, 0);
    }

    public explain(what: string): string {
        switch (what) {
            case 'strength': return 'muscle power';
            case 'endurance': return 'stamina';
            case 'agility': return 'speed, coordination';
            case 'perception': return 'seeing, hearing';
            case 'intelligence': return 'brain power';
            case 'willpower': return 'brain stamina';
            case 'life': return 'STR + 2 x END';
            case 'mana': return 'END + 2 x WILL';
            case 'mentalHealth': return 'WILL x 2';
            case 'age': return 'how old';
            case 'damageBonus': return 'STR /5, /4, /3';
            case 'name': return '';
            case 'gender': return '';
            case 'species': return '';
            case 'pointsLeft': return 'points remaining';
            case 'experienceMultiplier': return 'exp bonus';
            case 'basedefense': return 'size';
            case 'passivedefense': return 'agility';
            case 'activedefense': return 'skill';
            case 'sequence': return 'AGI+PER';
            default: return '';
        }
    }

    private sumOr(applyTo: string, sum: IHooker[], or: number): number {
        let s = sum.filter(perk => perk.applyTo === applyTo).map(p => p.amount);
        if (s.length > 0) return s.reduce((a, b) => a + b);
        else return or;
    }
}