import { SkillTemplate, UseCase } from "../Skills";
const useCases: UseCase[] = [
    {
        name: 'first aid',
        attribute: 'intelligence',
        description: 'if someone has zero or negative hitpoints then you can prevent bleedout by rolling first aid vs their total damage taken, must be applied every turn or until you succeed with a roll of 10 more than the target',
        type: 'active'
    },
    {
        name: 'surgery',
        attribute: 'agility',
        description: 'perform an operation. A failed roll causes 1d6 per 5 excess failure (if difficulty is 30 and you roll 20 they take 2d6 damage). Removing something from a body has a difficulty between 25-35, adjusting a broken bone is 15-20',
        type: 'active'
    },
    {
        name: 'administer medicine',
        attribute: 'intelligence',
        description: 'picking out the right medicine and knowing how to administer it correctly, roll against 25 to know which medicine (if you roll 20 or less you get the wrong medicine depending on your options), roll 20 to administer, if you roll 15 or less the target takes 1d6 damage',
        type: 'active'
    },
    {
        name: 'psychology',
        attribute: 'intelligence',
        description: 'reduce someones fear level, treat mental illness.',
        type: 'active'
    },
    
];
const Medicine = new SkillTemplate('medicine', 'giving people insulin, knowing insulin is not crack', useCases);
export default Medicine;