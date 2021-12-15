import { SkillName } from "../general/Skills";

interface Item {
    /** grams */
    weight: number;
    value: number;
    description?: string;
    longDescription?: string | undefined;
    name: string;
    relatedSkill:SkillName;
}

export interface IQuality {
    label: string;
    effect: number;
    valueModifier: number;
}

export interface ICondition {
    label: string;
    effect: number;
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


export default Item;