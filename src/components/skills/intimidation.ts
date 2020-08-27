import { SkillTemplate, UseCase } from "../general/Skills";
const useCases: UseCase[] = [
    {
        name: 'interrogation',
        attribute: 'willpower',
        description: 'force someone to give you answers to questions, you roll intimidation + willpower, they roll willpower',
        results: [
            'Less than equal: no answer, they resist for the day',
            'Equal up to +10: they give one answer in 8 hours (may choose to lie, gain +10 to their subtrefuge)',
            'Equal up to +20: they give one answer in 4 hours (may choose to lie, gain +5 to their subtrefuge)',
            'Equal up to +30: they give one answer in 4 hours (may choose to lie)',
            'If they are able to escape or fight back they can choose to cancel the interrogation',
            'If you employ credible threat of torture or violence gain +5, they gain +5 to subtrefuge',
            'If you employ violence or torture, gain +10, they gain +10 to subtrefuge'
        ],
        type: 'active'
    },
    {
        name: 'frighten',
        attribute: 'willpower',
        description: 'emit a terrifying display of power and ill intent to cause viewers to fear you. They must roll willpower against your roll. If they fail their mental health damage penalizes all attacking rolls',
        results: [
            'Less than their willpower: they gain confidence against you, +2 to all rolls vs you, you take 1 mental health damage from humiliation',
            'Equal up to 10: they take 1d4 mental health damage',
            'Equal up to 15: they take 1d6 mental health damage',
            'Equal up to 20: they take 1d8 mental health damage',
            'Equal up to 25: they take 1d10 mental health damage',
            'Equal up to 30: they take 1d12 mental health damage',
            'If you are not able to directly attack them, you gain -20',
            'If you are able to directly attack them but seemingly at a disadvantage you gain -10',
            'If you are able to directly attack them and seemingly at an advantage you gain +10'
        ],
        type: 'active'
    },
    {
        name: 'spook',
        attribute: 'willpower',
        description: 'while talking to someone for a while you instill in them a sense of dread, every 10 minutes they must roll willpower vs your roll or take 1d4 fear damage (plus 1 per 5 you exceed their roll)',
        type: 'active'
    }
];
const Intimidation = new SkillTemplate('intimidation', 'making people feel small and you big', useCases);
export default Intimidation;