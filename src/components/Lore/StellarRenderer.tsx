import React from 'react';
import ThreeRenderer, { IStellarRendererProps } from './ThreeRenderer';
import Section from '../playermanual/Section';


const StellarRenderer: React.FC<IStellarRendererProps> = (props) => {
    return (<Section title='view'>
        <ThreeRenderer {...props}></ThreeRenderer>
    </Section>);
}

export default StellarRenderer;