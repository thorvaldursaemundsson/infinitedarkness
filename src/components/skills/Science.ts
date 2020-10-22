import { SkillTemplate, UseCase } from "../general/Skills";
const useCases: UseCase[] = [
    {
        name: 'set up experiment',
        attribute: 'intelligence',
        description: 'set up an experiment to test an hypothesis',
        type: 'active'
    },
    {
        name: 'formulize hypothesis',
        attribute: 'intelligence',
        description: 'create a theory to explain phenomena',
        type: 'active'
    },
    {
        name: 'remember science',
        attribute:  'intelligence',
        description: 'you remember a scientific fact pertaining a topic',
        results: [
            '15 or less: you remember wrong pseudoscience',
            '25: you remember the necessary information',
            '30: you remember additional useful information',
            '35: you remember detailed useful information that gives you more or better options',
            '40: you remember obscure detail especially useful information and gain a deep understanding',
            '45: you remember all known scientific information about the topic',
            '50: you make an ephiphany and will be able to further the field of science (gain free correct hypothesis)'
        ],
        type: 'active'
    },
    {
        name: 'analyse life',
        attribute: 'perception',
        description: 'the scientist determines species, age, sex and abilities of a plant of creature',
        type: 'active'
    },
    {
        name: 'fill spaceship cargobay/passengers',
        attribute: 'intelligence',
        description: 'when you fill a cargobay in a spaceship you have to be careful that the weight distribution is even, that includes the passengers. Takes between 1-8 hours, depending on the size of the ship, ship must be at rest.',
        type: 'active',
        results: [
            '15 or less: you botch the job, the ship is missaligned and cant fly in a straight line',
            '20: you are able to put the cargo in the right places, but its not perfect and the ship loses 10% acceleration',
            '25: no penalties',
            '30: youre able to organize the cargo perfectly, the ship has 10% more cargo space available'
        ]
    }
];
const Science = new SkillTemplate('science', 'knowing science, conducting experiments', useCases);
export default Science;