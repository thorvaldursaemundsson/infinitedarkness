import React, { useState } from "react";
import Section from "./Section";
import Ellipsis from "../Ellipsis";


const Vehicles: React.FC = () => {
    return <Section title='Vehicles'>
        <h3>Vehicles</h3>

        {VehicleTable(vehicles)}
    </Section>
}

type Medium = 'land' | 'air' | 'water' | 'subwater' | 'space' | 'hyperspace';
type FuelType = 'electricity' | 'petrol' | 'jetfuel' | 'lqd methane-oxygen' | 'hypermatter';

interface Vehicle {
    medium: Medium[];
    name: string;
    passengers: number;
    cargoKg: number;
    fuelType: FuelType[];
    range: number;
    topSpeed: number;
    acceleration: number;
    cost: number;
    description: string;
}

const vehicles: Vehicle[] = [
    {
        name: 'bicyle',
        medium: ['land'],
        passengers: 1,
        cargoKg: 1,
        fuelType: [],
        range: 0,
        topSpeed: 15,
        acceleration: 5,
        cost: 1000,
        description: 'simple bicycle, speed and range depends on person using it (see athletics run, add 100% speed and range)'
    },
    {
        name: 'motorcycle',
        medium: ['land'],
        passengers: 2,
        cargoKg: 10,
        fuelType: ['electricity'],
        range: 900,
        topSpeed: 55,
        acceleration: 7,
        cost: 5000,
        description: 'electric motorcycle'
    },
    {
        name: 'quadbike',
        medium: ['land'],
        passengers: 2,
        cargoKg: 20,
        fuelType: ['electricity'],
        range: 800,
        topSpeed: 35,
        acceleration: 6,
        cost: 6000,
        description: 'electric quadcycle'
    },
    {
        name: 'sedan',
        medium: ['land'],
        passengers: 4,
        cargoKg: 100,
        fuelType: ['electricity'],
        range: 1000,
        topSpeed: 50,
        acceleration: 8,
        cost: 20000,
        description: 'basic car'
    },
    {
        name: 'van',
        medium: ['land'],
        passengers: 8,
        cargoKg: 150,
        fuelType: ['electricity'],
        range: 1200,
        topSpeed: 45,
        acceleration: 7,
        cost: 40000,
        description: 'large car with lots of space'
    },
    {
        name: 'campervan',
        medium: ['land'],
        passengers: 8,
        cargoKg: 250,
        fuelType: ['electricity'],
        range: 2000,
        topSpeed: 40,
        acceleration: 5,
        cost: 90000,
        description: 'truck fitted with housing, huge battery capacity'
    },
    {
        name: 'paddle boat',
        medium: ['water'],
        passengers: 6,
        cargoKg: 50,
        fuelType: [],
        range: 0,
        topSpeed: 2,
        acceleration: 1,
        cost: 2000,
        description: 'basic paddleboat'
    },
    {
        name: 'jetski',
        medium: ['water'],
        passengers: 2,
        cargoKg: 20,
        fuelType: ['electricity'],
        range: 80,
        topSpeed: 55,
        acceleration: 7,
        cost: 10000,
        description: 'fast moving water ski'
    },
    {
        name: 'speed boat',
        medium: ['water'],
        passengers: 8,
        cargoKg: 100,
        fuelType: ['electricity'],
        range: 500,
        topSpeed: 45,
        acceleration: 5,
        cost: 40000,
        description: 'electric speed boat'
    },
    {
        name: 'yacht',
        medium: ['water'],
        passengers: 20,
        cargoKg: 10000,
        fuelType: ['electricity'],
        range: 12000,
        topSpeed: 40,
        acceleration: 3,
        cost: 100000,
        description: 'luxury boat often fitted with solar panels to allow slow recharge anywhere'
    },
    {
        name: 'cruiser',
        medium: ['water'],
        passengers: 1200,
        cargoKg: 20000000,
        fuelType: ['electricity'],
        range: 2000000,
        topSpeed: 14,
        acceleration: 1,
        cost: 3500000,
        description: 'cruiser fitted with on board small fusion generator capable of running for years without refueling'
    },
    {
        name: 'battleship',
        medium: ['water'],
        passengers: 1000,
        cargoKg: 20000000,
        fuelType: ['electricity'],
        range: 2000000,
        topSpeed: 22,
        acceleration: 0.8,
        cost: 150000000,
        description: 'battleship fitted with on board small fusion generator, large railguns and laser cannons'
    },
    {
        name: 'submarine',
        medium: ['water', 'subwater'],
        passengers: 40,
        cargoKg: 10000,
        fuelType: ['electricity'],
        range: 1000000,
        topSpeed: 12,
        acceleration: 1,
        cost: 70000000,
        description: 'fusion powered submarine'
    },
    {
        name: 'small plane',
        medium: ['air'],
        passengers: 2,
        cargoKg: 50,
        fuelType: ['electricity'],
        range: 600,
        topSpeed: 125,
        acceleration: 20,
        cost: 15000,
        description: 'tiny electric airplane with high speed and low range'
    },
    {
        name: 'small cargoplane',
        medium: ['air'],
        passengers: 4,
        cargoKg: 200,
        fuelType: ['electricity'],
        range: 700,
        topSpeed: 120,
        acceleration: 18,
        cost: 30000,
        description: 'tiny electric cargoplane with low range and decent speed'
    },
    {
        name: 'large electroplane',
        medium: ['air'],
        passengers: 100,
        cargoKg: 110,
        fuelType: ['electricity'],
        range: 1500,
        topSpeed: 130,
        acceleration: 22,
        cost: 50000000,
        description: 'large airplane capable of medium range flight'
    },
    {
        name: 'airship',
        medium: ['air'],
        passengers: 200,
        cargoKg: 600,
        fuelType: ['electricity'],
        range: 1000000,
        topSpeed: 140,
        acceleration: 24,
        cost: 120000000,
        description: 'massive electric airplane fitted with micro fusion capable of staying airborne for months'
    },
    {
        name: 'fighterplane',
        medium: ['air'],
        passengers: 2,
        cargoKg: 10,
        fuelType: ['electricity', 'jetfuel'],
        range: 600,
        topSpeed: 410,
        acceleration: 40,
        cost: 40000000,
        description: 'super sonic electric airplane, switches to jetfuel when going super sonic, fitted with laser cannons'
    },
    {
        name: 'hyperplane',
        medium: ['air'],
        passengers: 2,
        cargoKg: 10,
        fuelType: ['jetfuel'],
        range: 1200,
        topSpeed: 3400,
        acceleration: 45,
        cost: 60000000,
        description: 'hyper sonic airplane, uses synthetic jetfuel, capable of hypersonic cruise'
    },
    {
        name: 'rocketship',
        medium: ['air', 'space'],
        passengers: 4,
        cargoKg: 10000,
        fuelType: ['lqd methane-oxygen'],
        range: 0,
        topSpeed: 24000,
        acceleration: 45,
        cost: 450000000,
        description: 'rocket ship capable of taking off and landing on any planet with less than 3g atmosphere, space capable, radiation shield for interplanetary travel, needs refuel and service every trip, service price 20% of total value'
    },
    {
        name: 'spaceplane',
        medium: ['air', 'space'],
        passengers: 4,
        cargoKg: 10000,
        fuelType: ['jetfuel', 'lqd methane-oxygen'],
        range: 0,
        topSpeed: 36000,
        acceleration: 40,
        cost: 900000000,
        description: 'hypersonic airplane with rocket switch, capable of both flying through air and space, only needs refuel and basic service after every use'
    },
    {
        name: 'small spaceship',
        medium: ['space'],
        passengers: 10,
        cargoKg: 100000,
        fuelType: ['electricity'],
        range: 0,
        topSpeed: 2008000,
        acceleration: 3,
        cost: 10000000,
        description: 'small sized space ship, fitted with micro fusion power, capable of maintaining 0.3g for 8 days without refueling, '+
        'virtually unlimited range within a solar system. '+
        '380 metric ton dry mass 18m long, 7m radius, 11 metric ton fusion fuel'
    },
    {
        name: 'medium spaceship',
        medium: ['space'],
        passengers: 100,
        cargoKg: 1000000,
        fuelType: ['electricity'],
        range: 0,
        topSpeed: 2600000,
        acceleration: 3,
        cost: 30000000,
        description: 'medium sized space ship, fitted with micro fusion power, capable of maintaining 0.3g for 10 days without refueling, '+
        'virtually unlimited range within a solar system. '+
        '3,100 metric ton dry mass, 42m long, 19m radius 108 metric ton fusion fuel'
    },
    {
        name: 'large spaceship',
        medium: ['space'],
        passengers: 1000,
        cargoKg: 10000000,
        fuelType: ['electricity'],
        range: 0,
        topSpeed: 2600000,
        acceleration: 3,
        cost: 150000000,
        description: 'large space ship, fitted with small fusion power, capable of maintaining 0.3g for 10 days without refueling, '+
        'virtually unlimited range within a solar system. '+
        '24,720 metric ton dry mass, 170m long, 30m radius, 820 metric ton fusion fuel'
    },
    {
        name: 'huge spaceship',
        medium: ['space'],
        passengers: 10000,
        cargoKg: 100000000,
        fuelType: ['electricity'],
        range: 0,
        topSpeed: 2600000,
        acceleration: 3,
        cost: 750000000,
        description: 'huge space ship, fitted with fusion power, capable of maintaining 0.3g for 10 days without refueling, '+
        'virtually unlimited range within a solar system. '+
        '180,000 metric ton dry mass, 480m long, 61m radius, 8200 metric ton fusion fuel'
    },
    {
        name: 'huge FTL spaceship',
        medium: ['space', 'hyperspace'],
        passengers: 10000,
        cargoKg: 100000000,
        fuelType: ['electricity', 'hypermatter'],
        range: 0,
        topSpeed: 2600000,
        acceleration: 3,
        cost: 1500000000,
        description: 'huge space ship, fitted with fusion power, capable of maintaining 0.3g for 10 days without refueling,'+
        ' virtually unlimited range within a solar system, can enter hyperspace and travel up to 50 times the speed of light. '+
        '200,000 metric ton dry mass, 480m long, 61m radius, 8300 metric ton fusion fuel'
    },
];

const VehicleTable = (vehicles: Vehicle[]) =>
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
            {vehicles.map(v => <VehicleRow vehicle={v} />)}
        </tbody>
    </table>


interface IVehicleRowProps {
    vehicle: Vehicle
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


const VehicleRow: React.FC<IVehicleRowProps> = ({ vehicle }) => {
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
                <td>{vehicle.fuelType.map(m => <span>{m} </span>)}</td>
            </tr>
            <tr>
                <td colSpan={5}><Ellipsis text={vehicle.description} cutOff={120} ></Ellipsis></td>
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