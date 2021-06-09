interface IPowerCore {
    name: string;
    description: string;
    things?: string[];
    weightGrams: number;
    value: number;
}

export const PowerCores: IPowerCore[] = [
    {
        name: 'lithium ion battery',
        description: 'simple litium ion battery, lasts 7 days',
        weightGrams: 20000,
        value: 6000,
    },
    {
        name: 'gold nanotube battery',
        description: 'a reliable battery based on vertically stacked gold nanotubes, functions similar to a capacitor, lasts 14 days',
        weightGrams: 30000,
        value: 9000,
        things: ['+1 endurance', '+1 speed']
    },
    {
        name: 'bnc layered battery',
        description: 'layers of boron nitrate and graphene hold immense charge, functions more similar to a capacitor, lasts 30 days',
        weightGrams: 25000,
        value: 45000,
        things: ['+2 endurance', '+1 speed', '+2 on all rolls while fully charged']
    }
];