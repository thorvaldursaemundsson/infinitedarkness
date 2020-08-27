import React, { useState, useReducer } from "react";
import Section from "./Section";
import Ellipsis from "../Ellipsis";
import Indexer, { Indexed } from "../Indexer";
import { Vehicle } from "../vehicles/Vehicles";
import LandVehicles from "../vehicles/LandVehicles";
import WaterVehicles from "../vehicles/WaterVehicles";
import SpaceVehicles from "../vehicles/SpaceVehicles";
import AirVehicles from "../vehicles/AirVehicles";


const Vehicles: React.FC = () => {
    return <Section title='Vehicles'>
        <Indexer title='Vehicles'>
            <Indexed title='Land vehicles'>
                <VehicleTable vehicles={LandVehicles} />
            </Indexed>
            <Indexed title='water vehicles'>
                <VehicleTable vehicles={WaterVehicles} />
            </Indexed>
            <Indexed title='air'>
                <VehicleTable vehicles={AirVehicles} />
            </Indexed>
            <Indexed title='space'>
                <VehicleTable vehicles={SpaceVehicles} />
            </Indexed>
        </Indexer>
    </Section>
}

interface IVehicleTableProps {
    vehicles: Vehicle[];
}

const VehicleTable: React.FC<IVehicleTableProps> = ({ vehicles }) => {
    const [vehicleToEdit, setVehicleToEdit] = useState<Vehicle | undefined>(undefined);

    const viewVehicleToEdit = (v: Vehicle | undefined) => {
        if (v === undefined) return null;
        else return <VehicleEditor baseVehicle={v} />;
    }

    return (<>
        
        <table className='datatable'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Passengers</th>
                    <th>Cargo</th>
                    <th>Cost</th>
                </tr>
            </thead>
            <tbody>
                {vehicles.map(v => <VehicleRow onSelect={(v) => setVehicleToEdit(v)} vehicle={v} />)}
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

const weightConverter = (kg: number) => {
    if (kg < 1000) return `${kg.toFixed(0)}kg`;
    if (kg < 1000 * 1000) return `${(kg / 1000).toFixed(0)}tons`;
    return `${(kg / 1000000).toFixed(0)}k tons`;
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

interface IVehicleEditorProps {
    baseVehicle: Vehicle;
}


const VehicleEditor: React.FC<IVehicleEditorProps> = ({ baseVehicle }) => {
    const [vehicle, dispatch] = useReducer(vehicleReducer, baseVehicle);

    let passengersCount = 0;
    let impulseSum = 0;
    let weight = 0;

    for (let i in vehicle.parts) {
        let p: any = vehicle.parts[i];
        if (p.passengerCount !== undefined) { //PassengerSection
            passengersCount += p.passengerCount;
        }
        else if (p.fuelUse !== undefined) { //Thruster
            impulseSum += p.impulseKn;
        }
        weight += vehicle.parts[i].weightKg;
    }

    let acceleration = impulseSum / weight;

    return <>
        <h3>Vehicle Editor</h3>
        <b>Name</b>: <input type='text' value={vehicle.name} onChange={e => dispatch({ whatToUpdate: 'name', value: e.target.value })} /><br />
        <b>Cost</b>: {vehicle.cost}<br />
        <b>Description</b>: <input type='text' value={vehicle.description} onChange={e => dispatch({ whatToUpdate: 'description', value: e.target.value })} /><br />
        <b>Medium</b>: {vehicle.medium.map(m => <span>{m} </span>)}<br />
        <b>Max Cargo</b>: {vehicle.cargoKg}kg<br />
        <b>Fuel</b>: {vehicle.fuelType.map(ft => <span>{ft.name}</span>)}<br />
        <b>Passengers</b>: {passengersCount}<br />
        <b>Weight</b>: {weightConverter(weight)} <br />
        <b>Accelleration</b>: {acceleration.toFixed(3)} m/s/s <br />
        <b>Part Breakdown</b> {vehicle.parts.map(part => <span>{part.name}, </span>)}
    </>;
}

interface IVehicleDispatcher {
    whatToUpdate: 'name' | 'description';
    value: string;
}

const vehicleReducer = (state: Vehicle, dispatch: IVehicleDispatcher): Vehicle => {
    switch (dispatch.whatToUpdate) {
        case 'name': return { ...state, name: dispatch.value };
        case 'description': return { ...state, description: dispatch.value };
        default: return state;
    }
}


export default Vehicles;