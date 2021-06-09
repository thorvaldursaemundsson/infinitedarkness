interface ISensor {
    name: string;
    description: string;
    things?: string[];
    weightGrams: number;
    value: number;
}

export const SensorOptions:ISensor[] = [

];