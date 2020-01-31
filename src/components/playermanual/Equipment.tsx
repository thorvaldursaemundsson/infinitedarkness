
import React from "react";
import Section from "./Section"

const Equipment:React.FC = () => {
    return (<Section title='Equipment'>
        <h2>Equipment</h2>
        <p>Euipment is everything your character can wear on their body or hold and use.</p>

        <h3>Weapons</h3>
        <h4>Melee weapons</h4>
        <h5>Small weapons</h5>
        <p>Small weapons gain 1/4 of your strength (rounded down) as a damage bonus, they are characterized as one handed weapon that can be easily concealed</p>
        <p>Batons/Hammers/Sticks deal 1d4 base damage</p>
        <p>Knifes deal 1d4+1 base damage</p>
        <h5>Medium weapons</h5>
        <p>Medium weapons gain 1/3 of your strength (rounded down) as a bonus damage, they are characterized as one handed weapons that are too big to be easily concealed</p>
        <p>A machete deals 1d6+1 base damage and have a +1 to hit</p>
        <p>A club deals 1d6 base damage</p>
        <p>A short spear deals 1d8 base damage and ignores 1 point of damage reduction</p>
        <h5>Large weapons</h5>
        <p>Large weapons gain 1/2 of your strength (rounded down) as bonus damage, they are characterized as two handed weapons and often are too big for close quarter combat</p>
        <p>Close quarters is defined as being adjecent to 2 or more walls or large obstacles, open quarters is empty space around you (nothing to take cover behind)</p>
        <p>A longsword deals 1d8+1 base damage and gains +2 to hit in open quarters, -2 in close quarters, ignores 1 damage reduction</p>
        <p>A long spear deals 1d8+1 base damage and gains +4 to hit in open quarters, -4 in close quarters, ignores 1 damage reduction</p>
        <p>A battleaxe deals 1d10+1 base damage, gains -2 to hit in close quarters, ignores 2 damage reduction</p>
        
    </Section>);
}

export default Equipment;