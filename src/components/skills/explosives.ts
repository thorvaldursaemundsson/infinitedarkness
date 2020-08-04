import { SkillTemplate, UseCase } from "../Skills";
const useCases: UseCase[] = [
    {
        name: 'throw grenade',
        attribute: 'agility',
        description: 'throw a grenade at a target',
        results: [
        ],
        type: 'active'
    },
];
const Explosives = new SkillTemplate('explosives', '', useCases);
export default Explosives;