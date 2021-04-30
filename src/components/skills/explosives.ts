import { SkillTemplate, UseCase } from "../general/Skills";
const useCases: UseCase[] = [
    {
        name: 'throw grenade',
        attribute: 'agility',
        description: 'throw a grenade at a target, grenade will explode at the end of your next turn.',
        results: [
            'base difficulty: 10 (to hit hex of target)',
            'range penalty: 1 per meter',
            'When a grenade lands within range of a target that can see the grenade and is able to move they are allowed to roll a contested acrobatics + agility roll. If they succeed they may move out of range before it explodes. If they fail by less than 10 then they fall to a defensive prone position and take only half damage.',
            'rain: -2 to roll',
            'windy: -2 to roll',
            'stormwind: -4 to roll',
            'target on slope: -8 to roll',
            'if you fail then it lands randomly 1 meter away per point of failure. If your total roll is 0 or less the grenade explodes in your hand.'
        ],
        type: 'active'
    },
    {
        name: 'set trigger detonated bomb',
        attribute: 'intelligence',
        description: 'you set a bomb to explode after a specific trigger has occured (time elapses, motion sensor, signal from remote etc). You can make it harder to disable by spending more time and using more better parts',
        results: [
            'base difficulty: 15',
            'good parts: +2 (to roll)',
            'spend 10 minutes: +2 (to roll)',
            'spend 1 hour: +4 (to roll)',
            'spend 4 hours: +6 (to roll)',
            'make it explode if tampered with: -4 (to roll)'
        ],
        type :'active'
    },
    {
        name: 'disable timed bomb',
        attribute: 'perception',
        description: 'you disable a timed bomb, the base difficulty is the resulting roll from when it was set. Takes 10 minutes, can be done in 1 minute at -10 penalty, 1 round -20 penalty',
        results: [
            'critical failure: 15 below target, bomb explodes immediately',
            'severe failure: 10 below target, bomb time left is set to half (if timed, otherwise nothing)',
            'failure: below target, no effect, difficulty raised +2',
            'success: bomb disabled',
            'critical success: 10 above target, bomb is disabled and can be manipulated immediately'
        ],
        type: 'active'
    },
    {
        name: 'make improvised bomb',
        attribute: 'intelligence',
        description: 'you make an improvised bomb from non-bomb materials.',
        results: [
            'molotov cocktail: base 15, 5 minutes per',
            'nitroglycerin: base 25, 1 hour per litre',
            'dynomite: base 25, 2 hours per kg',
            'battery bomb: 20, 1 hour',
        ],
        type: 'active'
    }
];
const Explosives = new SkillTemplate('explosives', 'creating and using explosive devices, bombs, grenades', useCases);
export default Explosives;