import * as combat from './skills/combat.json';
import * as pilot from './skills/pilot.json';
import * as spells from './skills/spells.json';
import * as investigation from './skills/investigation.json';
import * as intimidation from './skills/intimidation.json';
import * as larceny from './skills/larceny.json';
import * as stealth from './skills/stealth.json';
import * as survival from './skills/survival.json';
import * as science from './skills/science.json';
import * as computer from './skills/computer.json';
import * as medicine from './skills/medicine.json';
import * as surgery from './skills/surgery.json';
import * as empathy from './skills/empathy.json';
import * as subtrefuge from './skills/subtrefuge.json';
import * as athletics from './skills/athletics.json';
import * as acrobatics from './skills/acrobatics.json';
import * as search from './skills/search.json';
import * as slightOfHand from './skills/slightOfHand.json';
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
            name: larceny.name,
            attribute: larceny.attribute,
            level: larceny.level,
            description: larceny.description
        },
        {
            name: stealth.name,
            attribute: stealth.attribute,
            level: stealth.level,
            description: stealth.description
        },
        {
            name: survival.name,
            attribute: survival.attribute,
            level: survival.level,
            description: survival.description
        },
        {
            name: science.name,
            attribute: science.attribute,
            level: science.level,
            description: science.description
        },
        {
            name: computer.name,
            attribute: computer.attribute,
            level: computer.level,
            description: computer.description
        },
        {
            name: medicine.name,
            attribute: medicine.attribute,
            level: medicine.level,
            description: medicine.description
        },
        {
            name: surgery.name,
            attribute: surgery.attribute,
            level: surgery.level,
            description: surgery.description
        },
        {
            name: empathy.name,
            attribute: empathy.attribute,
            level: empathy.level,
            description: empathy.description
        },
        {
            name: subtrefuge.name,
            attribute: subtrefuge.attribute,
            level: subtrefuge.level,
            description: subtrefuge.description
        },
        {
            name: athletics.name,
            attribute: athletics.attribute,
            level: athletics.level,
            description: athletics.description
        },
        {
            name: acrobatics.name,
            attribute: acrobatics.attribute,
            level: acrobatics.level,
            description: acrobatics.description
        },
        {
            name: search.name,
            attribute: search.attribute,
            level: search.level,
            description: search.description
        },
        {
            name: slightOfHand.name,
            attribute: slightOfHand.attribute,
            level: slightOfHand.level,
            description: slightOfHand.description
        }
    ].sort((a, b) => a.attribute < b.attribute ? -1 : 1);
}