import { PerkTemplate } from "../general/Perks";

const Trivia = new PerkTemplate({
    name: 'trivia',
    skill: 'general knowledge',
    level: 1,
    description: 'You can remember useless but interesting trivia, roll a general knowledge + intelligence vs 15 to raise everyones spirits.'
});

const CommonSense = new PerkTemplate({
    name: 'common sense',
    skill: 'general knowledge',
    level: 1,
    description: 'Once per session when youre about to do something catastrophically stupid the game master will tell you the likely outcome and give a better alternative.' 
})

export const GeneralKnowledgePerks = [Trivia, CommonSense];