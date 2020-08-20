
import React, { CSSProperties, useState } from "react";
import Section from "./Section"
import Firearms, { FireArm, AmmoInformation, AmmoTypesInformation, Ammo } from "../equipment/Firearms";
import MeleeWeapons, { MeleeWeapon } from "../equipment/MeleeWeapons";
import Ellipsis from "../Ellipsis";
import Indexer, { Indexed } from "../Indexer";
import { bodySuits, armorPlates, BodySuit, ArmorPlate, PowerArmor, powerArmors, ArmorData } from "../equipment/Armors";
import { CharacterSize } from "../Character";

const Equipment: React.FC = () => {
    return (<Section title='Equipment'>
        <h2>Equipment</h2>
        <p>Euipment is everything your character can wear on their body or hold and use.</p>
        <Indexer title='equipment'>
            <Indexed title='Weapons'>
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
                <p>All firearms cause bleeding</p>
                <FirearmTable data={Firearms} />

                <h5>Firearm modifications</h5>
                <p>In addition to the various weapons there are modifications which can affect the firearms performance in various ways</p>
                <ul>
                    <li>
                        <b>Scope</b> reduces long range penalties to half when using snipe or aimed shot<br />
                        Weight +200g<br />
                        Cost +300c
                            </li>
                    <li>
                        <b>Silencer</b> Reduces the sound of a ballistic firearm (handguns, submachine guns, rifles, machineguns)<br />
                        Sound reduced by 75%<br />
                        Armor piercing reduced by 1 (minimum 0)<br />
                        Range reduced by 10%<br />
                        Cost bonus +400
                    </li>
                    <li>
                        <b>Heavy Silencer</b> Reduces the sound of a ballistic firearm (handguns, submachine guns, rifles, machineguns)<br />
                        Sound reduced by 95%<br />
                        Armor Piercing reduced by 2 (minimum 0)<br />
                        Ragne reduced by 25%<br />
                        Cost bonus +500
                    </li>
                    <li>
                        <b>Laser Target</b> Adds a laser target which helps aiming<br />
                        Aim Bonus +2<br />
                        Everyone can see where you're aiming<br />
                        Cost bonus +600
                    </li>
                    <li>
                        <b>Heavy Stock</b> Improves recoil control, can not be transferred to other firearms<br />
                        Aim Bonus +1<br />
                        Damage bonus +1<br />
                        Weight bonus +40%<br />
                        Cost bonus +20%
                    </li>
                    <li>
                        <b>Tripod</b> Reduces strength requirement, only avalable for rifles and machineguns<br />
                        Strength requirement -2<br />
                        Cost: 100c<br />
                        Weight: 300g
                    </li>
                    <li>
                        <b>Large Tripod</b> Reduces strength requirement, only avalable for rifles and machineguns<br />
                        Strength requirement -3<br />
                        Cost: 300c<br />
                        Weight: 1kg
                    </li>
                    <li>
                        <b>Arm mount</b> Allows use of two handed firearms with one hand<br/>
                        Strength requirement +3<br/>
                        Cost: 200c<br/>
                        Weight: 1kg
                    </li>
                    <li>
                        <b>Turbo charge</b> (energy weapons) +50% damage, can only fire once per round<br/>
                        Ammo use: +100%<br/>
                        Cost: +25%<br/>
                        Range: -50%<br/>
                        Weight: 0.5kg<br/>
                        Overheats: gain 1 heat point every shot, lose 1 heat after 2 rounds of non-use, can't fire if at 8 heat.
                    </li>
                </ul>

                <h4>Ammunition</h4>
                <p>All ammunition comes various forms and serve different purposes and come in different costs</p>
                {AmmoTable(AmmoTypesInformation)}
                <b>Modifications</b>
                <ul>
                    <li><b>Standard</b>, default version of the ammo, assumes the weapons stats unchanged</li>
                    <li><b>Tracer</b>, tracer rounds have built in pyrotechnics which makes the bullet projectile more visible, adds +1 to hit. Cost +100%</li>
                    <li><b>Hollow point</b>, hollow point bullets are designed to shatter upon impact, adds +3 damage, reduces armor piercing to zero and doubles damage reduction from armor</li>
                    <li><b>Armor Piercing</b> bullet made of hard alloy instead of lead, adds +4 armor piercing, -1 damage, cost +10%</li>
                    <li><b>Incendiary</b> bullet is designed to superheat, allows it to melt metal upon impact and cause massive damage +2 armor piercing and +1 damage. Cost +250%</li>
                    <li><b>Shell</b>, contains multiple pellets which spread and gives to hit bonus</li>
                    <li><b>Slug</b>, contains a single metal slug, doubles shotgun range, adds +1 armor piercing, removes base hit bonus from weapon.</li>
                    <li><b>Explosive</b>, contains an alloy which explodes on contact, adds +2 damage, +1 armor piercing, removes base hit bonus from weapon. Cost +100%</li>
                    <li><b>Plasma Bomb</b>, Uses the bomb to initiate a thermo-nuclear fusion reaction, releasing super heated plasma. Double damage and area of effect. Cost +400%</li>
                    <li><b>Frag</b>, releases metal fragments at extreme velocity. Double damage and damage reduction from armor/cover.</li>
                    <li><b>Homing</b>, homes in on target, requires snipe shot. Adds +4 to hit. cost +50%.</li>
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
                When blocking you always receive protection from armor as it is assumed that the character blocks using armor or shield.
                </p>
                <ul>
                    <li>Full protection: 100% cost/weight and 6/6 protection (no roll needed)</li>
                    <li>Vast majority protection: 90% cost/weight and 5/6 roll</li>
                    <li>Major protection: 80% cost/weight and 4/6 roll</li>
                    <li>Half protection: 70% cost/weight and 3/6 roll</li>
                    <li>Small protection: 50% cost/weight and 2/6 roll (not available for power armor)</li>
                    <li>Minor protection: 30% cost/weight and 1/6 roll (not available for power armor)</li>
                </ul>
                <ArmorCrafter />
                <h5>Body Suit</h5>
                <ArmorTable armors={bodySuits} />
                <h5>Armor Plates</h5>
                <ArmorTable armors={armorPlates} />
                <h5>Power Armor Frame</h5>
                <ArmorTable armors={powerArmors} />
            </Indexed>
            <Indexed title='Tools'>
                <table>
                    <thead><tr>
                        <th>name</th><th>value</th><th>weight</th><th>description</th>
                    </tr></thead>
                    <tbody>
                        <tr> <td>Pocket Computer</td><td>2000 c</td><td>1kg</td><td>Basically a futuristic smartphone.
                            Allows user to substitute computer roll for any knowledge roll.<br />
                            10TB storage, 12x 5.5GH cpu cores, 512GB ram, 4 cameras, gyrometer, accelerometer, geigercounter, radiobooster. 48h battery
                            </td> </tr>
                        <tr> <td>Jetpack</td><td>14000 c</td><td>6kg</td><td>Allows for short bursts which propel the user. Jump +50 meters up, +100 meters forward, prevents fall damage</td> </tr>
                        <tr> <td>Stealth Cover</td><td>19000 c</td><td>1.8kg</td><td>Meta-material which bends light around it as it passes through, giving the illsion of invisibility. Only works for visible light (not infra red or ultra violet). +20 to hide (negated by infra-red or ultra-violet vision)</td> </tr>
                        <tr> <td>Scope</td><td>600 c</td><td>300g</td><td>Scope with 2x/4x/8x/15x/20x zoom</td> </tr>
                        <tr> <td>Infrared googles</td><td>900 c</td><td>200g</td><td>Allows the user to see in infrared</td> </tr>
                        <tr> <td>Ultraviolet googles</td><td>1600 c</td><td>300g</td><td>Allows the user to see in ultra violet</td> </tr>
                        <tr> <td>X-ray camera</td><td>5000 c</td><td>1.2kg</td><td>Portable x-ray camera, requires source of x rays to see anythign</td> </tr>
                        <tr> <td>Digital hacking tool</td><td>3500 c</td><td>2kg</td><td>Assortment of devices used for hacking digital keys, must be usedin combination with computer</td> </tr>
                        <tr> <td>Climbing gear</td><td>1700 c</td><td>3kg</td><td>Assorted tools for climbing, allows for climbing on sheer surfaces, gives +10 to climbing rolls</td> </tr>
                        <tr> <td>Medikit</td><td>4100 c</td><td>2.5kg</td><td>Assorted tools for emergency field surgery and aid.</td> </tr>
                        <tr> <td>Ballistic kit</td><td>400 c</td><td>300g</td><td>Assorted tools for maintaining firearms</td>  </tr>
                        <tr> <td>SCUBA suit</td><td>12000 c</td><td>6g</td><td> </td>  </tr>
                        <tr> <td>Laser protection gear</td><td>500 c</td><td>100g</td><td>Protective gear against damage from laser, protects against blinding.</td>  </tr>
                        <tr> <td>Spy drone</td><td>1000 c</td><td>500g</td><td>Small drone, uses propellers to fly but causes little noice, has a small mounted camera and comes with remote controll (can also be controlled via computer), range 1km</td>  </tr>
                        <tr> <td>Carrier drone</td><td>5000 c</td><td>2.5kg</td><td>Medium sized drone, similar to spy drone but can carry 500 grams</td>  </tr>
                        <tr> <td>Personal solar array</td><td>2000 c</td><td>1kg</td><td>Small scale solar generator, can be used to power any average tool (tools and energy weapons), multiple may be used to recharge small vehicles</td></tr>
                    </tbody>
                </table>
            </Indexed>
            <Indexed title='Quality and Condition'>
                <p>Quality and condition are optional rules that can increase variety and make items feel more personal.</p>
                <h4>Condition</h4>
                <p>Condition refers to the wear and tear of an item that is used in skill checks, it is also affected by direct damage and repair.</p>
                <table>
                    <thead>
                        <tr><th>Condition</th><th>Effect</th><th>Value</th></tr>
                    </thead>
                    <tbody>
                        <tr> <td>Pristine</td><td>+2</td><td>100%</td></tr>
                        <tr><td>Intact</td><td>+1</td><td>90%</td></tr>
                        <tr><td>Normal</td><td>+/-0</td><td>80%</td></tr>
                        <tr><td>Used</td><td>-1</td><td>70%</td></tr>
                        <tr><td>Worn</td><td>-2</td><td>60%</td></tr>
                        <tr><td>Damaged</td><td>-3</td><td>50%</td></tr>
                        <tr><td>Broken</td><td>-4</td><td>40%</td></tr>
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
                        <tr><td>Superb</td><td>+3</td><td> 1000%</td></tr>
                        <tr><td>Great</td><td>+2</td><td> 300%</td></tr>
                        <tr><td>Good</td><td>+1</td><td> 150%</td></tr>
                        <tr><td>Normal</td><td>+/-0</td><td> 100%</td></tr>
                        <tr><td>Poor</td><td>-1</td><td>90%</td></tr>
                        <tr><td>Bad</td><td>-2</td><td> 70%</td></tr>
                        <tr><td>Awful</td><td>-3</td><td>50%</td></tr>
                        <tr><td>Trash</td><td>-4</td><td> 40%</td></tr>
                    </tbody>
                </table>
                <p>Improving the quality of an item is not possible without supplying new material, these materials need to be of equivalent or higher quality, a failed attempt will consume the materials. A badly failed will reduce condition.</p>
                <p>Items with quality below trash can not be used.</p>
                <p>Items with quality great, superb, awful and trash can generally not be bought on the mainstream market.</p>
            </Indexed>
        </Indexer>

    </Section>);
}
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
                <td>{armor.cost}</td>
                <td>{armor.weight}</td>
            </tr>
            <tr><td colSpan={5}><Ellipsis text={armor.description} cutOff={120}></Ellipsis></td></tr>
        </>;
    else
        return (<tr onClick={() => setDescriptionOpen(true)}>
            <td>{armor.name}</td>
            <td>{armor.damageAbsorbtion}</td>
            <td>{armor.agilityMod} {extra} </td>
            <td>{armor.cost}</td>
            <td>{armor.weight}</td>
        </tr>);
}

