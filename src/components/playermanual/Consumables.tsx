import React from 'react';
import Section from './Section';
import Indexer, { Indexed } from '../Indexer';


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
        <li>Tiny: 1 meal</li>
        <li>Small: 2 meals</li>
        <li>Medium: 3 meals</li>
        <li>Large: 4 meals</li>
        <li>Huge: 5 meals</li>
    </ul>
    <p>After 2 days of not eating characters will see their life regeneration halved and -2 to all rolls</p>
    <p>After 7 days of not eating characters life regeneration will stop, they take -8 to all rolls</p>
    <p>After 14 days of not eating will start to lose their life, for each day beyond this point they lose 1 maximum life. When maximum life reaches 0 they become unconcious and die the next day.</p>
    <h4>Quality food</h4>
    <p>Good food quality gives improved mood and can even make you physically better</p>
    <h6>Home cooked food</h6>
    <p>See cooking skill to find which you can make</p>
    <ul>
        <li>Horrible food: 25% risk of food poisoning, -2 all rolls rest of the day</li>
        <li>Bad food: -1 to all rolls rest of the day</li>
        <li>Average food: no effect</li>
        <li>Good food: +1 to all rolls for the rest of the day</li>
        <li>Great food: +2 to all rolls for the rest of the day</li>
        <li>Outstanding food: +2 to all rlls for the rest of the day, heal 1 life and mental health at the end of the day</li>
    </ul>
    <h6>Resturant food</h6>
    <p>Resturant food works the same as home cooked food, except someone else bought the raw materials, cooked it and served it to you</p>
    <ul>
        <li>Horrible food: 50 credits</li>
        <li>Bad food: 120 credits</li>
        <li>Average food: 200 credits</li>
        <li>Good food: 300 credits</li>
        <li>Great food: 500 credits</li>
        <li>Outstanding food: 700 credits</li>
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