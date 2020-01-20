import { PerkTemplate } from "../Perks";

const Deflection = new PerkTemplate({
    name: 'deflection',
    skill: 'combat',
    level: 1,
    description: 'gain +1 to all blocking rolls and damage reduced to 1/3rd (from 1/2nd) on successful blocks'
},{
    applyTo: 'block',
    amount: 1
});

export default Deflection;