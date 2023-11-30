import React from 'react';
import './actioncards.css';

export interface ActionCardsProps {
    actionPointUse?: number;
    name?: string;
    description?: string;
}

const ActionCard: React.FC<ActionCardsProps> = ({ name, actionPointUse, description }) => {
    return <div className='actioncard'>
        <h5>{name !== undefined ? name :  ' '}</h5>
        <p><b>Roll bonus</b>: </p>
        <p><b>Action Points</b>: {actionPointUse}</p>
        <p><i>{description}</i></p>
    </div>;

}

export default ActionCard;