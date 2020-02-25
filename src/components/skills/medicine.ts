import { SkillTemplate, UseCase } from "../Skills";
const useCases: UseCase[] = [
    {
        name: 'first aid',
        attribute: 'intelligence',
        description: 'apply first aid to keep someone alive, must be done continiously to slow down or prevent death',
        type: 'active'
    },
    {
        name: 'surgery',
        attribute: 'agility',
        description: 'perform an operation',
        type: 'active'
    },
    {
        name: 'administer medicine',
        attribute: 'intelligence',
        description: 'picking out the right medicine and knowing how to administer it correctly',
        type: 'active'
    },
    {
        name: 'psychology',
        attribute: 'intelligence',
        description: 'reduce someones fear level, treat mental illness',
        type: 'active'
    },
    
];
const Medicine = new SkillTemplate('medicine', 'giving people insulin, knowing insulin is not crack', useCases);
export default Medicine;