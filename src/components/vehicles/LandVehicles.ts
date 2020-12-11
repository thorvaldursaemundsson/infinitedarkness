import { Vehicle, Electricity } from "./Vehicles";

const LandVehicles: Vehicle[] = [
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
        description: 'simple bicycle, speed and range depends on person using it (see athletics run, add 100% speed and range)',
        parts: [],
    },
    {
        name: 'motorcycle',
        medium: ['land'],
        passengers: 2,
        cargoKg: 10,
        fuelType: [Electricity],
        range: 1000,
        topSpeed: 55,
        acceleration: 7,
        cost: 5000,
        description: 'electric motorcycle',
        parts: [],
    },
    {
        name: 'quadbike',
        medium: ['land'],
        passengers: 2,
        cargoKg: 20,
        fuelType: [Electricity],
        range: 1000,
        topSpeed: 35,
        acceleration: 6,
        cost: 6000,
        description: 'electric quadcycle',
        parts: [],
    },
    {
        name: 'sedan',
        medium: ['land'],
        passengers: 4,
        cargoKg: 100,
        fuelType: [Electricity],
        range: 1500,
        topSpeed: 50,
        acceleration: 8,
        cost: 20000,
        description: 'basic car',
        parts: [],
    },
    {
        name: 'truck',
        medium: ['land'],
        passengers: 6,
        cargoKg: 10000,
        fuelType: [Electricity],
        range: 1500,
        topSpeed: 40,
        acceleration: 3,
        cost: 200000,
        description: 'large car with ample space, siginificant cargo size',
        parts: [],
    },
    {
        name: 'van',
        medium: ['land'],
        passengers: 8,
        cargoKg: 150,
        fuelType: [Electricity],
        range: 1600,
        topSpeed: 45,
        acceleration: 7,
        cost: 40000,
        description: 'large car with lots of space',
        parts: [],
    },
    {
        name: 'campervan',
        medium: ['land'],
        passengers: 8,
        cargoKg: 1500,
        fuelType: [Electricity],
        range: 2500,
        topSpeed: 40,
        acceleration: 5,
        cost: 90000,
        description: 'truck fitted with housing, huge battery capacity',
        parts: [],
    },
    {
        name: 'bus',
        medium: ['land'],
        passengers: 50,
        cargoKg: 2000,
        fuelType: [Electricity],
        range: 2000,
        topSpeed: 35,
        acceleration: 3,
        cost: 240000,
        description: 'truck fitted with housing, huge battery capacity',
        parts: [],
    },
];

export default LandVehicles;