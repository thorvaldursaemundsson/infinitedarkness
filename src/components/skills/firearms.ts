import { SkillTemplate, UseCase } from "../Skills";
const useCases: UseCase[] = [
    {
        name: 'aimed shot',
        attribute: 'agility',
        description: 'fire a single shot with a handgun or rifle',
        type: 'active'
    },
    {
        name: 'semi burst',
        attribute: 'agility',
        description: 'fire 4 bullets',
        type: 'active'
    },
    {
        name: 'burst',
        attribute: 'agility',
        description: 'fire 10 bullets',
        type: 'active'
    },
    {
        name: 'snipe',
        attribute: 'perception',
        description: 'fire a single shot with a handgun, rifle or rocket launcher, if you roll 10 or below you take no action',
        type: 'active'
    },
    {
        name: 'oppressive fire',
        attribute: 'strength',
        description: 'empty the entire magazine',
        type: 'active'
    },
    {
        name: 'maintain weapon',
        attribute: 'intelligence',
        description: 'keep it clean and good',
        results: [
            'service: 9 or lower: damage weapon, firearm drops condition by 1 step',
            'service: 14 or lower: firearm condition countdown is reset',
            'service: 25-29: firearm condition is improved by 1 step',
            'service: 30+: firearm condition is improved by 2 steps'
        ],
        type: 'active'
    }
];
const Firearms = new SkillTemplate('firearms', 'shooting things', useCases);
export default Firearms;
