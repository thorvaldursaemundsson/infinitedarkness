import React, {  useReducer } from 'react';
import { Field } from './Field';
import { Paper, Grid,Button } from '@material-ui/core';
import { Character } from './Character';

interface CharacterSheetProps {
    initialCharacter: Character;
    characterCallback:(c:Character) => void;
}

export const CharacterSheet: React.FC<CharacterSheetProps> = (props) => {
    const [character, dispatch] = useReducer(useCharacter, props.initialCharacter);

    return <Paper style={{ textAlign: 'left' }}>
        <Button onClick={() => props.characterCallback(character)}>exit</Button>
        <Grid container spacing={3} >
            <Grid item xs={12} sm={6}>
                Character points used {character.getCalculatedPointsUsed()} / {character.getStartingPointsAvailable()} ({character.getMaximumPointsAvailable()})
                <Field label='strength' value={character.strength} onChange={n => dispatch({ action: 'strength', value: n })}>Raw muscle strength</Field>
                <Field label='agility' value={character.agility} onChange={n => dispatch({ action: 'agility', value: n })}>Steady hands, reflexes</Field>
                <Field label='endurance' value={character.endurance} onChange={n => dispatch({ action: 'endurance', value: n })}>Ability to last long</Field>
                <Field label='perception' value={character.perception} onChange={n => dispatch({ action: 'perception', value: n })}>eyesight, hearing, and how much you smell</Field>
                <Field label='willpower' value={character.willpower} onChange={n => dispatch({ action: 'willpower', value: n })}>ability to say "no" when it's sooo good</Field>
                <Field label='intelligence' value={character.intelligence} onChange={n => dispatch({ action: 'intelligence', value: n })}>big brainy boy</Field>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Field label='age' max={80} min={15} value={character.age} onChange={n => dispatch({ action: 'age', value: n })}>Your age determines your starting, maximum experience, as well as experience multiplier</Field>
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
                        enableDice={true}
                        modifier={modifier}
                        max={30}
                        min={0}
                        label={s.name + ' ' + s.attribute.substring(0, 3).toUpperCase()} 
                        value={s.level} 
                        onChange={(n => dispatch({ action: 'skill', name: s.name, value: n }))}>
                           {s.description} 
                    </Field>
                })}
            </Grid>
        </Grid>
    </Paper>;
}

interface dispatcher {
    action: string;
    name?: string;
    value: number;
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
    return state;
}