import { SkillTemplate, UseCase } from "../general/Skills";
const useCases: UseCase[] = [
    {
        name: 'hotwire electronic device',
        attribute: 'agility',
        description: 'rewire an electronic device to turn on or off its function, requires tool',
        results: [
        ],
        type: 'active'
    },
    {
        name: 'repair electronics',
        attribute: 'perception',
        description: 'repair an electronic device, socket, etc, requires tools and replacement parts',
        type: 'active'
    }
];
const Electronics = new SkillTemplate('electronics', '', useCases);
export default Electronics;