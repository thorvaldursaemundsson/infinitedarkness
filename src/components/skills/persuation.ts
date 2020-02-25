import { SkillTemplate, UseCase } from "../Skills";
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
        description: 'you make a rousing motivational speech, everyone hearing it gains a +1 to all rolls for the rest of the day to any skill they have lower than your persuation skill',
        type: 'active'
    },
    {
        name: 'inspire courage',
        attribute: 'willpower',
        description: 'you say a few heart warming words that strengthen the resolve of anyone hearing you gain +1 to fear resistance up to your roll',
        type: 'active'
    },
    {
        name: 'quell conflict',
        attribute: 'willpower',
        description: 'you try to talk someone down from fighting you, gain +3 to your roll if you know their motives or if they fear you. Does not work on everyone',
        type: 'active'
    },
    
];
const Persuation = new SkillTemplate('persuation', 'making people see it your way', useCases);
export default Persuation;