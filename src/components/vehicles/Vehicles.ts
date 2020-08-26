
export type Medium = 'land' | 'air' | 'water' | 'subwater' | 'space' | 'hyperspace';

export interface FuelType {
    name: string;
    description: string;
    cost: number;
}


export const Electricity: FuelType = {
    name: 'electricity',
    description: 'requires battery to hold charge',
    cost: 0.01
};

export const Synthoil: FuelType = {
    name: 'synthoil',
    description: 'synthetic hydrocarbon based oil',
    cost: 20,
};

export const RocketFuel: FuelType = {
    name: 'rocket fuel',
    description: 'cryogenic methane and oxygen, stored in cryogenic tanks. 3.5:1 ratio methane:oxygen',
    cost: 40,
};

export const TritiumDeuterium: FuelType = {
    name: 'tritium deuterium',
    description: 'mixture of tritium and deuterium used to run micro fusion powerplants, 1 unit of this creates 10 million electricity units, tritium is radioactive',
    cost: 150000,
};

export const DeuteriumLithium: FuelType = {
    name: 'deuterium lithium',
    description: 'mixture of deuterium and lithium used to run small, medium and large fusion powerplants, 1 unit of this creates 20 million electricity units',
    cost: 30000,
}

export const HyperMatter: FuelType = {
    name: 'exotic hypermatter',
    description: 'a exotic matter which has strange properties like negative energy',
    cost: 2000000,
}

export interface Part {
    name: string;
    description: string;
    cost: number;
    weightKg: number;
}

export interface EnergyConverter {
    input: FuelType;
    output: FuelType;
    convertionRatio: number;
    convertionSpeed: number;
}

export interface Thruster {
    fuelUse: FuelType;
    fuelUnitsConsumeRate: number;
    impulseKn: number;
}

export const MicroFusionCell: Part & EnergyConverter = {
    name: 'Micro Fusion Cell',
    description: 'uses Tritium Deuterium fusion fuel, can generate up to 1 unity of electricity per second',
    cost: 500000,
    weightKg: 5000,
    input: TritiumDeuterium,
    output: Electricity,
    convertionRatio: 1 / 10000000,
    convertionSpeed: 1,
};

export const SmallFusionCell: Part & EnergyConverter = {
    name: 'Small Fusion Cell',
    description: 'uses Deuterium lithium fusion fuel, can generate up to 5 unity of electricity per second',
    cost: 1500000,
    weightKg: 15000,
    input: DeuteriumLithium,
    output: Electricity,
    convertionRatio: 1 / 100000000,
    convertionSpeed: 5,
};

export const MediumFusionCell: Part & EnergyConverter = {
    name: 'Medium Fusion Cell',
    description: 'uses Deuterium lithium fusion fuel, can generate up to 25 unity of electricity per second',
    cost: 5000000,
    weightKg: 50000,
    input: DeuteriumLithium,
    output: Electricity,
    convertionRatio: 1 / 100000000,
    convertionSpeed: 25,
};

export const LargeFusionCell: Part & EnergyConverter = {
    name: 'Large Fusion Cell',
    description: 'uses Deuterium lithium fusion fuel, can generate up to 300 unity of electricity per second',
    cost: 40000000,
    weightKg: 500000,
    input: DeuteriumLithium,
    output: Electricity,
    convertionRatio: 1 / 100000000,
    convertionSpeed: 300,
};

export const HugeFusionCell: Part & EnergyConverter = {
    name: 'Huge Fusion Cell',
    description: 'uses Deuterium lithium fusion fuel, can generate up to 3500 unity of electricity per second',
    cost: 400000000,
    weightKg: 5000000,
    input: DeuteriumLithium,
    output: Electricity,
    convertionRatio: 1 / 100000000,
    convertionSpeed: 3500,
};

export const FusionPowerPlant: Part & EnergyConverter = {
    name: 'Fusion Power Plant',
    description: 'uses Deuterium lithium fusion fuel, can generate up to 40000 unity of electricity per second',
    cost: 4000000000,
    weightKg: 50000000,
    input: DeuteriumLithium,
    output: Electricity,
    convertionRatio: 1 / 100000000,
    convertionSpeed: 40000,
};

export const ElectricMotor: Part & Thruster = {
    name: 'Electric Motor',
    description: 'Electric motor, converts electric units into mechanical movement',
    cost: 1000,
    weightKg: 1,
    fuelUse: Electricity,
    fuelUnitsConsumeRate: 1,
    impulseKn: 6.5,
};

export const ElectricPropeller: Part & Thruster = {
    name: 'Electric Propeller',
    description: 'Electric propeller, converts electric units into thrust',
    cost: 10000,
    weightKg: 10,
    fuelUse: Electricity,
    fuelUnitsConsumeRate: 9,
    impulseKn: 65
};

export const MicroFusionThruster: Part & Thruster = {
    name: 'Fusion Thruster',
    description: 'Taps into a fusion power cell to create propulsion',
    cost: 100000,
    weightKg: 100,
    fuelUse: TritiumDeuterium,
    fuelUnitsConsumeRate: 0.1,
    impulseKn: 114
};

export const FusionThruster: Part & Thruster = {
    name: 'Fusion Thruster',
    description: 'Taps into a fusion power cell to create propulsion',
    cost: 150000,
    weightKg: 1000,
    fuelUse: DeuteriumLithium,
    fuelUnitsConsumeRate: 1,
    impulseKn: 2280
};

export const Parts: Part[] = [
    MicroFusionCell, SmallFusionCell, MediumFusionCell, LargeFusionCell, HugeFusionCell, FusionPowerPlant,
    ElectricMotor
];



export const AllFuelTypes: FuelType[] = [
    Electricity, Synthoil, RocketFuel, TritiumDeuterium, DeuteriumLithium, HyperMatter
]

export interface FuelEngine extends FuelType {
    maxUnits?: number;
    maxUsage?: number;
}

export interface Vehicle {
    medium: Medium[];
    name: string;
    passengers: number;
    cargoKg: number;
    fuelType: FuelEngine[];
    parts: Part[];
    range: number;
    topSpeed: number;
    acceleration: number;
    cost: number;
    description: string;
}