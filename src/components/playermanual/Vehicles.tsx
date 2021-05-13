import React, { useState } from "react";
import Section from "./Section";
import Ellipsis from "../general/Ellipsis";
import Indexer, { Indexed } from "../general/Indexer";
import { IDamageAmount, IRollAmount, Vehicle } from "../vehicles/Vehicles";
import LandVehicles from "../vehicles/LandVehicles";
import WaterVehicles from "../vehicles/WaterVehicles";
import SpaceVehicles from "../vehicles/SpaceVehicles";
import AirVehicles, { airVehicleDamageTexts, airVehicleParts, rollAmounts } from "../vehicles/AirVehicles";
import { weightConverter } from "../../utils/utilFunctions";


const Vehicles: React.FC = () => {
    return <Section title='Vehicles'>
        <Indexer title='Vehicles'>
            <Indexed title='Land vehicles'>
                <VehicleTable vehicles={LandVehicles} parts={landVehicleParts} />
            </Indexed>
            <Indexed title='water vehicles'>
                <VehicleTable vehicles={WaterVehicles} parts={waterVehicleParts} />
                

            </Indexed>
            <Indexed title='air'>
            <Section title='Landing & crashlanding'>
                    <h5>Landing</h5>
                    <p>Whenever you land there is a risk that a part of the airplane takes some damage or is worn. When you crash the risk increases considerably.</p>
                    <p>The first step is to find the part that is damaged, roll 1d100, the second step is to find the amount of damage, 1, 1d4 or 1d6 depending on landing success</p>
                    <h6>Level of damage</h6>
                    <p>There are 6 levels of damage (level 0 being undamaged, pristine). Damages reduce resell value and pilot skill addadtively. Repair is mechanics + intelligence.
                    Some parts are essencial and the certain functions do not work without them.
                </p>
                    <ol>
                        <li>Worn: no effect on performance, repair 20. -1% value</li>
                        <li>Slightly damaged: -2 on pilot, repair 20. -2% value</li>
                        <li>Moderately damaged: -4 on pilot , repair 25 + 2% of plane value for spare parts. -4% value</li>
                        <li>Severely damaged: part does not work, -6 on pilot, repair 25 + 4% of plane value for spare parts. -4% value</li>
                        <li>Extremely damaged: part does not work, -6 on pilot, repair 30 + 5% of plane value for spare parts. -5% value</li>
                        <li>Obliterated: part is frigg'n gone, -8 on pilot repair 35 + 6% of plane value for spare parts. -6% value </li>
                    </ol>

                    <RollOMeter partsList={airVehicleParts} amountList={rollAmounts} damageAmounts={airVehicleDamageTexts} />

                </Section> 
                <VehicleTable vehicles={AirVehicles} parts={airVehicleParts} />
            </Indexed>
            <Indexed title='space'>
                <VehicleTable vehicles={SpaceVehicles} parts={spaceVehicleParts} />
            </Indexed>
        </Indexer>
    </Section>
}

interface IRollOmeterProps {
    partsList: string[];
    amountList: IRollAmount[];
    damageAmounts: IDamageAmount[];
}

