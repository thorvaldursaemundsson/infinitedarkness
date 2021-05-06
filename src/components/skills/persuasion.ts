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
        description: 'you make a rousing motivational speech, everyone hearing it gains a +1 to all rolls for the rest of the day to any skill they have lower than your persuasion skill. Takes 1 minute',
        type: 'active'
    },
    {
        name: 'inspire courage',
        attribute: 'willpower',
        description: 'you say a few heart warming words that strengthen the resolve of anyone hearing you gain +1 to fear resistance up to your roll. Takes 1 round',
        results: [
            '15-24: +1 to fear resistence',
            '25+: +1 to fear resistence, restore 1 mental health (can only restore from this benefit once a day)'
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