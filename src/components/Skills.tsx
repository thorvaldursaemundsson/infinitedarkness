import * as combat from './skills/combat.json';
import * as pilot from './skills/pilot.json';
import * as spells from './skills/spells.json';
import * as investigation from './skills/investigation.json';
import * as intimidation from './skills/intimidation.json';
import * as persuation from './skills/persuation.json';

export interface Skill {
    name: string;
    attribute: string | 'strength' | 'agility' | 'endurance' | 'perception' | 'willpower' | 'intelligence';
    level: number;
    description: string;
}
export const GetSkillList = (): Skill[] => {
    return [
        {
            name: combat.name,
            attribute: combat.attribute,
            level: combat.level,
            description: combat.description
        },
        {
            name: pilot.name,
            attribute: pilot.attribute,
            level: pilot.level,
            description: pilot.description
        },
        {
            name: spells.name,
            attribute: spells.attribute,
            level: spells.level,
            description: spells.description
        },
        {
            name: investigation.name,
            attribute: investigation.attribute,
            level: investigation.level,
            description: investigation.description
        },
        {
            name: persuation.name,
            attribute: persuation.attribute,
            level: persuation.level,
            description: persuation.description
        },
        {
            name: intimidation.name,
            attribute: intimidation.attribute,
            level: intimidation.level,
            description: intimidation.description
        },
        {
            name: 'larceny',
            attribute: 'agility',
            level:0,
            description: ''
        },
        {
            name: 'stealth',
            attribute: 'agility',
            level:0,
            description: ''
        },
        {
            name: 'survival',
            attribute: 'intelligence',
            level:0,
            description: ''
        },
        {
            name: 'science',
            attribute: 'intelligence',
            level:0,
            description: ''
        },
        {
            name: 'computer',
            attribute: 'intelligence',
            level:0,
            description: ''
        },
        {
            name: 'medicine',
            attribute: 'intelligence',
            level:0,
            description: ''
        },
        {
            name: 'surgery',
            attribute: 'agility',
            level:0,
            description: ''
        },
        {
            name: 'empathy',
            attribute: 'perception',
            level:0,
            description: ''
        },
        {
            name: 'subtrefuge',
            attribute: 'perception',
            level:0,
            description: ''
        },
        {
            name: 'athletics',
            attribute: 'endurance',
            level:0,
            description: ''
        },
        {
            name: 'acrobatics',
            attribute: 'agility',
            level:0,
            description: ''
        },
        {
            name: 'search',
            attribute: 'perception',
            level:0,
            description: ''
        },
        {
            name: 'slight of hand',
            attribute: 'agility',
            level:0,
            description: ''
        },
    ].sort((a, b) => a.attribute < b.attribute ? -1 : 1);
}