const RollOMeter: React.FC<IRollOmeterProps> = ({ partsList, amountList, damageAmounts }) => {
    const [currentRolls, setCurrentRolls] = useState<{ d100: number, index: number }[]>([]);
    const [currentParts, setCurrentParts] = useState<{ partN: number, dmg: number }[]>(partsList.map((p, i) => {
        return { partN: i, dmg: 0 };
    }));
    const spacing = Math.floor(100 / partsList.length);
    const rollAmount = (amount: IRollAmount) => {
        const rolls = [...Array(amount.numberOf1d100)].map((v, i) => {
            let r = Math.floor(Math.random() * (partsList.length + 1));
            return { d100: r * spacing + 1, index: r };
        });
        setCurrentRolls(rolls);
        const temp = currentParts;
        rolls.forEach(i => {
            if (temp[i.index] !== undefined)
                temp[i.index].dmg += Math.floor(Math.random() * amount.sidesPerDice) + 1;
        });
        setCurrentParts(temp);
    }

    const convertNumberToText = (n: number): string => {
        const das = damageAmounts.filter(da => da.damageAmountNumber === n);
        if (das.length === 1) return das[0].damageText;
        else return 'obliderated';
    }

    return <>
        <ol>
            {amountList.map(a => <li>{a.text}: roll {a.numberOf1d100}d100, apply 1d{a.sidesPerDice} damage <button onClick={() => rollAmount(a)}>appy</button></li>)}
        </ol>
        <hr />
        {currentRolls.map(r => {
            if (currentParts[r.index] === undefined || partsList[currentParts[r.index].partN] === undefined) return null;
            return <>{` ${partsList[currentParts[r.index].partN]} ${convertNumberToText(currentParts[r.index].dmg)} ${currentParts[r.index].dmg}`}<br /></>;
        })}
        <hr />
        <ul>
            {currentParts.map((p, i) => <li>({i * spacing + 1} - {i * spacing + spacing}) -{'>'}{partsList[p.partN]}: {convertNumberToText(p.dmg)} ({p.dmg})</li>)}
        </ul>
    </>;
}

const landVehicleParts: string[] = [];

const waterVehicleParts: string[] = [];

const spaceVehicleParts: string[] = [];

interface IVehicleTableProps {
    vehicles: Vehicle[];
    parts: string[];
}

const VehicleTable: React.FC<IVehicleTableProps> = ({ vehicles }) => {
    /*const [vehicleToEdit, setVehicleToEdit] = useState<Vehicle | undefined>(undefined);

    const viewVehicleToEdit = (v: Vehicle | undefined) => {
        if (v === undefined) return null;
        else return <VehicleEditor baseVehicle={v} />;
    }*/

    return (<>
        <table className='datatable'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Passengers</th>
                    <th>Capacity</th>
                    <th>Cost</th>
                </tr>
            </thead>
            <tbody>
                {vehicles.map(v => <VehicleRow onSelect={(v) => {}} vehicle={v} />)}
            </tbody>
        </table>
    </>);
}

interface IVehicleRowProps {
    vehicle: Vehicle;
    onSelect: (v: Vehicle) => void;
}

const costConverter = (credits: number) => {
    if (credits < 10000) return `${credits} c`;
    if (credits < 10000000) return `${(credits / 1000).toFixed(0)}k c`;
    return `${(credits / 1000000).toFixed(0)}m c`;
}

const VehicleRow: React.FC<IVehicleRowProps> = ({ vehicle, onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);

    if (isOpen)
        return <>
            <tr className='datatableclicker' onClick={() => setIsOpen(false)}>
                <td>{vehicle.name}</td>
                <td>{vehicle.medium.map(m => <span>{m} </span>)}</td>
                <td>{vehicle.passengers}</td>
                <td>{weightConverter(vehicle.cargoKg)}</td>
                <td>{costConverter(vehicle.cost)}</td>
            </tr>
            <tr>
                <td>&nbsp;acc/v/r/fuel</td>
                <td>{vehicle.acceleration}m/s/s</td>
                <td>{vehicle.topSpeed * 3.6}km/h</td>
                <td>{vehicle.range}km</td>
                <td>{vehicle.fuelType.map(m => <span>{m.name} </span>)}</td>
            </tr>
            <tr>
                <td colSpan={4}><Ellipsis text={vehicle.description} cutOff={120} ></Ellipsis></td>
                <td> <button onClick={() => onSelect(vehicle)}>Edit</button>  </td>
            </tr>
        </>;
    else return <tr className='datatableclicker' onClick={() => setIsOpen(true)}>
        <td>{vehicle.name}</td>
        <td>{vehicle.medium.map(m => <span>{m} </span>)}</td>
        <td>{vehicle.passengers}</td>
        <td>{weightConverter(vehicle.cargoKg)}</td>
        <td>{costConverter(vehicle.cost)}</td>
    </tr>
}




export default Vehicles;