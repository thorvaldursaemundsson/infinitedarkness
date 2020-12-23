import { SkillTemplate, UseCase } from "../general/Skills";
const useCases: UseCase[] = [
    {
        name: 'first aid',
        attribute: 'agility',
        description: 'if someone has zero or negative hitpoints then you can prevent bleedout by rolling first aid vs their total damage taken, must be applied every turn or until you succeed with a roll of 10 more than the target',
        results: [
            'perform CPR: 15 or higher: keep alive for as long as you keep performign CPR (only needed if heart stopped or breathing stopped)',
            'stop light bleeding: 4 or lower: fail and cause 1 point of damage',
            'stop light bleeding: 9-24: stop bleeding',
            'stop light bleeding: 25+: stop bleeding and heal 1 life',
            'stop intermediate bleeding: 9 or lower+: fail and cause 1 point of damage',
            'stop intermediate bleeding: 15-34: stop bleeding',
            'stop intermediate bleeding: 35+: stop bleeding and heal 1 life',
            'stop heavy bleeding: 14 or lower+: fail and cause 1 point of damage',
            'stop heavy bleeding: 20+: stop bleeding',
            'patient is different species: -5'
        ],
        type: 'active'
    },
    {
        name: 'surgery',
        attribute: 'agility',
        description: 'perform an operation on a patient with injuries or disease',
        results: [
            'remove bullets or shrapnel, stitch up wounds: equal to total damage, if success by 5 or more heal 1 hp, if success by 10 heal 1d6',
            'fix fractured bone: 25',
            'fix shattered bone: 30',
            'biopsy: 25 (remove small piece of tissue for experimentation)',
            'remove organ or cancer: 25-40 (depends on organ)',
            'if you fail by 0-5 the surgery is a success but the patient takes 1d6 damage',
            'if you fail by -6 the surgery is a failure and the patient takes 1d8 damage',
            'patient is different species: -8'
        ],
        type: 'active'
    },
    {
        name: 'administer medicine',
        attribute: 'intelligence',
        description: 'picking out the right medicine and knowing how to administer it correctly, this involves a 15 minute checkup to diagnose the patient and 45 minutes of research and preparation',
        results: [
            'administer light painkillers: 10 (1/2 damage penalty to skills)',
            'administer medium painkillers: 20 (1/4 damage penalty to skills)',
            'administer heavy painkillers: 30 (1/8 damage penalty to skills)',
            'administer adrenaline: 20+ (patient ignores damage penalties to skills up to -100% damage)',
            'administer stempack: 30+ (takes 10 minutes, heal 1 life per hour for 8 hours, max 1 per endurance per week)',
            'administer stempack: 15 or less cause 1d4 damage and 50% risk of cancer',
            'administer antibiotics: 20',
            'administer antivirals: 25',
            'administer radioflush: 20',
            'administer antivenom: 25',
            'administer gene therapy detox: 25',
            'administer anti-radiation: 25',
            'administer active carbon: 5',
            'administer performance enhancing drugs: 15',
            'patient is different species: -8'
        ],
        type: 'active'
    },
    {
        name: 'diagnosis',
        attribute: 'perception',
        description: 'You perform a rutine health checkup on someone and measure their health and wellbeing.',
        results: [
            'wrong diagnosis: 9 or less (you miss something obvious or mistakenly find something that isnt there)',
            'common result: 20, you find most common diseases and injuries',
            'uncommon 25: you find uncommon diseases and hard to find internal injuries',
            'rare 30: you find rare diseases and hidden injuries',
            'very rare 35: you find very rare diseases, asymptomaic diseases',
            'patient is different species: -5'
        ],
        type: 'active'
    },
    {
        name: 'psychotherapy',
        attribute: 'intelligence',
        description: 'reduce someones fear level, treat mental illness. Takes 2 hour, max once per day for the patient.',
        results: [
            'therapy: 5: lose 1 mental health from stress',
            'therapy 20-24: heal 1 mental health',
            'therapy 25-29: heal 1d2 mental health',
            'therapy 30-34: heal 1d4 mental health',
            'therapy 35+: heal 1d6 mental health',
            'patient is different species: -5'
        ],
        type: 'active'
    },

];
const Medicine = new SkillTemplate('medicine', 'giving people insulin, knowing insulin is not crack', useCases);
export default Medicine;