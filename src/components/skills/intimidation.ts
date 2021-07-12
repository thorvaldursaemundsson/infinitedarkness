import { SkillTemplate, UseCase } from "../general/Skills";
const useCases: UseCase[] = [
    {
        name: 'interrogation',
        attribute: 'willpower',
        description: 'Force someone to give you answers to questions, they may contest with 2d10 + willpower + intimidation. Takes 10 minutes',
        results: [
            'Should they succeed they choose to automatically resist any further attempt every hour, doing so inflicts 1 mental health damage.',
            'Should they fail by less than 10, they must answer the question. They add 1d6 to their subterfuge roll if they attempt to lie, doing so inflicts 1 mental health damage',
            'Should they fail by less than 20, they must answer the question. They add 1d6 to their subterfuge roll if they attempt to lie and don\'t know the anwser, doing so inflicts 1 mental health damage',
            'Should they fail by less than 30, they must answer the question. They may only lie if they don\'t know the true answer. They take 1 mental health damage'
        ],
        type: 'active'
    },
    {
        name: 'frighten',
        attribute: 'willpower',
        description: 'As an action emit a terrifying display of power and ill intent to cause viewers/listeners within 10 meters to fear you and view you as more threatening. Roll 2d10 + willpower or strength + intimidation, contested by a (passive) 10 + willpower + intimidation. Those who fail will take mental health damage and enter into a state of fight or flight.',
        results: [
            'Targets that succeed can not be frightened again for 24 hours',
            'Targets that fail their contest will choose between fight or flight. They roll a dice, take mental health damage. The frighten lasts for a number of turns equal to total mental health damage',
            'Fail by less than 10, roll 1d4',
            'Fail by less than 20, roll 1d6',
            'Fail by less than 30, roll 1d8',
            'Fail by more than 30 or 30, roll 1d10',
            'Targets that choose fight may only take actions to attack the target of their fear and are not allowed to perform perception or intelligence based skills',
            'Targets that choose flight may only use their actions to move away from- or hide from the target of their fear, if neither are possible they may only perform dodge action',
            'Targets that are panicked may not take any actions, have only their base defense, at the beginning of every turn they may roll 2d10 + willpower + intimidation, if they succeed they instead enter flight mode.',
            'Any target that fails by more than 10 points must roll a 1d6, on a 1 they become paniced, on 2,3 they must flee, 4,5 they must fight, 6 they may choose',
            'Any target that fails by 20 or more must roll a 1d6, on a 1,2 they become paniced, otherwise they must flee',
            'Targets get a group bonus if they outnumber your team, +1 per target',
            'If the target believes you have no means of hurting them then they receive a +10 bonus'
        ],
        type: 'active'
    },
    {
        name: 'coerce',
        attribute: 'willpower',
        description: 'You threaten someone with violence and force them to perform an action, contested by 10 + willpower + intimidation. Whether you succeed or not they perceive it as a hostile action.',
        type: 'active',
        results: [
            'The action should be stated before the roll, if the action is not within scope then the target doesn\'t have to do it',
            'Should the target succeed they are immune to future coercion for 24 hours',
            'Should they fail by less than 10 they will perform a simple action that merely inconveniences them',
            'Should they fail by less than 20 they will perform an action that doesn\'t risk their health or station',
            'Should they fail by less than 30 they will perform an action that doesn\'t kill them',
            'A target that fails may choose to resist but only if they\'re willing to fight to the death rather than do the asked action, they take 1 mental health damage.',
        ]
    },
    {
        name: 'spook',
        attribute: 'intelligence',
        description: 'while talking to someone for a while you instill in them a sense of dread, every 10 minutes they must roll willpower vs your roll or take 1d4 fear damage (plus 1 per 5 you exceed their roll)',
        type: 'active'
    }
];
const Intimidation = new SkillTemplate('intimidation', 'the act of casting a shadow over the soul of another being', useCases);
export default Intimidation;