import { SkillTemplate, UseCase } from "../general/Skills";
const useCases: UseCase[] = [
    {
        name: 'prepare meal',
        attribute: 'perception',
        description: 'you convert ingredients into a homecooked meal, you may cook multiple meals at once if the kitchen has the amenities for it.',
        results: [
            'Cooking 10 or less: you spoiled the food, horrible quality',
            'Cooking 11-15: its edible yet unsatisfying',
            'Cooking 16-20: average food, it does the job',
            'Cooking 21-25: good food, leaves you in good mood',
            'Cooking 26-30: great food, it tastes good and is yet very healthy',
            'Cooking 31+: Outstanding food, this is some gourmet stuff',
            'Cooking multiple meals requires an ever larger kitchen, home kitchen is good enough for 5',
            'For each meal above 1, take -1 to roll (eg. 8 meals = -7 to roll)',
            'Following recipe: +5 to roll (max is great)',
            'Cooking fast: 30m, -5 to roll, max quality is great',
            'Speed cooking: 15m, -10 to roll, max quality is good',
        ],
        type: 'active'
    },
    {
        name: 'preserve food',
        attribute: 'intelligence',
        description: 'you convert edible food or raw ingredients into long lasting preserved food allowing it to last longer, you may preserve up to 10 meals as a single action, each meal increases time by 10%. Requires access to kitchen',
        type: 'active',
        results: [
            'cooling: 5, food lasts 1 week',
            'freezing: 5, food lasts 1 month',
            'pickle: 15 average, 20 good. Takes 1 hour. Requires sealable container. lasts 1 year on average',
            'curing: 20 average, 25 good. Takes 1 hour + 16 hours of time. lasts 6 months on average',
            'fermentation: 20 average, 25 good, 30 great, 35+ outstanding.',
            'high density ration: 25, requires raw protein, fats, sugars and synthetic vitamims. Lasts 10 years'
        ]
    }
];
const Cooking = new SkillTemplate('cooking', 'everything related to cooking food', useCases);
export default Cooking;