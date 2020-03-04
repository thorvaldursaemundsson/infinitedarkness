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
];
const Firearms = new SkillTemplate('firearms', 'shooting things', useCases);
export default Firearms;
