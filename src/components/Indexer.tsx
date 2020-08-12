import React from 'react';

interface IIndexedProps {
    title: string;
    source?: string | undefined;
}

export const Indexed: React.FC<IIndexedProps> = ({ title, children, source }) => {
    return <>
        <h3><a className='notalink' href={'#' + title} id={title}>{title}</a> <a href={'#' + source}>^</a></h3>
        {children}
    </>;
}



interface IIndexerProps {
    title: string;
}

const Indexer: React.FC<IIndexerProps> = ({ children, title }) => {

    let index: string[] = [];
    const anyChildren: any = children;

    const indexedItems: JSX.Element[] = [];

    for (var child in anyChildren) {
        var x = anyChildren[child];
        if (x.props.title === undefined) {
        }
        else {
            indexedItems.push(<Indexed title={x.props.title} source={title}>{x.props.children}</Indexed>);
            index.push(x.props.title);
        }
    }

    return <>
        <h4><a className='notalink' href={'#' + title} id={title}>Table of contents </a></h4>
        {index.map(i => <h5> <a href={'#' + i}>{i}</a> </h5>)}
        <hr />
        {indexedItems.map(js => js)}
    </>;
}




export default Indexer;