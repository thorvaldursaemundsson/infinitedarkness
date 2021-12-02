import React from "react";
import { humansData } from "../components/races/Humans";
import { merlionsData } from "../components/races/Merlions";
import { nekovianData } from "../components/races/Nekovians";
import { IRacialMod, race } from "../components/races/Races";
import { shambrasData } from "../components/races/Shambras";
import { synthsData } from "../components/races/Synth";

export const weightConverter = (grams: number) => {
    if (grams < 1000) return `${grams.toFixed(0)}g`;
    else if (grams < (10000000)) return `${(grams / 1000).toFixed(0)}kg`;
    else return `${(grams / 1000000).toFixed(1)} tons`;
};

export const bigNumberSeparator = (numb: number) => {
    return numb
        .toFixed(1)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const RollSingleDice = (sides: number) => Math.floor(Math.random() * sides) + 1;

export const RollDice = (numberOfDice: number, sidesPerDice: number) =>
    [...Array(numberOfDice)].map(n => RollSingleDice(sidesPerDice));

interface ISelector {
    values: string[];
    callback: (v: string) => void;
    preset: string;
    label: string;
}

export const Selector: React.FC<ISelector> = ({ values, callback, preset, label }) => {
    return <label className='mediumSizedLabel'>{label}<select onChange={e => callback(e.target.value)}>
        {values.map(v => <option value={v} selected={preset === v}>{v}</option>)}
    </select></label>
};

export const findRacialModFromRage = (species: race | undefined, age: number | undefined) => {
    if (species === undefined || age === undefined) return undefined;
    let output: IRacialMod | undefined = undefined;
    switch (species) {
        case 'human':
            output = humansData.racialMods.find(irm => irm.ageSpan[1] >= age && irm.ageSpan[0] <= age);
            break;
        case 'merlion':
            output = merlionsData.racialMods.find(irm => irm.ageSpan[1] >= age && irm.ageSpan[0] <= age);
            break;
        case 'nekovian':
            output = nekovianData.racialMods.find(irm => irm.ageSpan[1] >= age && irm.ageSpan[0] <= age);
            break;
        case 'shambras':
            output = shambrasData.racialMods.find(irm => irm.ageSpan[1] >= age && irm.ageSpan[0] <= age);
            break;
        case 'synth':
            output = synthsData.racialMods.find(irm => irm.ageSpan[1] >= age && irm.ageSpan[0] <= age);
            break;
    }
    return output;
}


export function shuffle<T>(array: T[]) {
    var currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}