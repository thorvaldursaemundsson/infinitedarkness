import React, { useReducer, useState } from 'react';
import { Character } from '../components/Character';
import { GetTraits } from '../components/traits/Traits';
import { GetPerkList } from '../components/GetPerkList';
import { useCharacter } from '../components/useCharacter';

import './charactersheet.css';

interface CharacterSheetProps {
    initialCharacter: Character;
    characterCallback: (c: Character) => void;
}
export const CharacterSheet: React.FC<CharacterSheetProps> = (props) => {
    const [character, dispatch] = useReducer(useCharacter, props.initialCharacter);
    const [edit, setEdit] = useState<"true" | "false" | "hide">("true");
    const [viewTraitList, setViewTraitList] = useState(false);
    const [viewPerkList, setViewPerkList] = useState(false);

    const setNext = () => {
        switch (edit) {
            case "true": setEdit("false"); return;
            case "false": setEdit("hide"); return;
            case "hide": setEdit("true"); return;

        }
    };
    return (<div className="characterSheet">
        <button onClick={() => setNext()}>edit</button>
        <table>
            <tbody>
                <tr>
                    <td><label>Name</label> <EditText txt={character.name} isEdit={edit} onChange={(str) => dispatch({ name: str, action: 'name', value: 0 })} /></td>
                    <td><label>Life</label> <HideText txt={character.getLife()} isEdit={edit} /></td>
                    <td><label>Strength</label> <EditText txt={character.strength} isEdit={edit} onChange={(str) => dispatch({ action: 'strength', value: parseInt(str) })} /></td>
                </tr>
                <tr>
                    <td><label>Gender</label> <EditText txt={character.gender} isEdit={edit} onChange={(str) => dispatch({ name: str, action: 'gender', value: 0 })} /></td>
                    <td><label>Mana</label> <HideText txt={character.getMana()} isEdit={edit} /> </td>
                    <td><label>Endurance</label> <EditText txt={character.endurance} isEdit={edit} onChange={(str) => dispatch({ action: 'endurance', value: parseInt(str) })} /></td>
                </tr>
                <tr>
                    <td><label>Species</label> <EditText txt={character.species} isEdit={edit} onChange={(str) => dispatch({ name: str, action: 'species', value: 0 })} /></td>
                    <td><label>Fear Resistence</label> <HideText txt={character.getFearResistence()} isEdit={edit} /> </td>
                    <td><label>Agility</label> <EditText txt={character.agility} isEdit={edit} onChange={(str) => dispatch({ action: 'agility', value: parseInt(str) })} /></td>
                </tr>
                <tr>
                    <td><label>Age</label> <EditText txt={character.age} isEdit={edit} onChange={(str) => dispatch({ action: 'age', value: parseInt(str) })} /></td>
                    <td><label>Melee DB s / m / l</label>  <HideText txt={character.getDamageBonusSmall() + '/' + character.getDamageBonusMedium() + '/' + character.getDamageBonusLarge()} isEdit={edit} /> </td>
                    <td><label>Perception</label> <EditText txt={character.perception} isEdit={edit} onChange={(str) => dispatch({ action: 'perception', value: parseInt(str) })} /></td>
                </tr>
                <tr>
                    <td><label>Character points</label> <HideText txt={character.getCalculatedPointsLeft()} isEdit={edit} /> </td>
                    <td><label>Homeworld</label> <EditText txt={character.background} isEdit={edit} onChange={(str) => dispatch({ action: 'background', value: 0, name: str })} /> </td>
                    <td><label>Intelligence</label> <EditText txt={character.intelligence} isEdit={edit} onChange={(str) => dispatch({ action: 'intelligence', value: parseInt(str) })} /></td>
                </tr>
                <tr>
                    <td><label>Experience multiplier</label>  <HideText txt={character.getExperienceMultiplier()} isEdit={edit} /> </td>
                    <td></td>
                    <td><label>Willpower</label> <EditText txt={character.willpower} isEdit={edit} onChange={(str) => dispatch({ action: 'willpower', value: parseInt(str) })} /></td>
                </tr>
                <tr>
                    <td>
                        <h5>Skills</h5>
                        <table>
                            <thead>
                                <tr>
                                    <th><label>Skill</label></th>
                                    <th>Exp</th>
                                    <th>Rank</th>
                                </tr>
                            </thead>
                            <tbody>
                                {character.skills.map(skill => {
                                    return <tr>
                                        <td >
                                            <label>{skill.name}</label>
                                        </td>
                                        <td></td>
                                        <td>
                                            <EditText txt={skill.level} isEdit={edit} onChange={(str) => dispatch({ action: 'skill', name: skill.name, value: parseInt(str) })} />
                                        </td>
                                    </tr>
                                })}
                                {Pad(45, character.skills.length).map(i => {
                                    return <tr>
                                        <td > <label> </label></td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </td>
                    <td>
                        <h5>Perks {(edit === "true") ? <button onClick={() => setViewPerkList(!viewPerkList)}>Add Perk</button> : null}</h5>
                        <table>
                            <tbody>
                                {viewPerkList ? GetPerkList().map(perk => {
                                    return <tr>
                                        <td>
                                            <button onClick={() => dispatch({ action: 'addperk', name: perk.name, value: 0, perkToAdd: perk })}>{perk.name}</button> {perk.description()}
                                        </td>
                                    </tr>
                                }) : null}
                                {character.perks.map(perk => {
                                    return <tr>
                                        <td>
                                            {perk.name}
                                        </td>
                                    </tr>
                                })}
                                {Pad(viewPerkList ? 0 : 45, character.perks.length).map(i => {
                                    return <tr>
                                        <td> <label> </label></td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </td>
                    <td>
                        <h5>Traits {(edit === "true") ? <button onClick={() => setViewTraitList(!viewTraitList)}>Add Trait</button> : null}</h5>


                        <table>
                            <tbody>
                                {viewTraitList ? GetTraits().map(trait => {
                                    return <tr>
                                        <td>
                                            <button onClick={() => dispatch({ action: 'addtrait', name: trait.name, value: 0, traitToAdd: trait })}>{trait.name}</button> {trait.description}
                                        </td>
                                    </tr>
                                }) : null}
                                {character.traits.map(trait => {
                                    return <tr>
                                        <td>
                                            {trait.name}
                                        </td>
                                    </tr>
                                })}
                                {Pad(viewTraitList ? 0 : 45, character.traits.length).map(i => {
                                    return <tr>
                                        <td> <label> </label></td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table></div>);
}

interface IHideText {
    isEdit: "true" | "false" | "hide";
    txt: string | number;
}
const HideText: React.FC<IHideText> = ({ isEdit, txt }) => {
    if (isEdit === "true")
        return <>{txt}</>;
    else if (isEdit === "false")
        return <>{txt}</>;
    else return null;
}

interface IEditText extends IHideText {
    onChange: (str: string) => void;
}

const EditText: React.FC<IEditText> = ({ isEdit, onChange, txt }) => {
    if (isEdit === "true")
        return <input type="text" onChange={(e) => onChange(e.target.value)} value={txt}></input>
    else return <HideText txt={txt} isEdit={isEdit} />
}

const Pad = (minSize: number, size: number) => {
    const i = Math.max(minSize - size, 0);
    let ar = new Array<number>();
    for (let counter = 0; counter < i; counter++) {
        ar.push(counter);
    }
    return ar;
}