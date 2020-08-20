
export type Medium = 'land' | 'air' | 'water' | 'subwater' | 'space' | 'hyperspace';

export interface FuelType {
    name:string;
    description:string;
    cost:number;
}

export interface Part {
    name:string;
    description:string;
    cost:number;
    weight:number;
}

export const Electricity:FuelType = {
    name: 'electricity',
    description: 'requires battery to hold charge',
    cost: 0.01
};

export const Synthoil:FuelType = {
    name: 'synthoil',
    description: 'synthetic hydrocarbon based oil',
    cost: 20,
};

export const RocketFuel:FuelType = {
    name: 'rocket fuel',
    description: 'cryogenic methane and oxygen, stored in cryogenic tanks. 3.5:1 ratio methane:oxygen',
    cost: 40,
};

export const TritiumDeuterium:FuelType = {
    name: 'tritium deuterium',
    description: 'mixture of tritium and deuterium used to run micro fusion powerplants, 1 unit of this creates 10 million electricity units, tritium is radioactive',
    cost: 150000,
};

export const DeuteriumLithium:FuelType = {
    name: 'deuterium lithium',
    description: 'mixture of deuterium and lithium used to run small, medium and large fusion powerplants, 1 unit of this creates 20 million electricity units',
    cost: 30000,
}

export const HyperMatter:FuelType = {
    name: 'exotic hypermatter',
    description: 'a exotic matter which has strange properties like negative energy',
    cost: 2000000,
}

export const AllFuelTypes:FuelType[] =  [
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
    range: number;
    topSpeed: number;
    acceleration: number;
    cost: number;
    description: string;
}