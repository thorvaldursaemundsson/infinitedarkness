
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
    /**
     * one if not defined
     */
    quantity?:number|undefined;
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

export interface PassengerSection {
    passengerCount: number;
    cargoPerPerson: number;
    isEnclosed: boolean;
    isLivingSpace: boolean;
    meterSquarePerPerson: number;
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
    weightKg: 1000,
    fuelUse: TritiumDeuterium,
    fuelUnitsConsumeRate: 1,
    impulseKn: 1140
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

export const InternalCombusionEngine: Part & Thruster = {
    name: 'Internal Combusion Engine',
    description: 'Converts synthoil units into mechanical movement',
    cost: 900,
    weightKg: 1,
    fuelUse: Synthoil,
    fuelUnitsConsumeRate: 1,
    impulseKn: 6.5,
};

export const JetEngine: Part & Thruster = {
    name: 'Jet Engine',
    description: 'Converts synthoil units into air propulsion',
    cost: 2000,
    weightKg: 2,
    fuelUse: Synthoil,
    fuelUnitsConsumeRate: 1,
    impulseKn: 10,
};

export const RocketEngine: Part & Thruster = {
    name: 'Rocket Engine',
    description: 'Converts rocket fuel units into propulsion',
    cost: 5000,
    weightKg: 2,
    fuelUse: RocketFuel,
    fuelUnitsConsumeRate: 5,
    impulseKn: 500,
};

export const SmallHabitatSection: Part & PassengerSection = {
    name: 'Small habitat section',
    description: 'Can house 3 people, includes base amenities and storage, radiation shielding, airtight. 7 meter radius 2.5 meter tall cylinder',
    cost: 7000,
    weightKg: 7000,
    passengerCount: 3,
    cargoPerPerson: 10,
    isEnclosed: true,
    isLivingSpace: true,
    meterSquarePerPerson: 30,
};

export const MediumHabitatSection: Part & PassengerSection = {
    name: 'Small habitat section',
    description: 'Can house 9 people, includes base amenities and storage, radiation shielding, airtight. 19 meter radius 2.5 meter tall cylinder',
    cost: 19000,
    weightKg: 19000,
    passengerCount: 9,
    cargoPerPerson: 10,
    isEnclosed: true,
    isLivingSpace: true,
    meterSquarePerPerson: 30,
};

export const LargeHabitatSection: Part & PassengerSection = {
    name: 'Small habitat section',
    description: 'Can house 31 people, includes base amenities and storage, radiation shielding, airtight. 30 meter radius 2.5 meter tall cylinder',
    cost: 30000,
    weightKg: 30000,
    passengerCount: 31,
    cargoPerPerson: 10,
    isEnclosed: true,
    isLivingSpace: true,
    meterSquarePerPerson: 30,
};

export const HugeHabitatSection: Part & PassengerSection = {
    name: 'Small habitat section',
    description: 'Can house 31 people, includes base amenities and storage, radiation shielding, airtight. 61 meter radius 2.5 meter tall cylinder',
    cost: 30000,
    weightKg: 30000,
    passengerCount: 97,
    cargoPerPerson: 15,
    isEnclosed: true,
    isLivingSpace: true,
    meterSquarePerPerson: 40,
};



export const Parts: Part[] = [
    MicroFusionCell, SmallFusionCell, MediumFusionCell, LargeFusionCell, HugeFusionCell, FusionPowerPlant,
    ElectricMotor, ElectricPropeller, MicroFusionThruster, FusionThruster, InternalCombusionEngine, JetEngine, RocketEngine
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
    /** passenger/crew stations and life support */
    passengers: number;
    /** total carry weight mass */
    cargoKg: number;
    fuelType: FuelEngine[];
    parts: Part[];
    range: number;
    /**
     * meters per second
     */
    topSpeed: number;
    /** meters per second per second */
    acceleration: number;
    cost: number;
    description: string;
}



export interface IRollAmount {
    numberOf1d100:number;
    sidesPerDice:number;
    text:string;
}

export interface IDamageAmount {
    damageAmountNumber:number;
    damageText: string,
}