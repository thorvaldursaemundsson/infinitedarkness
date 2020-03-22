
import React, { CSSProperties } from "react";
import Section from "./Section"
import Firearms, { FireArm } from "../equipment/Firearms";
import MeleeWeapons, { MeleeWeapon } from "../equipment/MeleeWeapons";
import Armors from "../equipment/Armors";

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

        <WeaponTable data={MeleeWeapons}></WeaponTable>
        <p>Small weapons gain 1/4 of your strength (rounded down) as a damage bonus, they are characterized as one handed weapon that can be easily concealed
            <br />
            Medium weapons gain 1/3 of your strength (rounded down) as a bonus damage, they are characterized as one handed weapons that are too big to be easily concealed
            <br />
            Large weapons gain 1/2 of your strength (rounded down) as bonus damage, they are characterized as two handed weapons and often are too big for close quarter combat
        </p>
        <p>Close quarters is defined as being adjecent to 2 or more walls or large obstacles, open quarters is empty space around you (nothing to take cover behind)</p>

        <h4>Guns</h4>

        <FirearmTable data={Firearms} />

        <h3>Body Armors</h3>
        <p>Armors come in many forms, anything that offers either damage reduction or armor penalty counts as body armor. Damage reduction is applied to any incoming damage, armor penalty is applied to all agility based rolls. Every time an armor fails to absorb all damage it loses damage reduction by 1. If it hits 0 then it is no longer able to offer protection</p>
        <table>
            <thead><tr>
                <th>name</th><th>damage reduction</th><th>armor penalty</th><th>value</th><th>weight</th><th>description</th>
            </tr></thead>
            <tbody>
                {Armors.map(armor => {
                    return <tr>
                        <td> {armor.name} </td>
                        <td> {armor.damageReduction} </td>
                        <td> {armor.armorPenalty} </td>
                        <td> {armor.value} </td>
                        <td> {armor.weight} </td>
                        <td> {armor.description} </td>
                    </tr>
                })}
            </tbody>
        </table>
        <h3>Tools</h3>
        <table>
            <thead><tr>
                <th> </th>
            </tr></thead>
            <tbody>
                <tr>
                    <td> </td>
                </tr>
            </tbody>
        </table>
        <h3>Vehicles</h3>
        <table>
            <thead><tr>
                <th> </th>
            </tr></thead>
            <tbody>
                <tr>
                    <td> </td>
                </tr>
            </tbody>
        </table>

    </Section>);
}


const weightConverter = (grams: number) => {
    if (grams < 1000) return `${grams} g`;
    if (grams < 10000) return `${Math.floor(grams / 10000) * 10} kg`;
    else return `${Math.floor(grams / 10000000) * 10} tons`;
}

interface WeaponTableProps {
    data: MeleeWeapon[];
}

const WeaponTable: React.FC<WeaponTableProps> = ({ data }) => {
    const s: CSSProperties = {
        borderLeft: '1px dotted lightgrey'
    }

    return (<table>
        <thead>
            <tr>
                <th>Size</th>
                <th>Name</th>
                <th>Damage</th>
                <th>AP</th>
                <th>HB</th>
                <th>Weight</th>
                <th>Value</th>
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
                    <td style={s}>{weightConverter(weapon.weight)}</td>
                    <td style={s}>{weapon.value} c</td>
                </tr>
            })}
        </tbody>
    </table>);
}

interface FirearmTableProps {
    data: FireArm[];
}

const FirearmTable: React.FC<FirearmTableProps> = ({ data }) => {
    return (<table>
        <thead>
            <tr>
                <th>Class</th>
                <th>Name</th>
                <th>Damage</th>
                <th>AP</th>
                <th>HB</th>
                <th>Range</th>
                <th>Action</th>
                <th>Ammo/Cap</th>
                <th>notes</th>
                <th>Weight</th>
                <th>Value</th>
            </tr>
        </thead>
        <tbody>
            {data.map(f => {
                return (<tr>
                    <td>{f.fireArmClass}</td>
                    <td>{f.name}</td>
                    <td>{f.damage}</td>
                    <td>{f.armorpiercing}</td>
                    <td>{f.hitbonus}</td>
                    <td>{f.range}</td>
                    <td>{f.fireAction.join(', ')}</td>
                    <td>{f.capacity} ({f.ammo}) {f.rps !== undefined ? '/ rpr: ' + f.rps * 6 : null}</td>
                    <td>{weightConverter(f.weight)}</td>
                    <td>{f.value} c</td>
                    <td>{f.description}</td>
                </tr>);
            })}
        </tbody>
    </table>)
}

export default Equipment;