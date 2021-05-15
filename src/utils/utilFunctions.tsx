import React from "react";

export const weightConverter = (grams: number) => {
    if (grams < 1000) return `${grams.toFixed(0)}g`;
    if (grams < 1000 * 1000) return `${(grams / 1000).toFixed(1)}kg`;
    return `${(grams / 100000).toFixed(4)} tons`;
};

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