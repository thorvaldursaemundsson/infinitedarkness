import combat from './skills/combat.json';
import firearms from './skills/firearms.json';
import pilot from './skills/pilot.json';
import spells from './skills/spells.json';
import investigation from './skills/investigation.json';
import intimidation from './skills/intimidation.json';
import larceny from './skills/larceny.json';
import stealth from './skills/stealth.json';
import survival from './skills/survival.json';
import science from './skills/science.json';
import computer from './skills/computer.json';
import medicine from './skills/medicine.json';
import surgery from './skills/surgery.json';
import empathy from './skills/empathy.json';
import subtrefuge from './skills/subtrefuge.json';
import athletics from './skills/athletics.json';
import acrobatics from './skills/acrobatics.json';
import search from './skills/search.json';
import slightOfHand from './skills/slightOfHand.json';
import persuation from './skills/persuation.json';


export interface Skill {
    name: string;
    attribute: string | 'strength' | 'agility' | 'endurance' | 'perception' | 'willpower' | 'intelligence';
    level: number;
    description: string;
}
export const GetSkillList = (): Skill[] => {
    return [
        { ...combat },
        { ...firearms},
        { ...pilot },
        { ...spells },
        { ...investigation },
        { ...persuation },
        { ...intimidation },
        { ...larceny },
        { ...stealth },
        {  ...survival },
        { ...science },
        { ...computer },
        { ...medicine },
        { ...surgery },
        { ...empathy },
        { ...subtrefuge },
        { ...athletics },
        { ...acrobatics },
        { ...search },
        {  ...slightOfHand }
    ].sort((a, b) => a.attribute < b.attribute ? -1 : 1);
}