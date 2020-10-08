import { SkillTemplate, UseCase } from "../general/Skills";
const useCases: UseCase[] = [
    {
        name: 'swim',
        attribute: 'endurance',
        description: 'how fast you swim, how long you can keep your breath, you need equal amount of rest time to reset timers',
        results: [
            'hold breath 1 minute: 14-20',
            'hold breath 2 minute: 21-25',
            'hold breath 3 minute: 26-30',
            'swim in lake/pool: 10 once per 5 minute, increase by 1 per 5 minute',
            'swim in ocean: 15 once per 2 minute, increase by 1 per 2 minute',
            'swim in stormy/turbulen water: 20 once per minute, increase by 1 per minute',
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
            'jog 15 minutes: 1-5',
            'jog 30 minutes: 6-10',
            'jog 60 minutes: 11-15',
            'jog 2 hours: 16-20',
            'jog, for each +5, double duration',
            'walk: same as jog but +10 on the roll',
            'power walk: same as jog but +5 on the roll',
            'run: same as jog but with -10 on the roll',
            'sprint: same as run but with -10 on the roll',
            'above carrying capacity: -5 per step'
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