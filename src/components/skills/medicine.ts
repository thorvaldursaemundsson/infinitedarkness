import { SkillTemplate, UseCase } from "../general/Skills";
const useCases: UseCase[] = [
    {
        name: 'first aid',
        attribute: 'agility',
        description: 'if someone has zero or negative hitpoints then you can prevent bleedout by rolling first aid vs their total damage taken. Plausing bleeding means that taking injury restarts bleeding and total expected life loss is culumative. Stopped means bleeding starts over',
        results: [
            'perform CPR: 15 or higher: keep alive for as long as you keep performign CPR (only needed if heart stopped or breathing stopped)',
            'stop bleeding: 10-14, bleeding is slowed to half (requires ongoing care)',
            'stop bleeding: 15-19, bleeding is paused (requires ongoing care)',
            'stop bleeding: 20-24, bleeding is paused',
            'stop bleeding: 25-29, bleeding is stopped and target regains consciousness if unconscious',
            'stop bleeding: 30+, as 29 and additionally target regains 1 life ',
            'target is critical: -3',
            'target is different species: -3',
            'target is self: -5'
        ],
        type: 'active'
    },
    {
        name: 'surgery',
        attribute: 'agility',
        description: 'perform an operation on a patient with injuries or disease. If the patient takes enough damage (-200%) they die.',
        results: [
            'remove bullets or shrapnel, stitch up wounds: equal to total damage, if success by 5 or more heal 1 hp, if success by 10 heal 1d6. Takes 10 minutes per point of damage plus 10 minutes pre-work',
            'fix fractured bone: DC 25',
            'fix shattered bone: DC 30',
            'biopsy: DC 25 (remove small piece of tissue for experimentation)',
            'remove organ or cancer: DC 25-40 (depends on organ)',
            'if you fail by less than 5 the surgery is a success but the patient takes 1d6 damage',
            'if you fail by 6 or more the surgery is a partial failure, the patient takes 1d8 damage, add half your result on the next surgery',
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