const getSizeMod = (size: CharacterSize) => {
    switch (size) {
        case 'tiny': return 0.8;
        case 'small': return 0.9;
        case 'medium': return 1;
        case 'large': return 1.1;
        case 'huge': return 1.2;
        default: return 1;
    }
}

const getProtectionMod = (n: number) => {
    switch (n) {
        case 6: return 1;
        case 5: return .9;
        case 4: return .8;
        case 3: return .7;
        case 2: return .5;
        case 1: return .3;
        default: return 1;
    }
}

const getQualityMod = (n: number) => {
    switch (n) {
        case 0: return 1;
        case -1: return .9;
        case -2: return .8;
        case -3: return .7;
        case -4: return .6;
        default: return 1;
    }
}

const ArmorCrafter: React.FC = () => {
    const [bodySuit, setBodySuit] = useState<BodySuit | undefined>(undefined);
    const [armorPlate, setArmorPlate] = useState<ArmorPlate | undefined>(undefined);
    const [powerArmor, setPowerArmor] = useState<PowerArmor | undefined>(undefined);
    const [qualityMod, setQualityMod] = useState(0);
    const [size, setSize] = useState<CharacterSize>('medium');
    const [protectionAmount, setProtectionAmount] = useState(6);

    let defense = 0;
    let cost = 0;
    let weight = 0;
    let agilityMod = 0;
    let strengthMod = 0;
    let perceptionMod = 0;
    if (bodySuit !== undefined) {
        defense += bodySuit.damageAbsorbtion;
        cost += bodySuit.cost;
        weight += bodySuit.weight;
        agilityMod += bodySuit.agilityMod;
    }
    if (armorPlate !== undefined) {
        defense += armorPlate.damageAbsorbtion;
        cost += armorPlate.cost;
        weight += armorPlate.weight;
        agilityMod += armorPlate.agilityMod;
    }
    if (powerArmor !== undefined) {
        defense += powerArmor.damageAbsorbtion;
        cost += powerArmor.cost;
        weight += powerArmor.weight;
        agilityMod += powerArmor.agilityMod;
        strengthMod += powerArmor.strengthMod;
        perceptionMod += powerArmor.perceptionMod;
    }

    defense += qualityMod;
    let protectionAmountActual = powerArmor === undefined ? protectionAmount : Math.max(protectionAmount, 3);
    cost = cost * getSizeMod(size) * getProtectionMod(protectionAmountActual) * getQualityMod(qualityMod);
    weight = weight * getSizeMod(size) * getProtectionMod(protectionAmountActual);

    return (<div>
        <p>Customize an armor</p>
        <select onChange={(e) => setBodySuit(bodySuits.find(f => f.name === e.target.value))}>
            <option selected={null === bodySuit}>Bodysuit armor/none</option>
            {bodySuits.map(bs => <option value={bs.name} selected={bodySuit !== undefined && bs.name === bodySuit.name}>
                {bs.name}
            </option>)}
        </select>
        <select onChange={(e) => setArmorPlate(armorPlates.find(f => f.name === e.target.value))}>
            <option selected={null === armorPlate}>Armor plate/none</option>
            {armorPlates.map(ap => <option value={ap.name} selected={armorPlate !== undefined && ap.name === armorPlate.name}>
                {ap.name}
            </option>)}
        </select>
        <select onChange={(e) => setPowerArmor(powerArmors.find(f => f.name === e.target.value))}>
            <option selected={null === powerArmor}>Power armor/none</option>
            {powerArmors.map(pa => <option value={pa.name} selected={powerArmor !== undefined && pa.name === powerArmor.name}>
                {pa.name}
            </option>)}
        </select>
        <br />
        <select onChange={(e) => setQualityMod(parseInt(e.target.value))}>
            <option value='0' selected={qualityMod === 0}>Pristine/intact/Normal</option>
            <option value='-1' selected={qualityMod === -1}>Used</option>
            <option value='-2' selected={qualityMod === -2}>Worn</option>
            <option value='-3' selected={qualityMod === -3}>Damaged</option>
            <option value='-4' selected={qualityMod === -4}>Broken</option>
        </select>

        <select onChange={(e) => setSize(e.target.value as CharacterSize)}>
            <option selected={size === 'tiny'} value='tiny'>Tiny</option>
            <option selected={size === 'small'} value='small'>Small</option>
            <option selected={size === 'medium'} value='medium'>Medium</option>
            <option selected={size === 'large'} value='large'>Large</option>
            <option selected={size === 'huge'} value='huge'>Huge</option>
        </select>

        <select onChange={(e) => setProtectionAmount(parseInt(e.target.value))}>
            <option selected={protectionAmount === 6} value='6'>Full</option>
            <option selected={protectionAmount === 5} value='5'>Vast</option>
            <option selected={protectionAmount === 4} value='4'>Major</option>
            <option selected={protectionAmount === 3} value='3'>Half</option>
            <option selected={protectionAmount === 2} value='2'>Small</option>
            <option selected={protectionAmount === 1} value='1'>Minor</option>
        </select>
        <div className='divcol2'>
            <div>
                <b>Damage Absorbtion:</b> {defense}<br />
                <b>Cost:</b> {cost} credits <br />
                <b>Weight:</b> {weightConverter(weight * 1000)}
            </div>
            <div>
                <b>Agility mod</b>: {agilityMod}<br />
                <b>Strength mod</b>: {strengthMod}<br />
                <b>Perception mod</b>: {perceptionMod}
            </div>
        </div>
    </div>);
}

