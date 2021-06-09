interface IActuator {
    name: string;
    description: string;
    things?: string[];
    weightGrams: number;
    value: number;
}

export const ActuatorOptions:IActuator[] = [
    {
        name: 'servo/stepper combination',
        description: 'combination of steppers and servos for fine motor control and speed',
        value: 4000,
        weightGrams: 4000,
    }, 
    {
        name: 'hydrolic booster',
        description: 'adds hydrolic pumps to increase pressure. combines with servos and steppers',
        value: 8000,
        weightGrams: 6000,
        things: ['+2 strength', '-1 agility']
    },
    {
        name: 'turbo booster',
        description: 'adds capacitors to overcharge servos and steppers, combined with hydrolics',
        value: 14000,
        weightGrams: 7000,
        things: ['+4 strength', '+2 agility', '-2 endurance']
    }
];