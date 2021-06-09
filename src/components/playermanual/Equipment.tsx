
import React, { CSSProperties, useState } from "react";
import Section from "./Section"
import Firearms, { FireArm, AmmoInformation, AmmoTypesInformation, Ammo, AmmoModifications, FirearmModifications, writeDamageDice } from "../equipment/Firearms";
import MeleeWeapons, { MeleeWeapon } from "../equipment/MeleeWeapons";
import Ellipsis from "../general/Ellipsis";
import Indexer, { Indexed } from "../general/Indexer";
import { bodySuits, armorPlates, PowerArmor, powerArmors, ArmorData, integratedSystems } from "../equipment/Armors";
import ArmorCrafter from "../equipment/ArmorCrafter";
import { bigNumberSeparator, weightConverter } from "../../utils/utilFunctions";
import FirearmCrafter from "../equipment/FirearmCrafter";
import { Condition, Quality } from "../equipment/Item";

const Equipment: React.FC = () => {
    return (<Section title='Equipment'>
        <h2>Equipment</h2>
        <p>Euipment is everything your character can wear on their body or hold and use.</p>
        <Indexer title='equipment'>
            <Indexed title='Melee Weapons'>
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
            </Indexed>
            <Indexed title='Firearms'>
                <h4>Guns</h4>
                <p>All firearms cause bleeding</p>
                <FirearmCrafter />
                <hr />
                <FirearmTable data={Firearms} />
                <p>
                    Condition adds to to hit modifier, quality adds to both to hit and damage.
                </p>
                <h5>Firearm modifications</h5>
                <p>In addition to the various weapons there are modifications which can affect the firearms performance in various ways</p>
                <ul>
                    {FirearmModifications.map(fm => <li><b>{fm.name}</b>: {fm.description}
                        <br />
                        <ul>{fm.effects.map(e => <li>{e}</li>)}</ul>
                        Weight: {fm.weight}
                        <br />Cost: {fm.cost}
                    </li>)}
                </ul>

                <h4>Ammunition</h4>
                <p>All ammunition comes various forms and serve different purposes and come in different costs</p>
                {AmmoTable(AmmoTypesInformation)}
                <b>Modifications</b>
                <ul>
                    {AmmoModifications.map(am => <li><b>{am.name}</b>: {am.description}<br /> cost: {am.cost * 100}%</li>)}
                </ul>
            </Indexed>
            <Indexed title='Body Armors'>
                <p>Armors come in many forms, anything that offers either damage reduction or armor penalty counts as body armor. Damage reduction is applied to any incoming damage, armor penalty is applied to all agility based rolls. Every time an armor fails to absorb all damage it loses damage reduction by 1. If it hits 0 then it is no longer able to offer protection</p>
                <p>Armor have up to three layers, the inner body suit, the armor plates and the power armor frame</p>
                <p>Additionally armor cost is affected by three factors, quality/condition, size, coverage</p>
                <p>Quality/condition simply applies to total damage reduction, however pristine and intact give no benefit. They merely act as a buffer</p>
                <p>Size applies to weight and cost, but not to protection. Armors must often be custom made to the wearer</p>
                <ul>
                    <li>Tiny: -20% cost/weight</li>
                    <li>Small: -10% cost/weight</li>
                    <li>Medium: no effect</li>
                    <li>Large: +10% cost/weight</li>
                    <li>Huge: +20% cost/weight</li>
                </ul>
                <p>Coverage is a matter of how much the armor covers the body, as a matter of rule simplification armors are assumed to protect the more vital areas first.
                When coverage is less than full roll a 1d6 dice and if the dice equals or exceeds the value then you benefit, otherwise you don't.
                When blocking you always receive protection from armor as it is assumed that the character blocks using armor or shield.<br />
                Full plate armors require vast or full protection.<br />
                Power Armor requires vast or full protection.<br />
                Armor plates require body suits.
                </p>
                <ul>
                    <li>Full protection: 100% cost/weight and 6/6 protection (no roll needed) - entire body protected</li>
                    <li>Vast majority protection: 90% cost/weight and 5/6 roll - entire body except for hands</li>
                    <li>Major protection: 80% cost/weight and 4/6 roll - helmet, body, legs and joints</li>
                    <li>Half protection: 70% cost/weight and 3/6 roll - helmet, body, joints</li>
                    <li>Small protection: 50% cost/weight and 2/6 roll (not available for power armor) - helmet and body</li>
                    <li>Minor protection: 30% cost/weight and 1/6 roll (not available for power armor) - open face helmet and torso</li>
                </ul>
                <p>A power armor battery lasts for 5 days (or exactly 80 hours) of active use, takes 8 hours to fully recharge if plugged into a household electric socket. Can be plugged into electric vehicle socket, will recharge in 30 minutes.</p>
                <p>Agility penalty applies to rolls and defense score. Your effective agility score can be reduced below zero for skill rolls but not defense.</p>
                <ArmorCrafter />
                <h5>Body Suit</h5>
                <ArmorTable armors={bodySuits} />
                <h5>Armor Plates</h5>
                <ArmorTable armors={armorPlates} />
                <h5>Power Armor Frame</h5>
                <ArmorTable armors={powerArmors} />
                <h5>Integrated systems</h5>
                <table>
                    <thead>
                        <tr>
                            <th style={{ width: '20%' }}>Name</th>
                            <th>Description</th>
                            <th style={{ width: '15%' }}>Cost</th>
                            <th style={{ width: '15%' }}>Weight</th>
                        </tr>
                    </thead>
                    <tbody>
                        {integratedSystems.map(i => <tr>
                            <td>{i.name}</td>
                            <td><Ellipsis text={i.description} cutOff={40} /></td>
                            <td>{bigNumberSeparator(i.cost)}</td>
                            <td>{i.weight}</td>
                        </tr>)}
                    </tbody>
                </table>

                <h5>Armor Degradation</h5>
                <i>Armor is degraded every time it is penetrated, ie whenver the wearer takes damage.</i>
                <p>When you take damage while wearing armor roll a d20, if the roll is equal or above then the armor takes no damage.
                    Otherwise the armor permanently loses 1 point of damage absorbtion (keep track of original value when this happens).<br />
                    Since you can't roll a zero on a d20 you only need to roll if more than one point of damage goes through.<br />
                    To repair it requires spare parts, the spare parts cost an equal fraction of total loss divided by half.<br />
                    Repair requires a mechanics roll equal to repair cost / 200 rounded down. And if it is a power armor, an equal roll for electronics.<br />
                    It takes 1 hour per point to repair.<br />
                    If damage absorbtion is reduced to zero then the power armor effects no longer work. However some effects like hermetic seal will immediately stop working if even one point is reduced.
                </p>
                <p>
                    For example, a Carbon Reinforced Kevlar, Fullplate Steel armor has 10 damage absorbtion. If you then receive 12 damage points, 10 is subtracted for a total of 2.<br />
                    If you roll 1 on a d20 the damage absorbtion will be reduced to 9.<br />
                    The armor costed 14000 credits, so (14000 * (1 / 10)) / 2) = 700 credits, DC 3, 1 hour.
                </p>
                <p>
                    A  Carbon Reinforced Kevlar, Fullplate Titan Alloy, Titan Power Armor has 16 damage absorbtion. If you then receive 20 damage points five times, 16 is subtracted for a total of 4 x 5.<br />
                    If you roll 3 on a d20 the damage absorbtion will be reduced to 15, 14, 13, 12 then 11.<br />
                    The armor costed 33000 credits, so (33000 * (5 / 16)) / 2) = 1030, 2060, 3090, 4125, 5150 credits, DC 5, 10, 15, 20, 25 taking 1,2,3,4,5 hour.
                </p>
                <p>Armor quality is applied to agility penalty per piece, penalty can not be reduced below zero so a better than normal quality power armor does nothing.</p>
            </Indexed>
            <Indexed title='Quality and Condition'>
                <p>Quality and condition are optional rules that can increase variety and make items feel more personal. Unless stated otherwise quality and condition effects apply to skill rolls using tools.</p>
                <h4>Condition</h4>
                <p>Condition refers to the wear and tear of an item that is used in skill checks, it is also affected by direct damage and repair.</p>
                <table>
                    <thead>
                        <tr><th>Condition</th><th>Effect</th><th>Value</th></tr>
                    </thead>
                    <tbody>
                        {Condition.map(c => <tr> <td>{c.label}</td><td>{plusMinus(c.effect)}</td><td>{c.valueModifier * 100}%</td></tr>)}
                    </tbody>
                </table>
                <p>When an item has been used a number of times equal to the users skill it drops in condition by 1 step, a repair skill check can prevent this. A failed repair can cause the quality to drop.</p>
                <p>Someone who knows how to repair an item can always choose to repair them, each time lets you increase the condition by 1 step.</p>
                <p>An item that is allowed to deteriorate below broken can no longer be used for its intended purpose, it is completely ruined.</p>
                <p>Any item is always assumed to be at pristine quality if possible, the player may choose to buy a used item, at which it will cost less. Multiplie factors aways appy multiplicative, a broken trash item costs x 0.4 x 0.4 = 0.16, or 16% of its base value, buying it at start costs therefore 8%.</p>
                <p>Players choosing to buy a house using these factors will take the combined effects to their mental health.</p>
                <h4>Quality</h4>
                <p>Quality refers to the materials used, the precision of the craft and it can even refer to if it's made for one person in particular</p>
                <table>
                    <thead>
                        <tr><th>Quality</th><th>Effect</th><th>Value</th></tr>
                    </thead>
                    <tbody>
                        {Quality.map(c => <tr> <td>{c.label}</td><td>{plusMinus(c.effect)}</td><td>{c.valueModifier * 100}%</td></tr>)}
                    </tbody>
                </table>
                <p>Improving the quality of an item is not possible without supplying new material, these materials need to be of equivalent or higher quality, a failed attempt will consume the materials. A badly failed will reduce condition.</p>
                <p>Items with quality below trash can not be used.</p>
                <p>Items with quality great, superb, awful and trash can generally not be bought on the mainstream market.</p>
            </Indexed>
        </Indexer>

    </Section>);
}

