import { SkillName } from "../general/Skills";

export type qualityMod = 3 | 2 | 1 | 0 | -1 | -2 | -3 | -4;
export type conditionMod = 2 | 1 | 0 | -1 | -2 | -3 | -4;

interface Item {
    /** grams */
    weight: number;
    value: number;
    description?: string;
    longDescription?: string | undefined;
    name: string;
    relatedSkill: SkillName;
    condition?: undefined | ICondition;
    quality?: undefined | IQuality;
}

export interface IQuality {
    label: string;
    effect: number;
    valueModifier: number;
}

export interface ICondition {
    label: string;
    /** bonus or penalty to skill roll */
    effect: number;
    /** factor of value */
    valueModifier: number;
}

export const Condition: ICondition[] = [
    {
        label: 'Pristine',
        effect: +2,
        valueModifier: 1
    },
    {
        label: 'Intact',
        effect: +1,
        valueModifier: .9
    },
    {
        label: 'Normal',
        effect: 0,
        valueModifier: .8
    },
    {
        label: 'Used',
        effect: -1,
        valueModifier: .7
    },
    {
        label: 'Worn',
        effect: -2,
        valueModifier: .6
    },
    {
        label: 'Damaged',
        effect: -3,
        valueModifier: .5
    },
    {
        label: 'Broken',
        effect: -4,
        valueModifier: .5
    }
];

export const Quality: IQuality[] = [
    {
        label: 'Superb',
        effect: 3,
        valueModifier: 10
    },
    {
        label: 'Great',
        effect: 2,
        valueModifier: 3
    },
    {
        label: 'Good',
        effect: 1,
        valueModifier: 1.5
    },
    {
        label: 'Normal',
        effect: 0,
        valueModifier: 1
    },
    {
        label: 'Poor',
        effect: -1,
        valueModifier: .9
    },
    {
        label: 'Bad',
        effect: -2,
        valueModifier: .7
    },
    {
        label: 'Awful',
        effect: -3,
        valueModifier: .5
    },
    {
        label: 'Trash',
        effect: -4,
        valueModifier: .4
    },
];

export interface IDamageDice {
    sides: number;
    numberOfDice: number;
    bonus: number;
}

/**
* 
* @param n number of dice
* @param s sides per dice
* @param b flat bonus damage
* @returns 
*/
export const D = (n: number, s: number): IDamageDice => {
    return {
        sides: s, numberOfDice: n, bonus: 0
    };
}

export const writeDamageDice = (d: IDamageDice, b: number) => {
    if (d.bonus + b === 0) return `${d.numberOfDice}d${d.sides}`;
    else if (d.bonus + b > 0) return `${d.numberOfDice}d${d.sides} + ${d.bonus + b}`;
    if (d.bonus + b < 0) return `${d.numberOfDice}d${d.sides} - ${Math.abs(d.bonus + b)}`;
}



export default Item;