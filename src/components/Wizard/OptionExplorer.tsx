import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { dispatcher } from "../useCharacter";

export interface IOption {
    key: string;
    value: IOption[];
    dispatch: dispatcher;
}

interface IOptionsExplorer {
    tree: IOption;
    dispatchCallback: (d: dispatcher) => void;
    parentCallback: () => void;
    hideButton:boolean;
}

export const OptionsExplorer: React.FC<IOptionsExplorer> = ({ tree, dispatchCallback, parentCallback, hideButton }) => {
    const [hasAnswered, setHasAnswered] = useState(false);
    const [parentHasAnswered, setParentHasAnswered] = useState(false);
    if (!hasAnswered && hideButton === false) return <Button variant='outlined'  onClick={() => { dispatchCallback(tree.dispatch); setHasAnswered(true); parentCallback(); }}>{tree.key}</Button>;
    return (<>
        {hideButton && tree.key + '->'}
        {tree.value.map(v => {
                return (<OptionsExplorer hideButton={parentHasAnswered} parentCallback={() => setParentHasAnswered(true)} tree={v} dispatchCallback={dispatchCallback} ></OptionsExplorer>);
            })}
    </>);
}