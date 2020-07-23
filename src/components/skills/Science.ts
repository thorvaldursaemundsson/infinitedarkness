import { SkillTemplate, UseCase } from "../Skills";
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
    }
];
const Science = new SkillTemplate('science', 'knowing science, conducting experiments', useCases);
export default Science;