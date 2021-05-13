import React from "react";
import { useReducer } from "react";
import { weightConverter } from "../../utils/utilFunctions";
import { Vehicle } from "./Vehicles";

interface IVehicleEditorProps {
    baseVehicle: Vehicle;
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


export default VehicleEditor;