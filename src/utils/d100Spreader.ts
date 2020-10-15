interface ISpread{
    low:number;
    high:number;
    index:number;
    text:string;
}

const d100Spreader = (items:string[]):ISpread[] => {
    const spread = Math.floor(100/items.length);

    return [...Array(items.length)].map((v,i) => {
        return {
            high: spread + spread * i,
            low: spread * i + 1,
            index: i,
            text: items[i],
        };
    });

}



export default d100Spreader;