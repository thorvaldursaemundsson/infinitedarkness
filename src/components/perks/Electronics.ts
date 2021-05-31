import { PerkTemplate } from "../general/Perks";

const skill = 'electronics;'

const CyberneticsExpert = new PerkTemplate({
    name: 'cybernetics expert',
    skill: skill,
    level: 1,
    description: 'you are familiar with the electronics of cybernetics and bionics',
    results: [
        'you can repair a cybernetic implant for half cost',
        'you can craft custom made cybernetic implants (requires mechanics counter part to complete job)'
    ]
});

const RoboticsExpert = new PerkTemplate({
    name: 'robotics expert',
    skill: skill,
    level: 1,
    description: 'you are familiar with the electronics of robotics and synths, from the electrician side you gain the following benefits',
    results: [
        'you can repair a robot for half cost',
        'you can craft robots (requires mechanics and computers counter part to complete job)'
    ]
});

const VehicularElectronicsExpert = new PerkTemplate({
    name: 'robotics expert',
    skill: skill,
    level: 1,
    description: 'you are familiar with the electronics of vehicles',
    results: [
        'you can repair a robot for vehicle',
        'you can craft vehicles (requires mechanics and computers counter part to complete job)'
    ]
});


export const ElectronicsPerks = [CyberneticsExpert, RoboticsExpert, VehicularElectronicsExpert];