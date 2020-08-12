import React from 'react';
import Section from './playermanual/Section';
import Indexer, { Indexed } from './Indexer';


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
<p>Food glorious food, </p>
Home cooked food
Resturant cooked food
Rations
Bad food vs good food
Rationing food, not eating enough
</>;

const Medicine = () => <>
Stempack
Antibiotics
Antivirals
Anti-radiation
Anti-poison
Painkillers
Stimulants
Depressants
Rad resistence
Warrior drug
Brain pills
Healing powder
Spirit Elixir
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