const plusMinus = (n: number) => {
    if (n === 0) return '+/- 0';
    else if (n > 0) return `+${n}`;
    else return `-${Math.abs(n)}`;
};

interface IArmorTableProps {
    armors: ArmorData[];
}

const armorThSizeWide: CSSProperties = {
    width: '30%'
}

const ArmorTable: React.FC<IArmorTableProps> = ({ armors }) => {
    return <table>
        <thead>
            <tr>
                <th style={armorThSizeWide}>Name</th>
                <th style={armorThSizeWide}>Damage Absorbtion</th>
                <th>Mod</th>
                <th>Cost</th>
                <th>Weight</th>
            </tr>
        </thead>
        <tbody>
            {armors.map(bs => <ArmorRow armor={bs}></ArmorRow>)}
        </tbody>
    </table>;
}
interface IArmorRow {
    armor: ArmorData;
}
const ArmorRow: React.FC<IArmorRow> = ({ armor }) => {
    const [descriptionOpen, setDescriptionOpen] = useState(false);
    let extra = '';
    if (armor.armorType === 'powerArmor') {
        const pa: PowerArmor = armor as PowerArmor;
        extra = `| ${pa.strengthMod} | ${pa.perceptionMod}`;
    }
    if (descriptionOpen)
        return <>
            <tr onClick={() => setDescriptionOpen(false)}>
                <td>{armor.name}</td>
                <td>{armor.damageAbsorbtion}</td>
                <td>{armor.agilityMod} {extra}</td>
                <td>{bigNumberSeparator(armor.cost)}</td>
                <td>{armor.weight}</td>
            </tr>
            <tr><td colSpan={5}><Ellipsis text={armor.description} cutOff={120}></Ellipsis></td></tr>
        </>;
    else
        return (<tr onClick={() => setDescriptionOpen(true)}>
            <td>{armor.name}</td>
            <td>{armor.damageAbsorbtion}</td>
            <td>{armor.agilityMod} {extra} </td>
            <td>{bigNumberSeparator(armor.cost)}</td>
            <td>{armor.weight}</td>
        </tr>);
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
                    <td style={s}>{bigNumberSeparator(weapon.value)} c</td>
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
                <th>Weight</th>
                <th>Value</th>
            </tr>
        </thead>
        <tbody>
            {data.map(f => FireArmRow(f))}
        </tbody>
    </table>)
}

