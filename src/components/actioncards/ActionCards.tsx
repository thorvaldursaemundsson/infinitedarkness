import React from 'react';
import DefaultActionCards from './DefaultActionCards';
import ActionCard from './ActionCard';
import Section from '../Section';

const ActionCards = () => {
    const emptyFlexboxes = (3 - DefaultActionCards.length % 3) + 3;
    return <Section title='Action Cards'>
        <div className='actioncards'>
            {DefaultActionCards.map((ac, index, array) => <ActionCard key={`pm_acs_${index}`}
                actionPointUse={ac.actionPointUse}
                name={ac.name}
                description={ac.description}
            ></ActionCard>)}
            {[...new Array(emptyFlexboxes)].map((v, i, a) => <ActionCard
                key={`pm_acs_blank_${i}`}
                description=''
                actionPointUse={undefined}
                name=''
            ></ActionCard>)}
        </div></Section>;

}

export default ActionCards;