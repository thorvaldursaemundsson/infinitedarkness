import { SkillTemplate, UseCase } from "../Skills";
const useCases: UseCase[] = [
    {
        name: 'shadow',
        attribute: 'agility',
        description: 'follow someone without them knowing youre following them',
        type: 'active'
    },
    {
        name: 'hide',
        attribute: 'agility',
        description: 'hide somewhere, gain +5 on your roll if you are not visible',
        type: 'active'
    },
    {
        name: 'detection',
        attribute: 'perception',
        description: 'find someone who is hiding or shadowing you',
        type: 'passive'
    }
];
const Stealth = new SkillTemplate('stealth', '', useCases);
export default Stealth;