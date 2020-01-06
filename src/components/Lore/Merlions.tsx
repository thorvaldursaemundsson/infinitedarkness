import { useState, useEffect } from "react";
import React from "react";
import { Button } from "@material-ui/core";

const Merlions: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [merlionText, setMerlionText] = useState('');



    useEffect(() => {
        console.log('Merlions useEffect', { open });
        if (open === true) {
            fetch('merlions')
                .then(response => response.text() as Promise<string>)
                .then(text => setMerlionText(text));
        }
    }, [open]);
    if (!open)
        return <Button onClick={() => setOpen(true)}>View Merlions</Button>
    return <>
        <Button onClick={() => setOpen(false)}>X</Button>
        <h2>Merlions</h2>
        <p>{merlionText}</p>
    </>
}

export default Merlions;