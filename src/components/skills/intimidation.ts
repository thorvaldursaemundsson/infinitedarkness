import { SkillTemplate, UseCase } from "../general/Skills";
const useCases: UseCase[] = [
    {
        name: 'interrogation',
        attribute: 'willpower',
        description: 'force someone to give you answers to questions, you roll intimidation + willpower, they roll willpower',
        results: [
            'Less than equal: no answer, they resist for the day',
            'Equal up to +10: they give one answer in 1 hours (may choose to lie, gain +5 to their subtrefuge)',
            'Equal up to +20: they give one answer in 15 minutes (may choose to lie, gain +5 to their subtrefuge)',
            'Equal up to +30: they give one answer in 1 minute (may choose to lie, gain +5 to their subtrefuge)',
            'If they are able to escape or fight back they can choose to cancel the interrogation',
            'If you employ credible threat of torture or violence gain +5, they gain +5 to subtrefuge',
            'If you employ violence or torture, gain +10, they gain +10 to subtrefuge'
        ],
        type: 'active'
    },
    {
        name: 'frighten',
        attribute: 'willpower',
        description: 'emit a terrifying display of power and ill intent to cause viewers to fear you. It is contested by a 10 + willpower + intimidation',
        results: [
            'Fail by 10 or more: they gain confidence against you, +2 to all rolls vs you, you take 1 mental health damage from humiliation',
            'Fail by less than 10: no effect, they are not afraid of you',
            'Success: They become frightened and take 1 mental health damage',
            'Success 5: They become frightened and take 1d2 mental health damage.',
            'Success 10: They become frightened and take 1d4 mental health damage.',
            'Success 15: They become frightened and take 1d6 mental health damage.',
            'Success 20: They become frightened and take 1d8 mental health damage.',
            'Success 25: They become frightened and take 1d10 mental health damage.',
            'If you are not able to directly attack or harm them, you gain -10 on your roll',
            'If you are able to directly attack them but seemingly at a disadvantage you gain -5 on your roll',
            'If you are able to directly attack them and seemingly at an advantage you gain +5 on your roll',
            'If they are defenseless and at your mercy you gain +10 on your roll',
            'If you attempt to frighten multiple targets then you gain penalty equal to the number of targets'
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
const Intimidation = new SkillTemplate('intimidation', 'the act of casting a shadow over the soul of another being', useCases);
export default Intimidation;