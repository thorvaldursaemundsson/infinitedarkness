import { SkillTemplate, UseCase } from "../general/Skills";
const useCases: UseCase[] = [
    {
        name: 'drive car',
        attribute: 'perception',
        description: 'drive a car, quadcar, or motorcycle',
        results: [
            'critical failure: 0',
            'severe crash: 5',
            'crash: 10',
            'mild missadventure: 15',
            'drive normally: 20',
            'driving fast (+120km/h): -5 to roll',
            'driving very fast (+180km/h): -10 to roll',
            'harsh weather: -3 to roll',
            'extreme weather: -6 to roll',
            'autopilot available: +5 to roll'
        ],
        type: 'active'
    },
    {
        name: 'drive boat',
        attribute: 'agility',
        description: 'drive a boat, driving normally has a difficulty of 15. Failure means you do not make any progress.',
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
        description: 'driving a ship typically requires mutliple people. Failure means you make no progress or move slightly in random direction.',
        results: [
            'move forward or turn: 20',
            'harsh weather: -3 to roll',
            'extreme weather: -6 to roll',
            'autocaptain available: +8 to roll'
        ],
        type: 'active'
    },
    {
        name: 'drive submarine',
        attribute: 'intelligence',
        description: 'driving a sub is very hard and requires multiple people. Failure means you make no progress or move slightly in random direction.',
        results: [
            'move forward, turn, submerge or surface: 25',
            'harsh weather: -3 to roll',
            'autocaptain available: +6 to roll'
        ],
        type: 'active'
    },
    {
        name: 'pilot airplane',
        attribute: 'intelligence',
        description: 'the second hardest point is takeof, the hardest part is landing. Failure could potentially mean death.',
        results: [
            'takeoff: 25',
            'keep airborne: 20',
            'land: 30',
            'crashland safely: 25-29 (no harm to passengers, airplane is damaged and can not takeoff again without repair)',
            'crash violently: 20-24 (airplane damaged, each passengers take 4d20 on hills or mountains, 3d20 damage on flatland, 2d20 on water. Roll seperately, if you die you die)',
            'crash catastrophically: 19 or less (airplane destroyed, each passenger takes 5d20)',
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
            'deorbit and land within 10km: 30',
            'deorbit and land within 1km: 35',
            'deorbit and land perfectly on landingarea: 40',
            'activate retrothrusters to land smoothly: 40',
            'adjust orbit to intercept other co-satelite: 35',
            'plot escape trajectory to other satelite: 35',
            'auto-naut available: +5 to roll',
            'long preparatory time (48h): +5 to roll',
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