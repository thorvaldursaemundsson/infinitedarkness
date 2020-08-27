import { SkillTemplate, UseCase } from "../general/Skills";
const useCases: UseCase[] = [
    {
        name: 'throw grenade',
        attribute: 'agility',
        description: 'throw a grenade at a target, grenade will explode at the end of your next turn',
        results: [
            'base difficulty: 10 (to hit square of target)',
            'range penalty: 1 per meter',
            'rain: +2',
            'windy: +2',
            'stormwind: +4',
            'target on slope: +8',
            'time grenade to explode when it arrives: -10, (if fail by 10 points or more theres is a 50% chance it explodes while youre holding it'
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
        description: 'you disable a timed bomb, the base difficulty is the resulting roll from when it was set',
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
        description: 'you make an improvised bomb from non-bomb materials',
        results: [
            'molotov cocktail: base 15',
            'nitroglycerin: base 25',
            'dynomite: base 25',
            'battery bomb: 20',
        ],
        type: 'active'
    }
];
const Explosives = new SkillTemplate('explosives', 'creating and using explosive devices, bombs, grenades', useCases);
export default Explosives;