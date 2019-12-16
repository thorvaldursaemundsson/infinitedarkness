import React, { useReducer,useState } from 'react';
import { Field } from './Field';
import { Paper, Grid, Button } from '@material-ui/core';
import { Character } from './Character';
import { GetPerkList, Perk } from './Perks';

interface CharacterSheetProps {
    initialCharacter: Character;
    characterCallback: (c: Character) => void;
}

export const CharacterSheet: React.FC<CharacterSheetProps> = (props) => {
    const [character, dispatch] = useReducer(useCharacter, props.initialCharacter);
    const [charJSON, setCharJSON] = useState('');

    const perksList = GetPerkList();

    const makeJSONText = () => {
        const json = JSON.stringify({...character});
        setCharJSON(json);
    };

    return <Paper style={{ textAlign: 'left' }}>
        <Button onClick={() => props.characterCallback(character)}>exit</Button>
        {charJSON !== '' ? <Button onClick={() => setCharJSON('')}>Close character data</Button> : null}
        <Button onClick={() => makeJSONText()}>Save character data</Button>
        <Paper>{charJSON}</Paper>
        <Grid container spacing={3} >
            <Grid item xs={12} sm={6}>
                Character points used {character.getCalculatedPointsUsed()} / {character.getStartingPointsAvailable()} ({character.getMaximumPointsAvailable()})
                <Field max={15} label='strength' value={character.strength} onChange={n => dispatch({ action: 'strength', value: n })}>Raw muscle strength</Field>
                <Field max={15} label='agility' value={character.agility} onChange={n => dispatch({ action: 'agility', value: n })}>Steady hands, reflexes</Field>
                <Field max={15} label='endurance' value={character.endurance} onChange={n => dispatch({ action: 'endurance', value: n })}>Ability to last long</Field>
                <Field max={15} label='perception' value={character.perception} onChange={n => dispatch({ action: 'perception', value: n })}>eyesight, hearing, and how much you smell</Field>
                <Field max={15} label='willpower' value={character.willpower} onChange={n => dispatch({ action: 'willpower', value: n })}>ability to say "no" when it's sooo good</Field>
                <Field max={15} label='intelligence' value={character.intelligence} onChange={n => dispatch({ action: 'intelligence', value: n })}>big brainy boy</Field>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Field label='age' max={90} min={15} value={character.age} onChange={n => dispatch({ action: 'age', value: n })}>Your age determines your starting, maximum experience, as well as experience multiplier</Field>
                <Paper>Experience multiplier: {character.getExperienceMultiplier()}</Paper>
                <Paper>Hit points: {character.getHitpoints()}</Paper>
                <Paper>mana: {character.getMana()}</Paper>
                <Paper>damage bonus small: {character.getDamageBonusSmall()}</Paper>
                <Paper>damage bonus medium: {character.getDamageBonusMedium()}</Paper>
                <Paper>damage bonus large: {character.getDamageBonusLarge()}</Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
                {character.skills.map(s => {
                    let modifier: number = 0;
                    switch (s.attribute) {
                        case 'strength': modifier = character.strength; break;
                        case 'agility': modifier = character.agility; break;
                        case 'endurance': modifier = character.endurance; break;
                        case 'perception': modifier = character.perception; break;
                        case 'willpower': modifier = character.willpower; break;
                        case 'intelligence': modifier = character.intelligence; break;
                    }
                    return <Field
                        modifier={modifier}
                        max={40}
                        min={0}
                        label={s.name + ' ' + s.attribute.substring(0, 3).toUpperCase()}
                        value={s.level}
                        onChange={(n => dispatch({ action: 'skill', name: s.name, value: n }))}>
                        {s.description}
                        {perksList.filter(p => p.skill === s.name).map(p => {
                            return <Button onClick={() => dispatch({ action: 'addperk', name: p.name, value: 0, perkToAdd: p })}>{p.name}</Button>;
                        })}
                    </Field>
                })}
            </Grid>
            <Grid item xs={12} sm={6}>
                <h1>Perks</h1>
                {character.perks.map(perk => {
                    return (<p><b>{perk.name}</b> ({perk.cost}) {perk.description()}
                        <Button size="small" onClick={() => dispatch({action:'removeperk', name:perk.name, value:0, perkToAdd: perk})}>X</Button>
                    </p>)
                })}
            </Grid>
        </Grid>
    </Paper>;
}

interface dispatcher {
    action: string;
    name?: string;
    value: number;
    perkToAdd?: Perk;
}

const useCharacter = (state: Character, action: dispatcher): Character => {
    switch (action.action) {
        case 'strength': return new Character({ ...state, strength: action.value });
        case 'agility': return new Character({ ...state, agility: action.value });
        case 'endurance': return new Character({ ...state, endurance: action.value });
        case 'willpower': return new Character({ ...state, willpower: action.value });
        case 'perception': return new Character({ ...state, perception: action.value });
        case 'intelligence': return new Character({ ...state, intelligence: action.value });
        case 'age': return new Character({ ...state, age: action.value });
        case 'skill':
            let r = new Character({
                ...state
            });
            r.skills[state.skills.findIndex(s => s.name === action.name)].level = action.value;
            return r;
    }
    if (action.action === 'addperk') {
        let r = new Character({
            ...state
        });
        if (action.perkToAdd !== undefined) r.perks.push(action.perkToAdd);
        return r;
    }
    else if (action.action === 'removeperk') {
        let r = new Character({
            ...state
        });
        if (action.perkToAdd !== undefined) {
            let pta = action.perkToAdd;
            r.perks = r.perks.filter(p => p.name !== pta.name);
        }
        return r;
    }


    return state;
}