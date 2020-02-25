import { SkillTemplate, UseCase } from "../Skills";
const useCases: UseCase[] = [
    {
        name: 'hacking',
        attribute: 'intelligence',
        description: 'hack into computers "Im in"',
        type: 'active'
    },
    {
        name: 'craft software',
        attribute: 'intelligence',
        description: 'make computer programs, drivers, services, etc',
        type: 'active'
    },
    {
        name: 'use computer',
        attribute: 'intelligence',
        description: 'use computer in any normal capacity, like looking up pictures of cats, or posting angry stuff on forums',
        type: 'active'
    }
];
const Computer = new SkillTemplate('computer', 'googling stuff', useCases);
export default Computer;
