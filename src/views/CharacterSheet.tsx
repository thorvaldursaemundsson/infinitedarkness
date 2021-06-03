import React, { useReducer, useState } from 'react';
import { Character, CharacterSizes } from '../components/Character';
import { GetTraits } from '../components/traits/Traits';
import { GetPerkList } from '../components/general/GetPerkList';
import { useCharacter } from '../components/general/useCharacter';

import './charactersheet.css';
import EditText, { HideText, SelectText } from '../components/general/HideText';
import { Skill } from '../components/general/Skills';

interface CharacterSheetProps {
    initialCharacter: Character;
    characterCallback: (c: Character) => void;
}
const padSize = 33;
export const CharacterSheet: React.FC<CharacterSheetProps> = (props) => {
    const [character, dispatch] = useReducer(useCharacter, props.initialCharacter);
    const [viewState, setViewState] = useState<"edit" | "print" | "explain" | "hide">("edit");
    const [viewTraitList, setViewTraitList] = useState(false);
    const [viewPerkList, setViewPerkList] = useState(false);

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
                        <HideText txt={character.getLife()} isEdit={viewState} explain={character.explain('life')} />
                    </td>
                    <td>
                        <label>Strength</label>
                    </td>
                    <td>
                        <EditText txt={character.strength} isEdit={viewState} onChange={(str) => dispatch({ action: 'strength', value: parseInt(str) })} explain={character.explain('strength')} />
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
                        <HideText txt={character.getMentalHealth()} isEdit={viewState} explain={character.explain('mentalHealth')} /> </td>
                    <td>
                        <label>Endurance</label>
                    </td>
                    <td>
                        <EditText txt={character.endurance} isEdit={viewState} onChange={(str) => dispatch({ action: 'endurance', value: parseInt(str) })} explain={character.explain('endurance')} />
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
                        <HideText txt={character.getSequence()} isEdit={viewState} explain={character.explain('sequence')} />
                    </td>
                    <td>
                        <label>Agility</label>
                    </td>
                    <td>
                        <EditText txt={character.agility} isEdit={viewState} onChange={(str) => dispatch({ action: 'agility', value: parseInt(str) })} explain={character.explain('agility')} />
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>Age</label>
                    </td>
                    <td>
                        <EditText txt={character.age} isEdit={viewState} onChange={(str) => dispatch({ action: 'age', value: parseInt(str) })} explain={character.explain('age')} />
                    </td>
                    <td>
                        <label>Damage absorption</label>
                    </td>
                    <td>
                        <HideText txt={character.getDamageAbsorption()} explain={'damage absorbtion'} isEdit={viewState} />
                    </td>
                    <td>
                        <label>Perception</label>
                    </td>
                    <td>
                        <EditText txt={character.perception} isEdit={viewState} onChange={(str) => dispatch({ action: 'perception', value: parseInt(str) })} explain={character.explain('perception')} />
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>Character points</label>
                    </td>
                    <td>
                        <HideText txt={character.getCalculatedPointsLeft()} explain={character.explain('pointsLeft')} isEdit={viewState} />
                    </td>
                    <td>
                        <label>Defense</label>
                    </td>
                    <td>
                        <SmallLabel>
                            <HideText txt={character.getBaseDefense()} explain={character.explain('basedefense')} isEdit={viewState} />
                        </SmallLabel>
                        /
                        <SmallLabel>
                            <HideText txt={character.getPassiveDefense()} explain={character.explain('passivedefense')} isEdit={viewState} />
                        </SmallLabel>
                        /
                        <SmallLabel>
                            <HideText txt={character.getActiveDefense()} explain={character.explain('activedefense')} isEdit={viewState} />
                        </SmallLabel>
                    </td>
                    <td>
                        <label>Intelligence</label>
                    </td>
                    <td>
                        <EditText txt={character.intelligence} isEdit={viewState} onChange={(str) => dispatch({ action: 'intelligence', value: parseInt(str) })} explain={character.explain('intelligence')} />
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>Experience multiplier</label>
                    </td>
                    <td>
                        <HideText txt={character.getExperienceMultiplier()} isEdit={viewState} explain={character.explain('experienceMultiplier')} />
                    </td>
                    <td>
                        <label>Carrying capacity</label>
                    </td>
                    <td>
                        <HideText isEdit={viewState} txt={character.getBaseCarryingCapacity().toString()} explain={character.explain('carryingCapacity')} />
                    </td>
                    <td>
                        <label>Willpower</label>
                    </td>
                    <td>
                        <EditText txt={character.willpower} isEdit={viewState} onChange={(str) => dispatch({ action: 'willpower', value: parseInt(str) })} explain={character.explain('willpower')} />
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
                    <td colSpan={2}>
                        Apperance traits
                    </td>
                    <td colSpan={2}>
                        Personality traits
                    </td>
                </tr>
                {Pad(5, 0).map(i =>
                    <tr>
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
                                    return <tr>
                                        <td>
                                            <label>{skill.name}</label>
                                        </td>
                                        <td></td>
                                        <td>
                                            <EditText txt={skill.level} isEdit={viewState} onChange={(str) => dispatch({ action: 'skill', name: skill.name, value: parseInt(str) })} explain={character.explain('skill:' + skill.name)} />
                                        </td>
                                    </tr>
                                })}
                                {Pad(padSize, character.skills.length).map(i => {
                                    return <tr>
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
                                {viewPerkList ? GetPerkList().map(perk => {
                                    const skillRanks: Skill | undefined = character.skills.find(s => s.name === perk.skill);
                                    if (skillRanks === undefined || skillRanks.level < perk.level * 3 + 3)
                                        return null;
                                    if (character.perks.find(p => p.name === perk.name)) return null;

                                    return <tr className='no-print'>
                                        <td>
                                            <button onClick={() => dispatch({ action: 'addperk', name: perk.name, value: 0, perkToAdd: perk })}>{perk.name}</button> ({perk.level}) {perk.description}
                                        </td>
                                    </tr>
                                }) : null}
                                {character.perks.map(perk => {
                                    return <tr>
                                        <td>
                                            {perk.name}
                                            <button onClick={() => dispatch({ action: 'removeperk', name: perk.name, value: 0, perkToAdd: perk })}>x</button>
                                        </td>
                                    </tr>
                                })}
                                {Pad(viewPerkList ? 0 : padSize + 1, character.perks.length).map(i => {
                                    return <tr>
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
                                {viewTraitList ? GetTraits().map(trait => {
                                    return <tr className='no-print'>
                                        <td>
                                            <button onClick={() => dispatch({ action: 'addtrait', name: trait.name, value: 0, traitToAdd: trait })}>{trait.name}</button> {trait.description}
                                        </td>
                                    </tr>
                                }) : null}
                                {character.traits.map(trait => {
                                    return <tr>
                                        <td>
                                            {trait.name}
                                            <button onClick={() => dispatch({ action: 'removetrait', name: trait.name, value: 0, traitToAdd: trait })}>x</button>
                                        </td>
                                    </tr>
                                })}
                                {Pad(viewTraitList ? 0 : padSize - 26, character.traits.length).map(i => {
                                    return <tr>
                                        <td> </td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                        <h5 style={{ marginTop: '20px' }}>Reputation</h5>
                        <table>
                            <tbody>
                                {Pad(padSize - 8, 0).map(i => <tr>
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
                                    <th colSpan={80}>Life</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    {Pad(80, 0).map(i => <td> &nbsp;</td>)}
                                </tr>
                                <tr>
                                    {Pad(80, 0).map(i => <td> &nbsp;</td>)}
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
                                        {Pad(30, 0).map(i => <span className='mentalHealthBoxes'>&nbsp;</span>)}
                                    </td>
                                    <td>
                                        {Pad(80, 0).map(i => <span className='manaBoxes'>&nbsp;</span>)}
                                    </td>
                                    <td>
                                        {Pad(8, 0).map(i => <span className='exhaustionBoxes'>&nbsp;</span>)}
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
                                        Weapon
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
                                {Pad(7, 0).map(i =>
                                    <tr>
                                        <td className='bigtd'>

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
                                        Item
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
                                {Pad(19, 0).map(i =>
                                    <tr>
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
                    <tr>
                        <td colSpan={6}> </td>
                    </tr>)}

            </tbody>
        </table></div>);
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