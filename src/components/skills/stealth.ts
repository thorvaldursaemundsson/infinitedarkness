import { SkillTemplate, UseCase } from "../general/Skills";
const useCases: UseCase[] = [
    {
        name: 'shadow',
        attribute: 'agility',
        description: 'follow someone without them knowing youre following them, roll stealth + agility vs their perception + stealth (passive take 10)',
        results: [
            'critical failure: 10 less than their perception roll: they notice you immediately, you dont notice that they notice you',
            'failure: less than their perception roll: they notice you immediately',
            'success: +0-5: you can follow them for 10 minutes undetected',
            'success: +6-5: you can follow them for 20 minutes undetected',
            'success: +11-15: you can follow them for 40 minutes undetected',
            'success: +16-20: you can follow them for 80 minutes undetected',
            'success: +21-25: you can follow them for 160 minutes undetected',
            'success: +26-30: you can follow them for 320 minutes undetected',
            'Target is paranoid: -5 to roll',
            'Target knows your face: -10 to roll',
            'You blend in well: +5 to roll',
            'You stick out: -10 to roll'
        ],
        type: 'active'
    },
    {
        name: 'hide',
        attribute: 'agility',
        description: 'hide somewhere, roll agility + stealth vs target perception + stealth. Requires that you are obscured.',
        results: [
            'critical failure: 10 less than their perception roll: they notice you immediately, you dont notice that they notice you',
            'failure: less than their perception roll: they notice you immediately',
            'success: 0-5: you are hidden for 15 minutes before they find you',
            'success: 6-5: you are hidden them for 30 minutes before they find you',
            'success: 11-15: you are hidden for 1 hour before they find you',
            'success: 16-20: you are hidden for 2 hours before they find you',
            'success: 21-25: you are hidden for 4 hours before they find you',
            'success: 26-30: you are hidden for 8 hours before they find you',
        ],
        type: 'active'
    },
    {
        name: 'detection',
        attribute: 'perception',
        description: 'find someone who is hiding or shadowing you, this is a passive roll.',
        results: [
            'Active shadow search: +5 to your roll, shadow knows you are searching for a shadow',
            'Active hidden person search: +5 to your roll, hidden person knows you are searching for a hiding person',
        ],
        type: 'passive'
    },
    {
        name: 'conceal weapon',
        attribute: 'agility',
        description: 'You attempt to hide a weapon on your body. This is contested by a passive stealth + perception (10 + stealth + perception). Depending on the weight you will receive a modifier',
        type: 'active',
        results: [
            '99 grams or less: +10',
            '100-250 grams: +8',
            '251-500 grams: +6',
            '501-750 grams: +4',
            '751-1000 grams: +2',
            '1-1.5 kg: +/-0',
            '1.5-2 kg: -2',
            '2-3 kg: -4',
            '3-4 kg: -8',
            '4-6 kg: -16',
            '6-8 kg: -32',
            '8-10 kg: -64',
            '10+ kg: impossible',
        ]
    }
];
const Stealth = new SkillTemplate('stealth', 'To be in stealth means that you are not seen and not heard.', useCases);
export default Stealth;