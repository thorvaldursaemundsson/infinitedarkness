import { SkillTemplate, UseCase } from "../general/Skills";
const useCases: UseCase[] = [
    {
        name: 'dealing',
        attribute: 'willpower',
        description: 'striking a deal, haggling, negotiating exchanges, each side rolls and a compromise is made in favor of whoever has the higher roll equal to the difference. Only works on people open to it',
        type: 'active'
    },
    {
        name: 'motivational speech',
        attribute: 'willpower',
        description: 'you make a rousing motivational speech, everyone hearing it (max 8 people, not you) gains a bonus to all rolls for their next skill. Takes 1 minute',
        type: 'active',
        results: [
            '15-24: +1 bonus',
            '25-34: +2 bonus',
            '35-44: +3 bonus',
            '45-54: +4 bonus',
            '55:+ +5 bonus'
        ]
    },
    {
        name: 'inspire courage',
        attribute: 'willpower',
        description: 'you say a few heart warming words that strengthen the resolve of anyone hearing you gain a bonus against fear for the rest of the day. Takes 1 minute',
        results: [
            '15-24: +1 bonus',
            '25-34: +2 bonus',
            '35-44: +3 bonus',
            '45-54: +4 bonus',
            '55:+ +5 bonus'
        ],
        type: 'active'
    },
    {
        name: 'quell conflict',
        attribute: 'willpower',
        description: 'you try to talk someone down from fighting you, gain +3 to your roll if you know their motives or if they fear you. Does not work on everyone',
        type: 'active'
    },

];
const Persuasion = new SkillTemplate('persuasion', 'making people see it your way', useCases);
export default Persuasion;