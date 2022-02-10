import { SkillTemplate, UseCase } from "../general/Skills";
const useCases: UseCase[] = [
    {
        name: 'hold breath',
        attribute: 'endurance',
        description: 'How long you can hold your breath is equals to 10 + athletics + endurance.',
        results: [
            '0 or less: 1 round',
            '1-4: 2 rounds',
            '5-9: 3 rounds',
            '10-14: 5 rounds',
            '15-19: 10 rounds',
            '20-24: 15 rounds',
            '25-29: 20 rounds',
            '30-34: 30 rounds',
            '35+ rounds: 40 rounds',
            'If doing strenious activity: -5',
            'Wounded: half penalty from damage (penalty = 50% of damage taken)',
            'If exhausted or over carry capacity: -5 per step'
        ],
        type: 'passive'
    },
    {
        name: 'swim',
        attribute: 'strength',
        description: 'How well you swim is equal to 10 + athletics + strength',
        results: [
            '0 or less: sinks below water level immediately, not able to make any progress',
            '1-4: can stay afloat for 2d4 rounds before sinking',
            '5-9: can stay afloat for 2d6 minutes before sinking',
            '10-14: can stay afloat for indefinitely and move 1 meter per turn using both action and move action needing a break ever 2d6 rounds',
            '15-19: move 2 meter per turn using both action and move action',
            '20-24: use action and move action to move at 25% speed',
            '25-29: use action and move action to move at 50% speed',
            '30-34: use action and move action to move at 75% speed',
            '35-39: use action and move action to move at 100% speed',
            '40-44: use move action to move at 100% speed',
            '45-49: use move action to move at 100% speed and may use action to move at 150%',
            '50+: use move action to move at 100% speed and may use action to move at 200%',
            'Wounded: full penalty',
            'If exhausted or over carry capacity: -5 per step',
            'big waves: -5',
            'turbulent water: -5',
            'cold/hot water: -5',
            'icy/scalding water: -10'
        ],
        type: 'passive'
    },
    {
        name: 'throwing',
        attribute: 'agility',
        description: 'Throwing an item accurately and precisely at a target, for example a ball into a hoop. The distance depends on your strength and the weight of the item.',
        results: [
            
        ],
        type: 'active'
    },
    {
        name:'ride',
        attribute: 'agility',
        description: 'ride bicycle, ride horse, or spouse',
        type: 'passive'
    },
    {
        name: 'run',
        attribute: 'endurance',
        description: 'how fast you run and how long you can run. Once you hit the limit you gain one level of exhaustion. (take 10)',
        results: [
            'take one single step: -25 (unable to stand if you fail)',
            'walk 2 rounds: -20',
            'walk 1 minute: -15',
            'walk 5 minutes: -10',
            'walk 15 minutes: -5',
            'walk 30 minutes: 0',
            'walk 60 minutes: 5',
            'walk 2 hours: 10',
            'walk 4 hours: 15',
            'walk 8 hours: 20',
            'for each +5, double duration',
            'walk at 50% rate: same as walk but +5 on the roll',
            'power walk 2x speed: -5 (one step up)',
            'jog x3 speed: -10  (two steps up)',
            'run x4 speed: -20  (four steps up)',
            'sprint x5 speed: -30  (six steps up)',
            'each level of carrying capacity and exhaustion: -5 per step  (one step up)'
        ],
        type: 'passive'
    },
    {
        name: 'jump',
        attribute: 'strength',
        description: 'how high and far you can jump, jumping forward requires at least double runway distance for sprinting. Can be done as a part of move action, requires at least 10 meter sprinting or take a -5 to the roll',
        results: [
            '4-10: 50cm up',
            '11-15: 1m up',
            '16-20: 1.5m up',
            '21-25: 2m up',
            '26-30: 2.5m up',
            '31-35: 3m up',
            '36-40: 3.5m up',
            '41-45: 4m up',
            '46-50: 4.5m up',
            '51-55: 5m up',
            '4-10: 1.5m forward',
            '11-15: 3m forward',
            '16-20: 4.5m forward',
            '21-25: 6m forward',
            '26-30: 7.5m forward',
            '31-35: 9m forward',
            '36-40: 10.5m forward',
            '41-45: 12m forward',
            '46-50: 13.5m forward',
            '51-55: 15m forward',
            'each level of carrying capacity and exhaustion: -5 to roll'
        ],
        type: 'active'
    },
    {
        name: 'climb',
        attribute: 'strength',
        description: 'climbing up things, done as a move action, you normally move at 25% of your speed vertically/diagonally or 50% horizontally.',
        results: [
            '1+: climb ladder or stairs',
            '6+: climb very steep slope',
            '25+: climb rough wall',
            '60+: climb sheer wall',
            'each 25 meters up: -5 to roll',
            'if using rope: +5 to roll',
            'if using knotted rope: +10 to rope',
            'if wet conditions: -5 to roll',
            'if wet and windy conditions: -10 to roll',
            'each level of carrying capacity and exhaustion: -5 to roll'
        ],
        type: 'passive'
    },
];
const Athletics = new SkillTemplate('athletics', 'skillful use of stamina. You increase speed by 1 at rank 6, 12 and 18. You increase life at rank 9 and 18', useCases);
export default Athletics;