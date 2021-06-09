interface IChassi {
    name: string;
    description: string;
    things?: string[];
    weightGrams: number;
    value: number;
}

export const ChassiOptions: IChassi[] = [
    {
        name: 'Civilian',
        description: 'lightweight chassi made of plastic and rubber. Can be made to look reasonably close to a person. Default for all robots.',
        weightGrams: 1000,
        value: 1000,
    },
    {
        name: 'Rogue',
        description: 'lightweight chassi made of hard plastic and plexiglas, offers small protection, allows non-fullplate armor plate integration',
        weightGrams: 1500,
        value: 4000,
        things: ['+1 damage absorbtion', '-2 all rolls used to hide']
    },
    {
        name: 'Tank',
        description: 'strong chassi made of carbon fiber, allows armor plate integration',
        weightGrams: 2500,
        value: 10000,
        things: ['+2 damage absorbtion', '-1 speed', '-3 all rolls used to hide']
    }
];
