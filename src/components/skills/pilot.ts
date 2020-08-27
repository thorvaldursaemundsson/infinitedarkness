import { SkillTemplate, UseCase } from "../general/Skills";
const useCases: UseCase[] = [
    {
        name: 'drive car',
        attribute: 'perception',
        description: 'drive a car, quadcar, or motorcycle',
        results: [
            'drive without crashing: 18',
            'harsh weather: -3 to roll',
            'extreme weather: -6 to roll',
            'autopilot available: +5 to roll'
        ],
        type: 'active'
    },
    {
        name: 'drive boat',
        attribute: 'agility',
        description: 'drive a boat, driving normally has a difficulty of 15',
        results: [
            'move forward or turn: 15',
            'harsh weather: -3 to roll',
            'extreme weather: -6 to roll',
        ],
        type: 'active'
    },
    {
        name: 'drive ship',
        attribute: 'intelligence',
        description: 'driving a ship typically requires mutliple people',
        results: [
            'move forward or turn: 24',
            'harsh weather: -3 to roll',
            'extreme weather: -6 to roll',
            'autocaptain available: +8 to roll'
        ],
        type: 'active'
    },
    {
        name: 'drive submarine',
        attribute: 'intelligence',
        description: 'driving a sub is very hard and requires multiple people',
        results: [
            'move forward, turn, submerge or surface: 28',
            'harsh weather: -3 to roll',
            'autocaptain available: +6 to roll'
        ],
        type: 'active'
    },
    {
        name: 'pilot airplane',
        attribute: 'intelligence',
        description: 'the second hardest point is takeof, the hardest part is landing',
        results: [
            'takeoff and stay airborne: 25 (roll every 8 hours while in the air)',
            'land safely: 28',
            'crashland safely: 23 (the passengers survive but the airplane doesnt)',
            'crash violently: 22 or less (everyone dies)',
            'air combat: make opposed roll vs enemy, highest roll gets to fire weapon and hits',
            'sea plane: +3 to roll',
            'harsh weather: -3 to roll',
            'extreme weather: -6 to roll',
            'landing gear broken: -10 to roll (only for landing)',
            'engine broken: -5 to roll (only for landing)',
            'autopilot available: +5 to roll'
        ],
        type: 'active'
    },
    {
        name: 'pilot spaceship',
        attribute: 'intelligence',
        description: 'navigation requires understanding of orbital mechanics',
        results: [
            'enter orbit: 30',
            'deorbit: 25',
            'deorbit and land within 10km: 32',
            'deorbit and land within 1km: 38',
            'deorbit and land perfectly on landingarea: 42',
            'activate retrothrusters to land smoothly: 40',
            'adjust orbit to intercept other co-satelite: 34',
            'plot escape trajectory to other satelite: 36',
            'auto-naut available: +5',
        ],
        type: 'active'
    },
    {
        name: 'pilot FTL',
        attribute: 'intelligence',
        description: 'knowing how to operate an FTL hyperdrive is hard',
        results: [
            'plot course to other star: 35 + 1 per light year'
        ],
        type: 'active'
    },
];
const Pilot = new SkillTemplate('pilot', 'driving car, boat, airplane, spaceship, horse', useCases);
export default Pilot;