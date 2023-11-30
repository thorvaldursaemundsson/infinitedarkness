import { ActionCardsProps } from "./ActionCard";


const DefaultActionCards: ActionCardsProps[] = [
    {
        name: 'grab object',
        actionPointUse: 3,
        description: 'grab object from ground or backpack'
    },
    {
        name: 'move',
        actionPointUse: 3,
        description: 'move equal to your movement speed, first 2 meters only use 1 action point per meter'
    },
];

export default DefaultActionCards;