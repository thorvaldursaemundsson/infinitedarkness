import { SkillTemplate, UseCase } from "../general/Skills";
const useCases: UseCase[] = [
    {
        name: 'aimed shot',
        attribute: 'agility',
        description: 'Fire a single shot at a target, any non fully-automatic weapon.',
        results: [
            'If roll equals defense or greater then you hit',
            'Add +1 armor pierce per each 10 over defense'
        ],
        type: 'active'
    },
    {
        name: 'snipe',
        attribute: 'perception',
        description: 'Wait for the perfect hit and then shoot, any non fully-automatic weapon. Uses 2 or more action points',
        results: [
            'If roll equals defense then you hit, if roll is less than up to 8, 9, 10, 11 or 12 (declare before rolling) then take no action and simply wait',
            'Range penalty is half',
            'Adds +2 to hit for each additional action point spent',
            'Add +1 armor pierce per each 10 over defense'
        ],
        type: 'active'
    },
    {
        name: 'semi burst',
        attribute: 'agility',
        description: 'Fire multiple shots with a semi-automatic weapon. Uses 2 more action burst.',
        results: [
            'Fire 4 bullets',
            'Add +5 to hit',
            'If roll equals defense then you hit with 1d3 bullets',
            'Defense limited to passive',
            'Gain +1 minimum bullets hit per each 10 over defense (max 4)',
            'You can fire on two adjacent squares, doing so removes the bonus to hit and you only hit with one bullet on each target',
        ],
        type: 'active'
    },
    {
        name: 'burst',
        attribute: 'agility',
        description: 'Hold down the trigger on a fully-automatic weapon for a short burst. Requires full-auto or continuous. Uses 3 more action burst.',
        results: [
            'Fire 10 bullets',
            'Add +10 to hit',
            'If roll equals defense then you hit with 1d6 bullets',
            'Defense limited to passive',
            'Uses half of your movement speed',
            'Strength requirement increase by 1',
            'Gain +1 minimum bullets hit per each 10 over defense (max 10)',
            'You can fire on multiple adjacent squares, up to a max of 4 squares, each square reduces hit bonus by 5 and reduces number of bullets per target by one dice size',
            'dice size goes d6, d4, d3, d2 and then 1 bullet'
        ],
        type: 'active'
    },
    {
        name: 'oppressive fire',
        attribute: 'strength',
        description: 'Hold down the trigger on a fully automatic firearm for the whole round, can spray across multiple targets. Requires full-auto or continuous. Uses 4 more action burst.',
        results: [
            'Shoot as many bullets as it uses per round, potentially empying the magazine',
            'Add +15 to hit',
            'If roll equals defense then you hit with 1d8 bullets',
            'Defense limited to base',
            'Prevents reaction until your next turn',
            'Requires that you do not use your movement (before or after)',
            'Strength requirement increase by 2',
            'Gain +1 bullet hit per each 10 over defense',
            'You can fire on multiple adjacent squares 6, each square reduces hit bonus by 5 and number of bullets per target by one dice size.',
            'dice size goes d8, d6, d4, d3, d2'
        ],
        type: 'active'
    },
    {
        name: 'maintain weapon',
        attribute: 'intelligence',
        description: 'keep it clean and good. Takes 2 minute, requires ballistic kit.',
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
