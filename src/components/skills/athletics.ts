import { SkillTemplate, UseCase } from "../general/Skills";
const useCases: UseCase[] = [
    {
        name: 'swim',
        attribute: 'endurance',
        description: 'how fast you swim, how long you can keep your breath, you need equal amount of rest time to reset timers. When you swim through moving water the movement on the water is added to your movement. If you roll is such that you can not move then you start to drown. Carrying capacity penalties are doubled for swimming',
        results: [
            'hold breath 1 minute: 14-20',
            'hold breath 2 minute: 21-25',
            'hold breath 3 minute: 26-30',
            'stay afloat: use run table with 50% walk modifier',
            'swim at 50% speed: use run table with run modifier',
            'swim at 100% walk speed: use run table with sprint modifier',
            'swim in lake/pool: no modifier',
            'swim in ocean: take -5 on roll',
            'swim in stormy/turbulen water: take -10 on roll',
        ],
        type: 'passive'
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
        description: 'how fast you run and how long you can run. Once you hit the limit you gain one level of exhaustion, each level of exhaustion counts as one step of carry capacity limit',
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
            'above carrying capacity: -5 per step  (one step up)'
        ],
        type: 'passive'
    },
    {
        name: 'jump',
        attribute: 'endurance',
        description: 'how high and far you can jump, jumping forward requires at least double runway distance for sprinting',
        results: [
            '4-10: 30cm up',
            '11-15: 60cm up',
            '16-20: 90cm up',
            '21-25: 1.2m up',
            '26-30: 1.5m up',
            '31-35: 1.8m up',
            '36-40: 2.1m up',
            '41-45: 2.4m up',
            '46-50: 2.7m up',
            '51-55: 3m up',
            '4-10: 1m forward',
            '11-15: 2m forward',
            '16-20: 3m forward',
            '21-25: 4 forward',
            '26-30: 5m forward',
            '31-35: 6m forward',
            '36-40: 7m forward',
            '41-45: 8m forward',
            '46-50: 9m forward',
            '51-55: 10m forward',
        ],
        type: 'passive'
    },
    {
        name: 'climb',
        attribute: 'endurance',
        description: 'climbing',
        results: [
            '1+: climb ladder or stairs',
            '6+: climb very steep slope',
            '25+: climb rough wall',
            '60+: climb sheer wall',
            'if using rope: +5 to roll',
            'if using knotted rope: +10 to rope',
            'if wet conditions: -5 to roll',
            'if wet and windy conditions: -10 to roll',
        ],
        type: 'passive'
    },
];
const Athletics = new SkillTemplate('athletics', 'skillful use of stamina', useCases);
export default Athletics;