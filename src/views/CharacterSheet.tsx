import React, { useReducer, useState } from 'react';
import { Character, CharacterSizes } from '../components/Character';
import { GetTraits } from '../components/traits/Traits';
import { GetPerkListBySkills } from '../components/general/GetPerkList';
import { useCharacter } from '../components/general/useCharacter';

import './charactersheet.css';
import EditText, { EditNumber, HideNumber, HideText, SelectText } from '../components/general/HideText';
import { Skill } from '../components/general/Skills';
import Section from '../components/Section';
import Item, { IDamageDice } from '../components/equipment/Item';
import { ConsumableMedicine, ConsumableTools, ConsumableWeapons, IConsumable } from '../components/equipment/Consumables';
import { weightConverter } from '../utils/utilFunctions';
import { FireArm } from '../components/equipment/Firearms';
import MeleeWeapons, { IMeleeWeapon } from '../components/equipment/MeleeWeapons';
import FloatingSection from '../components/FloatingSection';
import FirearmCrafter from '../components/equipment/FirearmCrafter';
import ArmorCrafter, { FullArmor } from '../components/equipment/ArmorCrafter';

interface CharacterSheetProps {
    initialCharacter: Character;
    characterCallback: (c: Character) => void;
}
const padSize = 32;
export const CharacterSheet: React.FC<CharacterSheetProps> = (props) => {
    const [character, dispatch] = useReducer(useCharacter, props.initialCharacter);
    const [viewState, setViewState] = useState<"edit" | "print" | "explain" | "hide">("edit");
    const [viewTraitList, setViewTraitList] = useState(false);
    const [viewPerkList, setViewPerkList] = useState(false);
    const [inventory, setInventory] = useState<Item[]>([]);
    const [isAddingInventory, setIsAddingInventory] = useState(false);

    const carryWeight = inventory.length > 0 ? inventory.map(i => i.weight).reduce((a, b) => a + b) : 0;

    const damageAbsFromInventory = (): number => {
        const armors: FullArmor[] = inventory.filter(item => item.relatedSkill === 'combat' && (item as any).type === 'armor') as FullArmor[];
        if (armors.length > 0) {
            return armors[0].getDamageAbsorbtion();
        }
        return 0;
    };

    return (<div className="characterSheet">
        {viewState !== "edit" ?
            <button className='no-print' onClick={() => setViewState("edit")}>edit</button>
            :
            <button className='no-print' onClick={() => setViewState("explain")}>explain</button>}
        {/* page 1 */}
        <table>
            <thead>
                <tr>
                    <th colSpan={6}><h4>Infinite Darkness</h4></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <label>Name</label>
                    </td>
                    <td>
                        <EditText txt={character.name} isEdit={viewState} onChange={(str) => dispatch({ name: str, action: 'name', value: 0 })} explain={character.explain('name')} />
                    </td>
                    <td>
                        <label>Life</label>
                    </td>
                    <td>
                        <HideNumber txt={character.getLife()} isEdit={viewState} explain={character.explain('life')} />
                    </td>
                    <td>
                        <label>Strength</label>
                    </td>
                    <td>
                        <EditNumber txt={character.strength} isEdit={viewState} onChange={(str) => dispatch({ action: 'strength', value: (str) })} explain={character.explain('strength')} />
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>Gender</label>
                    </td>
                    <td>
                        <EditText txt={character.gender} isEdit={viewState} onChange={(str) => dispatch({ name: str, action: 'gender', value: 0 })} explain={character.explain('gender')} />
                    </td>
                    <td>
                        <label>Mental Health</label>
                    </td>
                    <td>
                        <HideNumber txt={character.getMentalHealth()} isEdit={viewState} explain={character.explain('mentalHealth')} /> </td>
                    <td>
                        <label>Endurance</label>
                    </td>
                    <td>
                        <EditNumber txt={character.endurance} isEdit={viewState} onChange={(str) => dispatch({ action: 'endurance', value: (str) })} explain={character.explain('endurance')} />
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>Species</label>
                    </td>
                    <td>
                        <SelectText options={['human', 'shambras', 'merlion', 'nekovian', 'synth']} txt={character.species} isEdit={viewState} onChange={(str) => dispatch({ name: str, action: 'species', value: 0 })} explain={character.explain('species')} />
                    </td>
                    <td>
                        <label>Sequence</label>
                    </td>
                    <td>
                        <HideNumber txt={character.getSequence()} isEdit={viewState} explain={character.explain('sequence')} />
                    </td>
                    <td>
                        <label>Agility</label>
                    </td>
                    <td>
                        <EditNumber txt={character.agility} isEdit={viewState} onChange={(str) => dispatch({ action: 'agility', value: (str) })} explain={character.explain('agility')} />
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>Age</label>
                    </td>
                    <td>
                        <EditNumber txt={character.age} isEdit={viewState} onChange={(str) => dispatch({ action: 'age', value: (str) })} explain={character.explain('age')} />
                    </td>
                    <td>
                        <label>Damage absorption</label>
                    </td>
                    <td>
                        <HideNumber txt={character.getDamageAbsorption() + damageAbsFromInventory()} explain={'damage absorbtion'} isEdit={viewState} />
                    </td>
                    <td>
                        <label>Perception</label>
                    </td>
                    <td>
                        <EditNumber txt={character.perception} isEdit={viewState} onChange={(str) => dispatch({ action: 'perception', value: (str) })} explain={character.explain('perception')} />
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>Experience points</label>
                    </td>
                    <td>
                        <HideNumber txt={character.getCalculatedPointsLeft()} explain={character.explain('pointsLeft')} isEdit={viewState} />
                    </td>
                    <td>
                        <label>Defense</label>
                    </td>
                    <td>
                        <SmallLabel><HideNumber txt={character.getBaseDefense()} explain={character.explain('basedefense')} isEdit={viewState} /></SmallLabel>
                        / <SmallLabel><HideNumber txt={character.getActiveDefense()} explain={character.explain('activedefense')} isEdit={viewState} /></SmallLabel>
                    </td>
                    <td>
                        <label>Intelligence</label>
                    </td>
                    <td>
                        <EditNumber txt={character.intelligence} isEdit={viewState} onChange={(str) => dispatch({ action: 'intelligence', value: (str) })} explain={character.explain('intelligence')} />
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>Experience multiplier</label>
                    </td>
                    <td>
                        <HideNumber txt={character.getExperienceMultiplier()} isEdit={viewState} explain={character.explain('experienceMultiplier')} />
                    </td>
                    <td>
                        <label>Carrying capacity (kg)</label>
                    </td>
                    <td>
                        <HideText isEdit={viewState} txt={`${weightConverter(carryWeight)} / ${character.getBaseCarryingCapacity(1).toString()} / ${character.getBaseCarryingCapacity(2).toString()} / ${character.getBaseCarryingCapacity(3).toString()}`} explain={character.explain('carryingCapacity')} />
                    </td>
                    <td>
                        <label>Willpower</label>
                    </td>
                    <td>
                        <EditNumber txt={character.willpower} isEdit={viewState} onChange={(str) => dispatch({ action: 'willpower', value: (str) })} explain={character.explain('willpower')} />
                    </td>
                </tr>
                <tr>
                    <td><label>Player</label></td><td>&nbsp;</td>
                    <td><label>Speed</label></td><td>
                        <HideText isEdit={viewState} txt={character.getBaseSpeed().toString()} explain={character.explain('speed')} />
                    </td>
                    <td><label>Size</label></td><td>
                        <SelectText options={[...CharacterSizes]} txt={character.size} isEdit={viewState} onChange={(size) => dispatch({ action: 'size', value: 0, name: size })} explain={character.explain('size')} />
                    </td>
                </tr>
                <tr>
                    <td colSpan={2}>
                        Background
                    </td>
                    <td>
                        <label>Mana</label>
                    </td>
                    <td>
                        <HideNumber isEdit={viewState} txt={character.getMana()} explain={character.explain('mana')} />
                    </td>
                    <td colSpan={2}>
                        Personality traits
                    </td>
                </tr>
                <tr>
                    <td colSpan={2}> &nbsp; </td>
                    <td colSpan={1}>
                        <label>Action points</label>
                    </td>
                    <td colSpan={1}>
                        <HideNumber isEdit={viewState} txt={character.getActionPoints()} explain={character.explain('actionPoints')} />
                    </td>
                    <td colSpan={2}> &nbsp;</td>
                </tr>
                <tr>
                    <td colSpan={2}> &nbsp;</td>
                    <td colSpan={2}>
                        Apperance traits
                    </td>
                    <td colSpan={2}> &nbsp;</td>
                </tr>
                {Pad(4, 0).map(i =>
                    <tr key={`cs_traits_${i}`}>
                        <td colSpan={2}> &nbsp;</td>
                        <td colSpan={2}> &nbsp;</td>
                        <td colSpan={2}> &nbsp;</td>
                    </tr>
                )}
                <tr>
                    <td style={{ border: 'none' }} colSpan={2}>
                        <h5>Skills</h5>
                        <table className="skillTable">
                            <thead>
                                <tr>
                                    <th>Skill</th>
                                    <th>Exp</th>
                                    <th>Rank</th>
                                </tr>
                            </thead>
                            <tbody>
                                {character.skills.map(skill => {
                                    return <tr key={`cs_skills_${skill.name}`}>
                                        <td>
                                            <label>{skill.name}</label>
                                        </td>
                                        <td></td>
                                        <td>
                                            <EditNumber txt={skill.level} isEdit={viewState} onChange={(str) => dispatch({ action: 'skill', name: skill.name, value: str })} explain={character.explain('skill:' + skill.name)} />
                                        </td>
                                    </tr>
                                })}
                                {Pad(padSize, character.skills.length).map(i => {
                                    return <tr key={`cs_skillsleft_${i}`}>
                                        <td > <label> &nbsp;</label></td>
                                        <td> </td>
                                        <td> </td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </td>
                    <td style={{ border: 'none' }} colSpan={2}>
                        <h5>Perks {(viewState === "edit") ? <button className='no-print' onClick={() => setViewPerkList(!viewPerkList)}>Add Perk</button> : null}</h5>
                        <table>
                            <tbody>
                                {viewPerkList ? GetPerkListBySkills().map(perkBySkill => {
                                    const skillRanks: Skill | undefined = character.skills.find(s => s.name === perkBySkill.skill);
                                    if (skillRanks !== undefined && skillRanks.level >= 6) {

                                        return <tr className='no-print' key={`cs_perksview_${perkBySkill.skill}`}>
                                            <td>
                                                <Section title={perkBySkill.skill}>
                                                    {perkBySkill.perks.map(perk => {
                                                        if (skillRanks.level < perk.level * 3 + 3)
                                                            return null;
                                                        if (character.perks.find(p => p.name === perk.name)) return null;
                                                        return <>
                                                            <br />
                                                            <br />
                                                            <button onClick={() => dispatch({ action: 'addperk', name: perk.name, value: 0, perkToAdd: perk })}>{perk.name}</button>
                                                            ({perk.level * 10}) {perk.description}
                                                            {perk.results && <ul>{perk.results.map(r => <li key={`cs_perkitem${perk.name}_${r}`}>{r}</li>)}</ul>}

                                                        </>;
                                                    })}
                                                </Section>
                                            </td>
                                        </tr>
                                    }
                                    else return null;

                                }) : null}
                                {character.perks.map(perk => {
                                    return <tr key={`cs_perks_${perk.name}`}>
                                        <td>
                                            {perk.name}
                                            <button onClick={() => dispatch({ action: 'removeperk', name: perk.name, value: 0, perkToAdd: perk })}>x</button>
                                        </td>
                                    </tr>
                                })}
                                {Pad(viewPerkList ? 0 : padSize + 1, character.perks.length).map(i => {
                                    return <tr key={`cs_otherperks_${i}`}>
                                        <td> </td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </td>
                    <td style={{ border: 'none' }} colSpan={2}>
                        <h5>Traits {(viewState === "edit") ? <button className='no-print' onClick={() => setViewTraitList(!viewTraitList)}>Add Trait</button> : null}</h5>
                        <table>
                            <tbody>
                                {viewTraitList ? GetTraits().filter(trait => trait.race === 'any' || trait.race === character.species).map(trait => {
                                    return <tr className='no-print' key={`cs_traitsview_${trait.name}`}>
                                        <td>
                                            <button onClick={() => dispatch({ action: 'addtrait', name: trait.name, value: 0, traitToAdd: trait })}>{trait.name}</button> {trait.description}
                                        </td>
                                    </tr>
                                }) : null}
                                {character.traits.map(trait => {
                                    return <tr key={`cs_traitsadd_${trait.name}`}>
                                        <td>
                                            {trait.name}
                                            <button onClick={() => dispatch({ action: 'removetrait', name: trait.name, value: 0, traitToAdd: trait })}>x</button>
                                        </td>
                                    </tr>
                                })}
                                {Pad(viewTraitList ? 0 : padSize - 26, character.traits.length).map(i => {
                                    return <tr key={`cs_traitsadd2_${i}`}>
                                        <td> </td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                        <h5 style={{ marginTop: '20px' }}>Reputation</h5>
                        <table>
                            <tbody>
                                {Pad(padSize - 8, 0).map(i => <tr key={`cs_rep_${i}`}>
                                    <td> </td>
                                </tr>)}
                            </tbody>
                        </table>
                    </td>
                </tr>
                {/* page 2 */}
                <tr>
                    <td style={{ border: 'none' }} colSpan={6}>
                        <table className='lifeboxes'>
                            <thead>
                                <tr>
                                    <th colSpan={60}>Life</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    {Pad(60, 0).map(i => <td key={`cs_life_top_${i}`}> &nbsp;</td>)}
                                </tr>
                                <tr>
                                    {Pad(60, 0).map(i => <td key={`cs_life_bottom_${i}`}> &nbsp;</td>)}
                                </tr>
                            </tbody>
                        </table>
                        <table className='statboxes'>
                            <thead>
                                <tr>
                                    <th>Mental health</th>
                                    <th>Mana</th>
                                    <th><span className='carry'>Carry</span> <span className='middash'>-</span> <span className='exhaustion'>Exhaustion</span></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        {Pad(30, 0).map(i => <span key={`cs_mental_${i}`} className='mentalHealthBoxes'>&nbsp;</span>)}
                                    </td>
                                    <td>
                                        {Pad(80, 0).map(i => <span key={`cs_mana_${i}`} className='manaBoxes'>&nbsp;</span>)}
                                    </td>
                                    <td>
                                        {Pad(8, 0).map(i => <span  key={`cs_exh_${i}`} className='exhaustionBoxes'>&nbsp;</span>)}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td style={{ border: 'none' }} colSpan={3}>
                        <h4>Equipment</h4>
                    </td>
                    <td colSpan={3} style={{ verticalAlign: 'bottom' }} >
                        <b>Credits:</b>
                    </td>
                </tr>

                <tr>
                    <td style={{ border: 'none' }} colSpan={6}>

                        <table>
                            <thead>
                                <tr>
                                    <th className='bigtd'>
                                        <span onClick={() => setIsAddingInventory(!isAddingInventory)}>Weapon </span>
                                    </th>
                                    <th className='smalltd'>
                                        Action
                                    </th>
                                    <th className='smalltd'>
                                        HB
                                    </th>
                                    <th className='smalltd'>
                                        AP
                                    </th>
                                    <th className='smalltd3'>
                                        Damage
                                    </th>
                                    <th className='smalltd2'>
                                        Ammo
                                    </th>
                                    <th className='smalltd2'>
                                        Weight
                                    </th>
                                    <th className='smalltd2'>
                                        Value
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td colSpan={7}>
                                        {isAddingInventory && <>
                                            <FloatingSection title='Firearms'>
                                                <FirearmCrafter onGetFirearm={(f) => setInventory([...inventory, f])} >

                                                </FirearmCrafter>
                                            </FloatingSection>

                                            <Section title='Arms'>
                                                <ViewFireArms items={MeleeWeapons} onClick={w => setInventory([...inventory, w])} />
                                            </Section>
                                        </>}
                                    </td>
                                </tr>
                                {inventory.filter(i => i.relatedSkill === 'firearms').map(item => {
                                    const skill = character.getSkillLevel(item.relatedSkill);

                                    let firearm: FireArm | undefined = item.relatedSkill === 'firearms' ? item as FireArm : undefined;
                                    if (firearm === undefined) return <></>;

                                    let damageDice: IDamageDice = firearm.getDamageDice();

                                    return <tr key={`cs_i_f_${item.name}`}>
                                        <td className='bigtd'>
                                            {item.name} <button onClick={() => setInventory(removeItem(inventory, item))}>x</button>
                                        </td>
                                        <td className='smalltd'>
                                            {firearm.fireCost}
                                        </td>
                                        <td className='smalltd'>
                                            {skill + character.agility +
                                                ((firearm.getHitBonus()))}
                                        </td>
                                        <td className='smalltd'>
                                            {firearm && firearm.getArmorPercing()}
                                        </td>
                                        <td className='smalltd3'>
                                            {`${damageDice.numberOfDice}d${damageDice.sides} + ${damageDice.bonus}`}
                                        </td>
                                        <td className='smalltd2'>
                                            {`${firearm.capacity} (${firearm.ammo})`}
                                        </td>
                                        <td className='smalltd2'>
                                            {weightConverter(item.weight)}
                                        </td>
                                        <td className='smalltd2'>
                                            {item.value}
                                        </td>
                                    </tr>;
                                })}
                                {inventory.filter(i => i.relatedSkill === 'combat').map(item => {
                                    const skill = character.getSkillLevel(item.relatedSkill);

                                    let arm: IMeleeWeapon | undefined = item.relatedSkill === 'combat' ? item as IMeleeWeapon : undefined;
                                    if (arm === undefined) return <></>;

                                    let damageDice = arm.damage;

                                    return <tr key={`cs_i_m_${item.name}`}>
                                        <td className='bigtd'>
                                            {item.name} <button onClick={() => setInventory(removeItem(inventory, item))}>x</button>
                                        </td>
                                        <td className='smalltd'>
                                            {arm.actionPoints}
                                        </td>
                                        <td className='smalltd'>
                                            {skill + character.agility +
                                                (arm.hitbonus || 0)}
                                        </td>
                                        <td className='smalltd'>
                                            {arm.armorpiercing}
                                        </td>
                                        <td className='smalltd3'>
                                            {damageDice && `${damageDice.numberOfDice}d${damageDice.sides} + ${damageDice.bonus}`}
                                            {arm.damage}
                                        </td>
                                        <td className='smalltd2'>
                                        </td>
                                        <td className='smalltd2'>
                                            {weightConverter(item.weight)}
                                        </td>
                                        <td className='smalltd2'>
                                            {item.value}
                                        </td>
                                    </tr>;
                                })}
                                {inventory.filter(i => i.relatedSkill !== 'combat' && i.relatedSkill !== 'firearms').map(item => {
                                    

                                    return <tr key={`cs_i_f_${item.name}`}>
                                        <td className='bigtd'>
                                            {item.name} <button onClick={() => setInventory(removeItem(inventory, item))}>x</button>
                                            {item.relatedSkill}
                                        </td>
                                        <td className='smalltd'>

                                        </td>
                                        <td className='smalltd'>

                                        </td>
                                        <td className='smalltd'>

                                        </td>
                                        <td className='smalltd3'>

                                        </td>
                                        <td className='smalltd2'>
                                        </td>
                                        <td className='smalltd2'>
                                            {weightConverter(item.weight)}
                                        </td>
                                        <td className='smalltd2'>
                                            {item.value}
                                        </td>
                                    </tr>;
                                })}

                                {Pad(7 - inventory.length, 0).map(i =>
                                    <tr key={`cs_i_pad_${i}`}>
                                        <td className='bigtd'>

                                        </td>
                                        <td className='smalltd'>

                                        </td>
                                        <td className='smalltd'>

                                        </td>
                                        <td className='smalltd'>

                                        </td>
                                        <td className='smalltd3'>

                                        </td>
                                        <td className='smalltd2'>

                                        </td>
                                        <td className='smalltd2'>

                                        </td>
                                        <td className='smalltd2'>

                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>

                        <table>
                            <thead>
                                <tr>
                                    <th className='bigtd'>
                                        <span onClick={() => setIsAddingInventory(!isAddingInventory)}>Item </span>
                                    </th>
                                    <th className='smalltd3'>
                                        Skill
                                    </th>
                                    <th className='smalltd2'>
                                        Bonus
                                    </th>
                                    <th className='smalltd2'>
                                        Weight
                                    </th>
                                    <th className='smalltd2'>
                                        Value
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {isAddingInventory && <>
                                    <Section title='weapons'>
                                        <ViewConsumables consumables={ConsumableWeapons} onClick={w => setInventory([...inventory, w])} />
                                    </Section>

                                    <Section title='tools'>
                                        <ViewConsumables consumables={ConsumableTools} onClick={w => setInventory([...inventory, w])} />
                                    </Section>

                                    <Section title='medicine'>
                                        <ViewConsumables consumables={ConsumableMedicine} onClick={w => setInventory([...inventory, w])} />
                                    </Section>
                                    <FloatingSection title='armor'>
                                        <ArmorCrafter onClick={w => setInventory([...inventory, w])} />
                                    </FloatingSection>
                                </>}
                                {inventory.filter(i => i.relatedSkill !== 'firearms' && i.relatedSkill !== 'combat').map(item => <tr key={`cs_i_f_c_${item.name}`}>
                                    <td className='bigtd'>
                                        {item.name} <button onClick={() => setInventory(removeItem(inventory, item))}>x</button>
                                    </td>
                                    <td className='smalltd3'>

                                    </td>
                                    <td className='smalltd2'>
                                    </td>
                                    <td className='smalltd2'>
                                        {weightConverter(item.weight)}
                                    </td>
                                    <td className='smalltd2'>
                                        {item.value}
                                    </td>
                                </tr>)}
                                {Pad((!isAddingInventory ? 17 - inventory.length : 0), 0).map(i =>
                                    <tr key={`cs_i_adding_${i}`}>
                                        <td className='bigtd'>
                                        </td>
                                        <td className='smalltd3'>

                                        </td>
                                        <td className='smalltd2'>

                                        </td>
                                        <td className='smalltd2'>

                                        </td>
                                        <td className='smalltd2'>

                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>

                    </td>
                </tr>

                <tr>
                    <td colSpan={3}>
                        <h4>Stash</h4>
                    </td>
                    <td colSpan={3} style={{ verticalAlign: 'bottom' }} >
                        <b>Credits:</b>
                    </td>
                </tr>

                {Pad(12, 0).map(i =>
                    <tr key={`cs_i_pad_leftover_${i}`}>
                        <td colSpan={6}> </td>
                    </tr>)}

            </tbody>
        </table></div>);
}

const removeItem = (currentList: Item[], remove: Item): Item[] => {
    return currentList.filter(i => i.name !== remove.name);
};

interface IViewArms {
    onClick: (item: Item) => void;
    items: Item[];
}

const ViewFireArms: React.FC<IViewArms> = ({ onClick, items }) => {
    return <>{items.map(item => <tr key={`cs_vfa_${item.name}`}>
        <td className='bigtd'>
            <button onClick={() => onClick(item)} >{item.name}</button>
        </td>
        <td className='smalltd3'>

        </td>
        <td className='smalltd2'>

        </td>
        <td className='smalltd2'>
            {item.weight}
        </td>
        <td className='smalltd2'>
            {item.value}
        </td>
    </tr>)}</>;
};

interface IViewConsumables {
    onClick: (item: IConsumable) => void;
    consumables: IConsumable[];
}

const ViewConsumables: React.FC<IViewConsumables> = ({ onClick, consumables }) => {
    return <>{consumables.map(item => <tr key={`cs_vc_item_${item.name}`}>
        <td className='bigtd'>
            <button onClick={() => onClick(item)} >{item.name}</button>
        </td>
        <td className='smalltd3'>

        </td>
        <td className='smalltd2'>

        </td>
        <td className='smalltd2'>
            {item.weight}
        </td>
        <td className='smalltd2'>
            {item.value}
        </td>
    </tr>)}</>;
}

const Pad = (minSize: number, size: number) => {
    const i = Math.max(minSize - size, 0);
    let ar = new Array<number>();
    for (let counter = 0; counter < i; counter++) {
        ar.push(counter);
    }
    return ar;
}

const SmallLabel: React.FC = ({ children }) => {
    return <span className='smallLabel'>{children}</span>
}