const weightConverter = (grams: number) => {
    if (grams < 1000) return `${grams.toFixed(0)}g`;
    if (grams < 1000 * 1000) return `${(grams / 1000).toFixed(1)}kg`;
    return `${(grams / 100000).toFixed(4)} tons`;
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
        <td>{f.damage}</td>
        <td>{f.armorpiercing || 0}</td>
        <td>{f.hitbonus || 0}</td>
        <td>{f.range}</td>
        <td>{f.fireAction.join(', ')}</td>
        <td>{f.capacity} ({f.ammo}) {f.rps !== undefined ? '/ rpr: ' + f.rps * 6 : null}</td>

        <td>{weightConverter(f.weight)}</td>
        <td>{f.value} c + ({(getAmmoInfo(f.ammo).cost * f.capacity).toFixed(0)})</td>
    </tr>
        {descriptionOpen && <tr><td>STR: {f.strengthRequirement}</td><td colSpan={8}><i> <Ellipsis text={f.description} cutOff={100} /></i></td></tr>}
    </>);
}
const bottomStyle: CSSProperties = {
    borderBottom: '1px dotted black'
}
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
                        {a.types.join(',')}
                    </td>
                </tr>
                    <tr>
                        <td style={bottomStyle} colSpan={4}>{a.description}</td>
                    </tr>
                </>)}
        </tbody>
    </table>;

export default Equipment;