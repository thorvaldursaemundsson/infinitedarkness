import React from 'react';
import Section from './Section';
import Indexer, { Indexed } from '../general/Indexer';


const Consumables = () => <Section title='Consumables'>
    <Indexer title='Consumable Items'>
        <Indexed title='Food'><Food /></Indexed>
        <Indexed title='Medicine'><Medicine /></Indexed>
        <Indexed title='Tools'><Tools /></Indexed>
        <Indexed title='Weapons'><Weapons /></Indexed>
    </Indexer>
</Section>;


export default Consumables;

const Food = () => <>
    <p>Food glorious food, keeps us alive. It also matters what you eat and how much you eat</p>
    <h4>How much you eat</h4>
    <p>Characters need to eat a certain amount to live, characters that don't eat enough will start to starve. Also characters that don't eat OR drink water dies after 72 hours of dehydration. Characters need</p>
    <ul>
        <li>Tiny: 2 meal</li>
        <li>Small: 2.5 meals</li>
        <li>Medium: 3 meals</li>
        <li>Large: 3.5 meals</li>
        <li>Huge: 4 meals</li>
    </ul>
    <p>After 2 days of not eating characters will see their life regeneration halved and -2 to all rolls</p>
    <p>After 7 days of not eating characters life regeneration will stop, they take -8 to all rolls</p>
    <p>After 14 days of not eating will start to lose their life, for each day beyond this point they lose 1 maximum life. When maximum life reaches 0 they become unconcious and die the next day.</p>
    <h4>Quality food</h4>
    <p>Good food quality gives improved mood and can even make you physically better</p>
    <ul>
        <li>Horrible food: 25% risk of food poisoning, -2 all rolls rest of the day</li>
        <li>Bad food: -1 to all rolls rest of the day</li>
        <li>Average food: no effect</li>
        <li>Good food: +1 to all rolls for the rest of the day</li>
        <li>Great food: +2 to all rolls for the rest of the day</li>
        <li>Outstanding food: +2 to all rlls for the rest of the day, heal 1 life and mental health at the end of the day</li>
    </ul>
    <h6>Resturant food</h6>
    <p>Resturant food works the same as home cooked food, except someone else bought the raw materials, cooked it and served it to you.</p>
    <ul>
        <li>Horrible food: 40 credits</li>
        <li>Bad food: 60 credits</li>
        <li>Average food: 80 credits</li>
        <li>Good food: 150 credits (reservations 24h required, Savoir-Faire 15. Skip reservation 25)</li>
        <li>Great food: 300 credits (reservations 48h required, Savoir-Faire 20. Skip reservation 30)</li>
        <li>Outstanding food: 500 credits  (reservations 72h required, Savoir-Faire 25. Skip reservation 35)</li>
    </ul>
    <h6>Street food</h6>
    <p>Street food works similar to resturant food with two modifications. Average quality is the highest quality easily available. The price is reduced by 25%.
        You can find good street food with streetwise 20. Great streetfood with streetwise 30. Outstanding streetfood with streetwise 40.
    </p>
    <p>Note that you can only find resturant food and streetwise food in locations where they exist, a successful role may include travel.</p>
    <h6>Home cooked food</h6>
    <p>To cook food you need ingredients, you also need a kitchen, ingredients can be bought for 20 credits per meal or a survival check</p>
    <ul>
        <li>Low quality ingredients cost 10 credits, cause -5 to cooking roll</li>
        <li>High quality ingredients costs 30 credits, cause +3 to cooking roll</li>
        <li>Low quality kitchen causes -5 to cooking roll</li>
        <li>High quality kitchen causes +3 to cooking roll</li>
    </ul>
    <p>You can create a kitchen with a survival check (2h), 20 low quality, 25 mid, 30 high quality. Survival kitchens are always grills</p>
    <p>Hunting or gathering food requires a survival check and 8 hours (the 8 hours are committed whether you succeed or not). If a party of huntergatherers work together they must all roll survival together, the total meals are added up.</p>
    <ul>
        <li>Survival 20: ingredients for 1 meal</li>
        <li>Survival 25: ingredients for 2 meals</li>
        <li>Survival 30: ingredients for 3 meals</li>
        <li>Survival 35: ingredients for 4 meals</li>
        <li>Rush (4h): take -10 penalty to speed up the process. Still uses the effort of 8h</li>
    </ul>
    <p>Preparing a meal typically takes 1h and you can make between 1 and 10 meals per chef (each chef rolls cooking individually)</p>
    <ul>
        <li>Cooking 10 or less: you spoiled the food, horrible quality</li>
        <li>Cooking 11-15: it's edible yet unsatisfying</li>
        <li>Cooking 16-20: average food, it does the job</li>
        <li>Cooking 21-25: good food, leaves you in good mood</li>
        <li>Cooking 26-30: great food, it tastes good and is yet very healthy</li>
        <li>Cooking 31+: Outstanding food, this is some gourmet stuff</li>
        <li>Cooking multiple meals requires an ever larger kitchen, home kitchen is good enough for 5</li>
        <li>For each meal above 1, take -1 to roll (eg. 8 meals = -7 to roll)</li>
        <li>Following recipe: +5 to roll (max is great)</li>
        <li>Cooking fast: 30m, -5 to roll, max quality is great</li>
        <li>Speed cooking: 15m, -10 to roll, max quality is good</li>
    </ul>
    <h6>Rations</h6>
    <p>Rations, or preserved food works similarly to cooked food. The exception is that the price is trippled and capped at good, great and outstanding rations do not exist (sorry, tactical bacon doesn't count)</p>
</>;

const Medicine = () => <>
    <h4>Healing Medicine</h4>
    <p>Healing medicine concerns all kinds of drugs that restore life, limb and damage, all these require medicine check</p>
    <ul>
        <li>Stempack: 200 credits, restores life </li>
        <li>Antibiotics: 400 credits, cures bacterial infection </li>
        <li>Antivirals: 800 credits, cures viral infection </li>
        <li>Radioflush: 900 credits, removes radioactive materials from body </li>
        <li>Antivenom: 700 credits, neutralizes (specific) venom</li>
    </ul>
    <h4>Resillience Drugs</h4>
    <p>Resillience drugs are similar to medicine in that they require medicine skill, however they don't heal damage. They prevent it</p>
    <ul>
        <li>Anti-Radiation drug: 200 credits, reduces accumulation of radiation damage for 30 days</li>
        <li>Active carbon: 10 credits, reduces effect of poisons recently consumed</li>
    </ul>
    <h4>Performance Enhancing Drugs</h4>
    <p>Performance enhancing drugs are often illegal and most carry negative effects, some are also addictive</p>
    <p>Characters who become addicted become unable to resist the temptation to take more of the drug which tends to ruin their lives.</p>
    <ul>
        <li>Weak painkillers: 10 credits, reduces penalty from damage by 2 (no skill needed), lasts 8 hours</li>
        <li>Intermediate painkiller: 50 credits, reduces penalty from damage by 6 (no skill needed, requires prescription), lasts 8 hours</li>
        <li>Strong painkiller: 200 credits, reduces penalty from damage by 16, requires medicine skill, lasts 8 hours</li>
        <li>Coffee: +1 to all intelligence and perception rolls for 6 hours, no effect if addicted</li>
        <li>Alcohol (1 beer): 20 credits, reduces penalty from damage by 1, reduces all mental rolls by 1, lasts 2 hours</li>
        <li>Berzerker drops: 1500 credits, gain +1 strength, endurance, +3 to combat for 1 hour, high risk of addiction</li>
        <li>Spirit Elixir: unknown credits, unknown effect</li>
    </ul>
</>;

const Tools = () => <>
    Med kit
    Ballistic kit
    Spare parts (of)
    Batteries
    Power sources
    Motion sensor
    Camera
</>

const Weapons = () => <>
    Hand grenade
    Remote activated Bomb
    Traps
</>;