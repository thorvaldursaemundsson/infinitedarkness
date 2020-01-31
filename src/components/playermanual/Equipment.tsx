
import React, { CSSProperties } from "react";
import Section from "./Section"

const Equipment: React.FC = () => {
    return (<Section title='Equipment'>
        <h2>Equipment</h2>
        <p>Euipment is everything your character can wear on their body or hold and use.</p>

        <h3>Weapons</h3>
        <h4>Glossary</h4>
        <table>
            <thead><tr><th>abbreviation</th><th>meaning</th></tr></thead>
            <tbody>
                <tr><td>AP</td><td>Armor piercing, this weapon ignores this much damage, example AP 2 = ignores up to 2 damage reduction</td></tr>
                <tr><td>D</td><td>Damage, example D 1d8+1 = roll a 8 sided dice, add 1</td></tr>
                <tr><td>HB (CQ/OQ)</td><td>Hit bonus, close quarters/open quarters, example HB 2 = add 2 to skill roll, HB -3 CQ = subtract 3 if in close quarters</td></tr>
            </tbody>
        </table>
        <h4>Melee weapons</h4>

        <WeaponTable data={[
            { size: 'small', name: 'Batons/hammers/sticks', damage: '1d4' },
            { size: 'small', name: 'Knife', damage: '1d4 + 1' },
            { size: 'medium', name: 'Machete', damage: '1d6 + 1 ', hitbonus: '+1' },
            { size: 'medium', name: 'Club', damage: '1d6' },
            { size: 'medium', name: 'Short spear', damage: '1d8', hitbonus:'+1', armorpiercing:'1' },
            { size: 'large', name: 'Longsword', damage: '1d8 +1', hitbonus:'+2 OQ, -2 CQ', armorpiercing:'1' },
            { size: 'large', name: 'Long spear', damage: '1d8 +1', hitbonus: '+4 OQ, -4 CQ', armorpiercing:'1' },
            { size: 'large', name: 'Battleaxe', damage: '1d10 +1', hitbonus:'-2 CQ', armorpiercing:'2' },
        ]}></WeaponTable>
        <p>Small weapons gain 1/4 of your strength (rounded down) as a damage bonus, they are characterized as one handed weapon that can be easily concealed
            <br/>
            Medium weapons gain 1/3 of your strength (rounded down) as a bonus damage, they are characterized as one handed weapons that are too big to be easily concealed
            <br/>
            Large weapons gain 1/2 of your strength (rounded down) as bonus damage, they are characterized as two handed weapons and often are too big for close quarter combat
        </p>
        <p>Close quarters is defined as being adjecent to 2 or more walls or large obstacles, open quarters is empty space around you (nothing to take cover behind)</p>
        
        <h4>Guns</h4>
        <h5>Hand guns</h5>
        <p>Revolver, an antique kind of gun that offers only aimed shots, deals 1d10 damage, ignores 2 damage reduction</p>
    </Section>);
}

interface MeleeWeapon {
    size: 'small' | 'medium' | 'large';
    name: string;
    damage: string;
    hitbonus?: string;
    armorpiercing?: string;
}

interface WeaponTableProps {
    data: MeleeWeapon[];
}

const WeaponTable: React.FC<WeaponTableProps> = ({data}) => {
    const s:CSSProperties = {
        borderLeft:'1px dotted lightgrey'
    }
    return (<table>
        <thead>
            <tr>
                <th>Size</th>
                <th>Name</th>
                <th>Damage</th>
                <th>AP</th>
                <th>HB</th>
            </tr>
        </thead>
        <tbody>
            {data.map(weapon => {
                return <tr>
                    <td style={s}>{weapon.size}</td>
                    <td style={s}>{weapon.name}</td>
                    <td style={s}>{weapon.damage}</td>
                    <td style={s}>{weapon.armorpiercing}</td>
                    <td style={s}>{weapon.hitbonus}</td>
                </tr>
            })}
        </tbody>
    </table>);
}

export default Equipment;