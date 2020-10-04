import { SkillTemplate, UseCase } from "../general/Skills";
const useCases: UseCase[] = [
    {
        name: 'high society',
        attribute: 'intelligence',
        description: 'Act as though you belong in high society',
        results: [
            '15 or less: failure, people assume you are poor and treat you like scum or servant',
            '16-20: low success, people assume you are middle class, nobody takes you seriously',
            '21-25: mid success, people assume you belong and will treat you like anyone else, and detect failures',
            '26-30: high success, people assume you are a good example, and detect low success',
            '31+: great success, people look to you for advice, and detect mid success',
            'is not dressed well: -10',
            'is dressed extremely well: +5 (clothes worth 10 000 credits or more)'
        ],
        type: 'active'
    },
];
const SavoirFaire = new SkillTemplate('savoir-faire', 'specialization into sub cultures that relates to legit occupations, high society and academy', useCases);
export default SavoirFaire;