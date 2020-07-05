import React from 'react';

interface IIndexedProps {
    title: string;
    source?: string | undefined;
}

export const Indexed: React.FC<IIndexedProps> = ({ title, children, source }) => {
    return <>
        <h3>{title} <a id={title}></a> <a href={'#' + source}>^</a></h3>
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

    console.log({ children });
    for (var child in anyChildren) {
        var x = anyChildren[child];
        if (x.props.title === undefined) {
            console.log("Child is not Indexed, it is: ", { x });
        }
        else {
            indexedItems.push(<Indexed title={x.props.title} source={title}>{x.props.children}</Indexed>);
            index.push(x.props.title);
            console.log("data", { x });
        }
    }

    return <>
        <h4>Table of contents<a id={title}></a></h4>
        {index.map(i => <h5> <a href={'#' + i}>{i}</a>  </h5>)}
        <hr />
        {indexedItems.map(js=>js)}
    </>;
}




export default Indexer;