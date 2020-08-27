import { SkillTemplate, UseCase } from "../general/Skills";
const useCases: UseCase[] = [
    {
        name: 'hotwire electronic device',
        attribute: 'agility',
        description: 'rewire an electronic device to turn on or off its function',
        results: [
        ],
        type: 'active'
    },
];
const Electronics = new SkillTemplate('electronics', '', useCases);
export default Electronics;