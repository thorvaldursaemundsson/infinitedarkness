export type HeavenlyBodyType = 'star' | 'planetoid' | 'belt' | 'ring';
export interface IHeavelyBody {
    dayPeriod: number;
    axialTilt:number;
    mass: number;
    age: number;
    name: string;
    description: string;
    parent?:IHeavelyBody;
    imageURL?: string;
    bodyType: HeavenlyBodyType;
}

export interface IStarSystem {
    stars: IStar[];
    roguePlanetoids: IPlanetoid[];
    name: string;
    description: string;
}

interface IStar extends IHeavelyBody {
    classification: 'A' | 'F' | 'G' | 'K' | 'M';
    planetoids: IPlanetoid[];
}

type DistanceType = 'km' | 'AU' | 'LY';
interface Distance {
    distance: number;
    unit: DistanceType;
}

export interface IPlanetoid extends IHeavelyBody {
    classification: string;
    surfaceGravity: number;
    temperatureRange: [number, number, number];
    atmosphere: string;
    atmosphericPressure: number;
    hydrosphere: string;
    satelites: IPlanetoid[];
    orbitDistance: Distance;
    feature?: string;
}