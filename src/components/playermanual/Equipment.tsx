
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
            { size: 'small', name: 'Batons/hammers/sticks', damage: '1d4', weight: 500, value: 10 },
            { size: 'small', name: 'Knife', damage: '1d4 + 1', weight: 100, value: 15 },
            { size: 'medium', name: 'Machete', damage: '1d6 + 1 ', hitbonus: '+1', weight: 300, value: 200 },
            { size: 'medium', name: 'Club', damage: '1d6', weight: 1000, value: 1 },
            { size: 'medium', name: 'Short spear', damage: '1d8', hitbonus: '+1', armorpiercing: 1, weight: 500, value: 250 },
            { size: 'large', name: 'Longsword', damage: '1d8 +1', hitbonus: '+2 OQ, -2 CQ', armorpiercing: 1, weight: 800, value: 2000 },
            { size: 'large', name: 'Long spear', damage: '1d8 +1', hitbonus: '+4 OQ, -4 CQ', armorpiercing: 1, weight: 900, value: 900 },
            { size: 'large', name: 'Battleaxe', damage: '1d10 +1', hitbonus: '-2 CQ', armorpiercing: 2, weight: 1500, value: 1500 },
        ]}></WeaponTable>
        <p>Small weapons gain 1/4 of your strength (rounded down) as a damage bonus, they are characterized as one handed weapon that can be easily concealed
            <br />
            Medium weapons gain 1/3 of your strength (rounded down) as a bonus damage, they are characterized as one handed weapons that are too big to be easily concealed
            <br />
            Large weapons gain 1/2 of your strength (rounded down) as bonus damage, they are characterized as two handed weapons and often are too big for close quarter combat
        </p>
        <p>Close quarters is defined as being adjecent to 2 or more walls or large obstacles, open quarters is empty space around you (nothing to take cover behind)</p>

        <h4>Guns</h4>
        
        <FirearmTable data={[
            { class: 'handgun', name: 'revolver', damage: '1d10', range: '200m', ammo: '10mm', capacity: 6, fireAction: ['double action revolver'], armorpiercing: 2, weight: 200, value: 3500 },
            { class: 'handgun', name: 'Grevvy light', damage: '1d10', range: '250m', ammo: '10mm', capacity: 19, fireAction: ['semi-automatic'], armorpiercing: 3, weight: 260, value: 3200 },
            { class: 'handgun', name: 'Grevvy duty', damage: '1d12', range: '250m', ammo: '11mm', capacity: 14, fireAction: ['semi-automatic'], armorpiercing: 2, weight: 400, value: 4000 },
            { class: 'handgun', name: 'Grevvy sub', damage: '1d10', range: '210m', ammo: '9mm', capacity: 24, fireAction: ['semi-automatic', 'fully-automatic'], armorpiercing: 1, rps: 3, weight: 360, value: 6500 },
            { class: 'rifle', name: 'Grevvy marksman', damage: '1d12', range: '350m', ammo: '11mm', capacity: 24, fireAction: ['semi-automatic'], armorpiercing: 2, weight: 1200, value: 5200 },
            { class: 'rifle', name: 'Skolt Hunter', damage: '1d12', range: '350m', ammo: '12mm', capacity: 8, fireAction: ['semi-automatic'], armorpiercing: 1, weight: 1600, value: 8000 },
            { class: 'rifle', name: 'Skolt LG', damage: '1d12', range: '350m', ammo: '12mm', capacity: 6, fireAction: ['semi-automatic'], armorpiercing: 2, weight: 1800, value: 7500 },
            { class: 'rifle', name: 'Skolt Advanced', damage: '1d12', range: '150m', ammo: '11mm', capacity: 60, fireAction: ['semi-automatic', 'fully-automatic'], armorpiercing: 1, rps: 4, weight: 2200, value: 9000 },
            { class: 'machinegun', name: 'Grevvy Tyrant', damage: '1d10', range: '180m', ammo: '8mm', capacity: 110, fireAction: ['fully-automatic'], armorpiercing: 0, rps: 10, weight: 2300, value: 13000 },
            { class: 'machinegun', name: 'Merlion Durium', damage: '1d12', range: '380m', ammo: '9mm', capacity: 120, fireAction: ['fully-automatic'], armorpiercing: 0, rps: 8, weight: 1900, value: 18000 },
            { class: 'machinegun', name: 'Skolt Obliderator', damage: '2d8', range: '120m', ammo: '12mm', capacity: 180, fireAction: ['fully-automatic'], armorpiercing: 0, rps: 12, weight: 4200, value: 17000 },
            { class: 'rocketlauncher', name: 'ALV-RL', damage: '10d6', range: '500m', ammo: '40mm rpg', capacity: 4, fireAction: ['bolt action'], armorpiercing: 0, weight: 3900, value: 6000 },
            { class: 'rocketlauncher', name: 'AT-RL', damage: '12d6', range: '500m', ammo: '50mm rpg', capacity: 1, fireAction: ['bolt action'], armorpiercing: 0, hitbonus: 4, weight: 4600, value: 8500, description: 'uses targeted system, uses two rounds to fire, ONLY snipe-shot available' },
            { class: 'laser', name: 'Skolt Lightpulse', damage: '1d8', range: '800m', ammo: '1hec', capacity: 100, fireAction: ['semi-automatic'], armorpiercing: 1, hitbonus: 3, weight: 3200, value: 19000, description: 'blue laser pulse, needs protective gear to use, half range penalty' },
            { class: 'laser', name: 'Merlion Deathray', damage: '1d12', range: '1800m', ammo: '2hec', capacity: 80, fireAction: ['semi-automatic'], armorpiercing: 3, hitbonus: 4, weight: 2900, value: 27000, description: 'needs protective gear to use, quarter range penalty' },
            { class: 'plasma', name: 'Merlion Plasma Cannon', damage: '4d8', range: '90m', ammo: '10hec', capacity: 120, fireAction: ['semi-automatic'], armorpiercing: 0, hitbonus: 1, weight: 6000, value: 29000, description: 'needs protective gear to use' },
        ]} />

        <h3>Body Armors</h3>
        <h4></h4>
        <h3>Tools</h3>
        <h4></h4>
        <h3>Vehicles</h3>
        <h4></h4>
        
    </Section>);
}

interface Item {
    weight: number;
    value: number;
    description?: string;
    name: string;
}

interface MeleeWeapon extends Item {
    size: 'small' | 'medium' | 'large';
    damage: string;
    hitbonus?: string;
    armorpiercing?: number;
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

type fireAction = 'single action revolver' | 'double action revolver' | 'bolt action' | 'pump action' | 'semi-automatic' | 'fully-automatic' | 'continuous';

interface Firearm extends Item {
    class: 'handgun' | 'rifle' | 'machinegun' | 'rocketlauncher' | 'laser' | 'plasma',
    damage: string;
    range: string;
    armorpiercing?: number;
    hitbonus?: number;
    fireAction: fireAction[];
    capacity: number;
    ammo: string;
    rps?: number;
}
interface FirearmTableProps {
    data: Firearm[];
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
                    <td>{f.class}</td>
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