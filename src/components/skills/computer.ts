import { SkillTemplate, UseCase } from "../Skills";
const useCases: UseCase[] = [
    {
        name: 'hacking',
        attribute: 'intelligence',
        description: 'hack into computers, unlock digital locks',
        type: 'active'
    },
    {
        name: 'craft software',
        attribute: 'intelligence',
        description: 'make computer programs, apps, drivers, services, etc',
        type: 'active'
    },
    {
        name: 'use computer',
        attribute: 'intelligence',
        description: 'You can use a computer to do research on the use of another skill, takes 10 minutes and gain a one time use +2',
        type: 'active'
    }
];
const Computer = new SkillTemplate('computer', 'googling stuff', useCases);
export default Computer;
