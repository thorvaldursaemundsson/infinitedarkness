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

interface CharacterSizeMod {
    size: CharacterSize;
    strengthMod: number;
    secondaryMod: number;
    damageAbsorbtion: number;
    speedBase: number;
    averageHeight: [number, number];
    averageWeight: [number, number];
    consumption: number;
    lifeMod: number;
}

export type CharacterSize = 'minute' | 'tiny' | 'small' | 'medium' | 'large' | 'huge' | 'gigantic' | 'colossal' | 'titanic';
export const CharacterSizes = ['minute', 'tiny', 'small', 'medium', 'large', 'huge', 'gigantic', 'colossal', 'titanic'];

export const CharacterSizeMods: CharacterSizeMod[] = [
    {
        size: 'minute',
        strengthMod: -4,
        secondaryMod: +8,
        damageAbsorbtion: 0,
        speedBase: 3,
        averageHeight: [60, 100],
        averageWeight: [10, 30],
        consumption: 1,
        lifeMod: -3,
    },
    {
        size: 'tiny',
        strengthMod: -2,
        secondaryMod: +4,
        damageAbsorbtion: 0,
        speedBase: 4,
        averageHeight: [90, 130],
        averageWeight: [25, 40],
        consumption: 1.5,
        lifeMod: -2,
    },
    {
        size: 'small',
        strengthMod: -1,
        secondaryMod: +2,
        damageAbsorbtion: 0,
        speedBase: 5,
        averageHeight: [120, 160],
        averageWeight: [35, 65],
        consumption: 2,
        lifeMod: -1,
    },
    {
        size: 'medium',
        strengthMod: 0,
        secondaryMod: 0,
        damageAbsorbtion: 0,
        speedBase: 6,
        averageHeight: [150, 190],
        averageWeight: [60, 110],
        consumption: 2.5,
        lifeMod: 0,
    },
    {
        size: 'large',
        strengthMod: +1,
        secondaryMod: -2,
        damageAbsorbtion: 0,
        speedBase: 7,
        averageHeight: [180, 250],
        averageWeight: [90, 160],
        consumption: 3,
        lifeMod: 1,
    },
    {
        size: 'huge',
        strengthMod: +3,
        secondaryMod: -4,
        damageAbsorbtion: 1,
        speedBase: 8,
        averageHeight: [240, 300],
        averageWeight: [150, 300],
        consumption: 4,
        lifeMod: 2,
    },
    {
        size: 'gigantic',
        strengthMod: +6,
        secondaryMod: -8,
        damageAbsorbtion: 2,
        speedBase: 9,
        averageHeight: [290, 350],
        averageWeight: [280, 500],
        consumption: 6,
        lifeMod: 4,
    },
    {
        size: 'colossal',
        strengthMod: +10,
        secondaryMod: -10,
        damageAbsorbtion: 3,
        speedBase: 10,
        averageHeight: [330, 450],
        averageWeight: [480, 1000],
        consumption: 10,
        lifeMod: 8,
    },
    {
        size: 'titanic',
        strengthMod: +16,
        secondaryMod: -12,
        damageAbsorbtion: 4,
        speedBase: 11,
        averageHeight: [420, 600],
        averageWeight: [900, 2000],
        consumption: 15,
        lifeMod: 16,
    },
];

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

    public getSkillLevel(skillName: string) {
        var skill = this.skills.find(s => s.name === skillName);
        if (skill !== undefined) return skill.level;
        return 0;
    }

    public getDamageAbsorption() {
        const f = CharacterSizeMods.find(s => s.size === this.size);
        if (f !== undefined) {
            return f.damageAbsorbtion + this.getHook('damageAbsorption');
        }
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


    public static findDefenseFromSize(size: CharacterSize): number {
        const f = CharacterSizeMods.find(s => s.size === size);
        if (f !== undefined) {
            return f.secondaryMod;
        }
        else throw new Error('Missing character size');
    }

    private getDefenseFromSize() {
        return 10 + Character.findDefenseFromSize(this.size);
    }

    public getBaseDefense() {
        return this.getDefenseFromSize() + this.getHook('basedefense');
    }

    public getBaseCarryingCapacity() {
        return (this.strength + 1 + this.getHook('carryingCapacity')) * 4;
    }

    public static findSpeedFromSize(size: CharacterSize): number {
        const f = CharacterSizeMods.find(s => s.size === size);
        if (f !== undefined) {
            return f.speedBase;
        }
        else throw new Error('Missing character size');
    }

    public static findLifeFromSize(size: CharacterSize): number {
        const f = CharacterSizeMods.find(s => s.size === size);
        if (f !== undefined) {
            return f.lifeMod;
        }
        else throw new Error('Missing character size');
    }

    public getSizeSpeed() {
        return Character.findSpeedFromSize(this.size);
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

        return Character.getStartingPointsAvailable(this.age, this.species) + this.bonusExp;
    }

    public static getStartingPointsAvailable(age: number, species: race): number {

        switch (species) {
            case 'human': return humansData.experiencePoints(age);
            case 'merlion': return merlionsData.experiencePoints(age);
            case 'shambras': return shambrasData.experiencePoints(age);
            case 'nekovian': return nekovianData.experiencePoints(age);
            case 'synth': return synthsData.experiencePoints(age);
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

        return Math.max(athleticsBonus + this.strength + this.endurance * 2 + this.getHook('life') + this.getLifeModSize(), 1);
    }

    public getLifeModSize(): number {
        return Character.findLifeFromSize(this.size);
    }

    public getMana() {
        let spellsBonus = 0;
        const spells = this.getSkillLevel('spells');
        if (spells >= 6) spellsBonus++;
        if (spells >= 12) spellsBonus++;
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