const firearmRowStyle: CSSProperties = {
    cursor: 'pointer'
};

const getAmmoInfo = (ammo: Ammo): AmmoInformation => {
    const c = AmmoTypesInformation.find(a => a.ammo === ammo);
    if (c !== undefined) return c;
    else throw new Error();
}

const FireArmRow = (f: FireArm) => {
    const [descriptionOpen, setDescriptionOpen] = useState(false);

    return (<><tr style={firearmRowStyle} onClick={() => setDescriptionOpen(!descriptionOpen)}>
        <td>{f.fireArmClass}</td>
        <td>{f.name}</td>
        <td>{writeDamageDice(f.damage, 0)} {f.splashRange !== undefined ? `(s)` : ' '}</td>
        <td>{f.armorpiercing || 0}</td>
        <td>{f.hitbonus || 0}</td>
        <td>{f.range}</td>
        <td>{f.fireAction.join(', ')}</td>
        <td>{f.capacity} ({f.ammo}) {f.rps !== undefined ? '/ rpr: ' + f.rps * 6 : null}</td>

        <td>{weightConverter(f.weight)}</td>
        <td title={(getAmmoInfo(f.ammo).cost * f.capacity).toFixed(0)}>{bigNumberSeparator(f.value)}</td>
    </tr>
        {descriptionOpen && <tr>
            <td>STR: {f.strengthRequirement}</td>
            <td>
                {f.splashRange !== undefined ? `Splash: ${f.splashRange}${f.lowDamageZone !== undefined ? `/${f.lowDamageZone}` : ``} m radius` : ' '}
            </td>
            <td colSpan={8}><Ellipsis text={f.description} cutOff={100} /></td>
        </tr>}
    </>);
}

const capitalize = (str: string): string =>
    str.charAt(0).toUpperCase() + str.slice(1);

const AmmoTable = (ammo: AmmoInformation[]) =>
    <table>
        <thead>
            <tr>
                <th>Type</th>
                <th>Cost (per 1)</th>
                <th>Weight (pet 1)</th>
                <th>Modifications</th>
            </tr>
        </thead>
        <tbody>
            {ammo.map(a =>
                <><tr>
                    <td>{a.ammo}</td>
                    <td>{a.cost}</td>
                    <td>{a.weight}</td>
                    <td>
                        {a.types.map(t => capitalize(t)).join(', ')}
                    </td>
                </tr>
                    <tr>
                        <td className='univeralBorderBottom' colSpan={3}>{a.description}</td>
                        <td className='univeralBorderBottom'> Heard from: {a.loudness.hearingRange}, deaf from:{a.loudness.deafnessRange} for {a.loudness.deafnessTime} rounds </td>
                    </tr>
                </>)}
        </tbody>
    </table>;

export default Equipment;