export interface Skill {
    name: string;
    attribute: string | 'strength' | 'agility' | 'endurance' | 'perception' | 'willpower' | 'intelligence';
    level: number;
}

export const GetSkillList = (): Skill[] => {
    return [
        {
            name: 'combat',
            attribute: 'agility',
            level:0
        },
        {
            name: 'pilot',
            attribute: 'perception',
            level:0
        },
        {
            name: 'spells',
            attribute: 'intelligence',
            level:0
        },
        {
            name: 'investigation',
            attribute: 'intelligence',
            level:0
        },
        {
            name: 'persuation',
            attribute: 'intelligence',
            level:0
        },
        {
            name: 'intimidation',
            attribute: 'willpower',
            level:0
        },
        {
            name: 'larceny',
            attribute: 'agility',
            level:0
        },
        {
            name: 'stealth',
            attribute: 'agility',
            level:0
        },
        {
            name: 'survival',
            attribute: 'intelligence',
            level:0
        },
        {
            name: 'science',
            attribute: 'intelligence',
            level:0
        },
        {
            name: 'computer',
            attribute: 'intelligence',
            level:0
        },
        {
            name: 'medicine',
            attribute: 'intelligence',
            level:0
        },
        {
            name: 'surgery',
            attribute: 'agility',
            level:0
        },
        {
            name: 'empathy',
            attribute: 'perception',
            level:0
        },
        {
            name: 'subtrefuge',
            attribute: 'perception',
            level:0
        },
        {
            name: 'athletics',
            attribute: 'endurance',
            level:0
        },
        {
            name: 'acrobatics',
            attribute: 'agility',
            level:0
        },
        {
            name: 'search',
            attribute: 'perception',
            level:0
        },
        {
            name: 'slight of hand',
            attribute: 'agility',
            level:0
        },
    ].sort((a, b) => a.attribute < b.attribute ? -1 : 1);
}