interface ISpreaderTemplateInput<T> {
    label:string;
    value:T;
}

interface ISpreader<T> {
    low:number;
    high:number;
    index:number;
    text:string;
    value:T;
}

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

export function d100SpreaderT<T>(items:ISpreaderTemplateInput<T>[]):ISpreader<T>[] {
    const spread = Math.floor(100/items.length);
    return [...Array(items.length)].map((v,i) => {
        return {
            high: spread + spread * i,
            low: spread * i + 1,
            index: i,
            text: items[i].label,
            value: items[i].value
        };
    });
}



export default d100Spreader;