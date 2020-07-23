import { SkillTemplate, UseCase } from "../Skills";
const useCases: UseCase[] = [
    {
        name: 'aimed shot',
        attribute: 'agility',
        description: 'Fire a single shot at a target, any non fully-automatic weapon',
        results: [
            'If roll equals defense then you hit',
            'May also make any move action'
        ],
        type: 'active'
    },
    {
        name: 'semi burst',
        attribute: 'agility',
        description: 'Fire multiple shots with a semi-automatic firearm',
        results: [
            'Fire 4 bullets',
            'Add +5 to hit',
            'If roll equals defense then you hit with 1d3 bullets',
            'May also make any move action',
        ],
        type: 'active'
    },
    {
        name: 'burst',
        attribute: 'agility',
        description: 'Hold down the trigger on a fully-automatic weapon for a short burst',
        results: [
            'Fire 10 bullets',
            'Add +10 to hit',
            'If roll equals defense then you hit with 1d6 bullets',
            'Defense from skill reduced by half',
            'May only make walk move action, move at half speed',
            'Strength requirement increase by 1'
        ],
        type: 'active'
    },
    {
        name: 'snipe',
        attribute: 'perception',
        description: 'Wait for the perfect hit and then shoot, any non fully-automatic',
        results: [
            'If roll equals defense then you hit, if roll is less than up to 12 then take no action and simply wait (player may declare in advance the roll)',
            'Defense from skill removed',
            'May take no move action at all'
        ],
        type: 'active'
    },
    {
        name: 'oppressive fire',
        attribute: 'strength',
        description: 'Hold down the trigger on a fully automatic firearm for the whole round, can spray across multiple targets',
        results: [
            'Shoot as many bullets as it uses per round, potentially empying the magazine',
            'Add +15 to hit',
            'If roll equals defense then you hit with 2d4 bullets',
            'Defense from skill removed',
            'May take no move action at all',
            'Strength requirement increase by 2'
        ],
        type: 'active'
    },
    {
        name: 'maintain weapon',
        attribute: 'intelligence',
        description: 'keep it clean and good',
        results: [
            'service: 14 or lower: damage weapon, firearm drops condition by 1 step',
            'service: 21-30 or lower: firearm condition countdown is reset',
            'service: 31-40: firearm condition is improved by 1 step',
            'service: 41+: firearm condition is improved by 2 steps'
        ],
        type: 'active'
    }
];
const Firearms = new SkillTemplate('firearms', 'shooting things', useCases);
export default Firearms;