import React from 'react';
import Section from './Section';


const BackgroundTemplates: React.FC = () => {
    return <Section title='Background Templates'>
        <p>This deals with making a character.</p>
    </Section>;
}

interface ITemplate {
    name: string;
    skillOptions: string[];
}

const Starborn: ITemplate = {
    name: 'starborn',
    skillOptions: ['acrobatics', 'computer', 'electronics', 'general knowledge', 'mechanics', 'pilot', 'science']
};

const Schooled: ITemplate = {
    name: 'schooled',
    skillOptions: ['athletics', 'computer', 'cooking', 'empathy', 'general knowledge', 'science', 'streetwise', 'survival']
};

const Homeschooled: ITemplate = {
    name: 'homeschooled',
    skillOptions: ['athletics', 'acrobatics', 'cooking', 'investigation', 'science', 'streetwise', 'survival']
};

const Orphan: ITemplate = {
    name: 'orphan',
    skillOptions: ['athletics', 'combat', 'cooking', 'empathy', 'intimidation', 'larceny', 'stealth', 'survial']
};

const Savage: ITemplate = {
    name: 'savage',
    skillOptions: ['athletics', 'acrobatics', 'cooking', 'empathy', 'stealth', 'survival']
}

const TemplatesFirst = [Starborn,Schooled,Homeschooled,Orphan,Savage];

export default BackgroundTemplates;