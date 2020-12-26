import React, { useState } from "react";
import { IDice, IRacialMod } from "./Races";

interface IRaceTableProps {
    racialData: IRacialMod[];
}

const RaceTable: React.FC<IRaceTableProps> = ({ racialData }) => {
    const [isPointBuy, setIsPointBuy] = useState(false);
    const ageSpans = racialData.map(r => r.ageSpan);
    const strength = racialData.map(r => r.strength);
    const endurance = racialData.map(r => r.endurance);
    const agility = racialData.map(r => r.agility);
    const perception = racialData.map(r => r.perception);
    const intelligence = racialData.map(r => r.intelligence);
    const willpower = racialData.map(r => r.willpower);

    const ageSpanSizes = racialData.map(r => {
        return {
            ageSpan: r.ageSpan,
            sizeOptions: r.sizeOptions,
            special: r.special,
        };
    });

    return <>
        <ul>
            {ageSpanSizes.map(ass => <li>Age {ass.ageSpan[0]} - {ass.ageSpan[1]}
                {ass.special && ` (${ass.special}), `}
                &nbsp; size: {ass.sizeOptions.join(', ')}
            </li>)}
        </ul>
        <button onClick={() => setIsPointBuy(!isPointBuy)}>pointBuy/random</button>
        <table>
            <thead>
                <tr>
                    <th>&nbsp;</th>
                    {ageSpans.map(ageSpan => <th>{ageSpan[0]} - {ageSpan[1]}</th>)}
                </tr>
            </thead>
            <tbody>
                <DataRow pointBuy={isPointBuy} label={'STR'} data={strength} />
                <DataRow pointBuy={isPointBuy} label={'END'} data={endurance} />
                <DataRow pointBuy={isPointBuy} label={'AGI'} data={agility} />
                <DataRow pointBuy={isPointBuy} label={'PER'} data={perception} />
                <DataRow pointBuy={isPointBuy} label={'INT'} data={intelligence} />
                <DataRow pointBuy={isPointBuy} label={'WIL'} data={willpower} />
            </tbody>
        </table></>;
};

interface IDataRow {
    data: IDice[];
    label: string;
    pointBuy: boolean;
}

const DataRow: React.FC<IDataRow> = ({ data, label, pointBuy }) => {
    if (pointBuy)
        return <tr><td>{label}</td>{data.map(d => <td>{d.pointBuyMod}</td>)}</tr>
    return <tr><td>{label}</td>{data.map(d => <td >{d.numberOfDice}d{d.sidesPerDice}</td>)}</tr>
};


export default RaceTable;