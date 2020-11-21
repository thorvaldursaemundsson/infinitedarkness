import React, { CSSProperties, useState } from 'react';

interface IHex {
    x: number;
    y: number;
    z: number;
}

interface IBattlemapState {
    outputData: string;
    currentIcons: Icon[];
    currentIconsTurns: Icon | undefined;
    hexes: IHex[]
}

interface IBattlemapWrapperState extends IBattlemapState {
    isVisible: boolean;
    currentEdit: Icon | undefined;
}

interface IBattlematProps {
    boardHeight: number;
    boardWidth: number;
    initialIcons: Icon[];
}

interface Icon {
    symbol: string;
    startX: number;
    startY: number;
    id: string;
    sequence: number;
    speed: number;
}


export const Battlemap: React.FC<IBattlematProps> = (props) => {
    return <>

        <Hexmat boardHeight={props.boardHeight} boardWidth={props.boardWidth} initialIcons={props.initialIcons} ></Hexmat>
    </>;
}

interface ISequencerProps {
    icons: Icon[];
    onNext: (next: Icon) => void;
}

const Sequencer: React.FC<ISequencerProps> = ({ icons, onNext }) => {
    const [currentRound, setCurrentRound] = useState(0);
    const [currentSequence, setCurrentSequence] = useState(0);
    const iconsBySequence = icons.sort((a, b) => b.sequence - a.sequence);
    const maxSequence = icons.length >= 1 ? iconsBySequence[0].sequence : 0;
    const nextRound = currentRound + 1;

    const nextRoundAt = (roundNumber: number) => {
        setCurrentSequence(maxSequence);
        setCurrentRound(roundNumber);
        if (iconsBySequence.length > 0) {
            onNext(iconsBySequence[0]);
        }
    };

    const next = () => {
        const remainingIcons = iconsBySequence.filter(i => i.sequence < currentSequence);
        if (remainingIcons.length > 0) {
            setCurrentSequence(remainingIcons[0].sequence);
            onNext(remainingIcons[0]);
        }
        else {
            nextRoundAt(currentRound + 1);
        }
    };

    return <>
        <button onClick={() => nextRoundAt(1)}>Begin/restart</button>
        <h5>Round {currentRound}</h5>
        <ul>
            {iconsBySequence.filter(i => i.sequence <= currentSequence).map(i => {
                return <li key={`bmsqeuencer_${i.id}`}>{i.symbol} ({i.sequence})
                {i.sequence === currentSequence ? <button onClick={() => next()}>Done</button> : null}
                </li>
            })}
        </ul>
        <h5>Round {nextRound}</h5>
        <ul>
            {iconsBySequence.filter(i => i.sequence > currentSequence).map(i => {
                return <li key={`bmsqeuencer_${i.id}`}>{i.symbol} ({i.sequence})</li>
            })}
        </ul>
    </>;
}


interface IconEditorProps {
    icon: Icon;
    onChange: (i: Icon) => void;
}
const inputCss: CSSProperties = {
    width: '60px'
};
const IconEditor: React.FC<IconEditorProps> = ({ icon, onChange }) => {
    const [symbol, setSymbol] = useState(icon.symbol);
    const [speed, setSpeed] = useState(icon.speed);
    const [sequence, setSequence] = useState(icon.sequence);
    return <>
        Symbol: <input type='text' style={inputCss} value={symbol} onChange={(e) => setSymbol(e.target.value)} /><br />
        Speed: <input type='text' style={inputCss} value={speed} onChange={(e) => setSpeed(parseInt(e.target.value))} /><br />
        Sequence: <input type='text' style={inputCss} value={sequence} onChange={(e) => setSequence(parseInt(e.target.value))} /><br />
        <button onClick={() => onChange({ ...icon, symbol: symbol, speed: speed, sequence: sequence })}>Save</button>

    </>;
}

export class Hexmat extends React.Component<IBattlematProps, IBattlemapState> {

    mount: HTMLCanvasElement | undefined | null;
    hexagonAngle: number = 0;
    sideLength: number = 25;
    hexHeight: number = 0;
    hexRadius: number = 0;
    hexRectangleHeight: number = 0;
    hexRectangleWidth: number = 0;


    constructor(props: Readonly<IBattlematProps>) {
        super(props);
        this.state = {
            outputData: ':)',
            currentIcons: props.initialIcons,
            currentIconsTurns: undefined,
            hexes: []
        };
    }

    componentDidMount() {

        this.initializeBoard();

        var canvas = this.mount;
        if (canvas !== null && canvas !== undefined) {
            let hasmoved = false;
            let mouseStartX = 0;
            let mouseStartY = 0;
            let mouseEndX = 0;
            let mouseEndY = 0;
            let iconAtHex: Icon | undefined;
            canvas.addEventListener("mousemove", (mouseEvent) => {
                var canvas = this.mount;
                if (canvas !== null && canvas !== undefined) {
                    const rect = canvas.getBoundingClientRect();
                    const x = mouseEvent.clientX - rect.left;
                    const y = mouseEvent.clientY - rect.top;
                    mouseEndX = Math.floor(y / (this.hexHeight + this.sideLength));
                    mouseEndY = Math.floor((x - (mouseEndX % 2) * this.hexRadius) / this.hexRectangleWidth);

                    const screenX = mouseEndY * this.hexRectangleWidth + ((mouseEndX % 2) * this.hexRadius);
                    const screenY = mouseEndX * (this.hexHeight + this.sideLength);

                    var ctx = canvas.getContext('2d');
                    if (ctx === null) return;
                    ctx.clearRect(0, 0, this.props.boardWidth * 2 * this.sideLength, this.props.boardHeight * 2 * this.sideLength);


                    ctx.fillStyle = "#000000";
                    ctx.strokeStyle = "#666666";
                    ctx.lineWidth = 1;
                    this.drawBoard(ctx, this.props.boardWidth, this.props.boardHeight);

                    if (mouseEndX >= 0 && mouseEndX < this.props.boardWidth && mouseEndY >= 0 && mouseEndY < this.props.boardHeight && ctx !== undefined) {
                        ctx.strokeStyle = "#FF0000";
                        ctx.lineWidth = 3;
                        this.drawHexagon(ctx, screenX, screenY, false);
                        ctx.strokeStyle = "#666666";
                        ctx.lineWidth = 1;
                    }
                    if (iconAtHex !== undefined && ctx !== undefined) {
                        for (var xR = 0; xR < this.props.boardWidth; ++xR) {
                            for (var yR = 0; yR < this.props.boardHeight; ++yR) {
                                if (this.distanceBetweenPositions(xR, yR, iconAtHex.startX, iconAtHex.startY) <= iconAtHex.speed) {
                                    ctx.fillStyle = "#9999FF";
                                    this.drawHexagon(
                                        ctx,
                                        xR * this.hexRectangleWidth + ((yR % 2) * this.hexRadius),
                                        yR * (this.sideLength + this.hexHeight),
                                        true//, `${x};${y}`
                                    );
                                }
                            }
                        }
                    }
                    this.drawIconsOnBoard(ctx);
                    hasmoved = true;
                }
            });

            canvas.addEventListener("mousedown", (mouseEvent) => {
                hasmoved = false;
                if (canvas !== null && canvas !== undefined) {
                    const rect = canvas.getBoundingClientRect();
                    const x = mouseEvent.clientX - rect.left;
                    const y = mouseEvent.clientY - rect.top;
                    mouseStartY = Math.floor(y / (this.hexHeight + this.sideLength));
                    mouseStartX = Math.floor((x - (mouseStartY % 2) * this.hexRadius) / this.hexRectangleWidth);
                    iconAtHex = this.findIconAtHex(mouseStartX, mouseStartY);
                }
            });
            canvas.addEventListener("mouseup", () => {
                if (iconAtHex !== undefined && hasmoved === true) {
                    let icons = this.state.currentIcons;
                    for (var index in icons) {
                        var ic = icons[index];
                        if (ic.id === iconAtHex.id) {
                            ic.startY = mouseEndX;
                            ic.startX = mouseEndY;
                            break;
                        }
                    }
                    this.setState({ currentIcons: icons });
                    this.initializeBoard();
                }

                iconAtHex = undefined;
                hasmoved = false;
            });
            canvas.addEventListener("mouseleave", () => {
                iconAtHex = undefined;
            });
        }
    }

    distanceBetweenPositions(x1: number, y1: number, x2: number, y2: number) {
        const dx = Math.abs(x1 - x2);
        const dy = Math.abs(y1 - y2);
        if (dy === 0) return dx;
        if (dy === 1) return dx + 1 - (dy % 2);
        //const dz = (dx + Math.floor(dy * 0.5 + .5));
        const z1 = 0 - (x1 + Math.floor(y1 * 0.5 + .5));
        const z2 = 0 - (x2 + Math.floor(y2 * 0.5 + .5));
        const dz = Math.abs(z1 - z2);

        return dx + Math.max(dy, dz);
    }

    getIconPosition(icon: Icon) {
        var x = this.hexRadius * 2 * (icon.startX + .25) + (icon.startY % 2 * this.hexRectangleWidth / 2);
        var y = this.hexRectangleHeight * 0.75 * (icon.startY + 0) + this.hexRectangleHeight / 2;

        return { x: x, y: y };
    }
    componentDidUpdate() {
        if (this.props.initialIcons.length !== this.state.currentIcons.length)
            this.setState({ currentIcons: this.props.initialIcons });
        const canvas = this.mount;
        if (canvas === null || canvas === undefined) {
            return;
        }
        var ctx = canvas.getContext('2d');
        if (ctx === null) return;
        this.initializeBoard();
    }

    initializeBoard() {
        this.setVariables();
        const canvas = this.mount;
        if (canvas === null || canvas === undefined) {
            return;
        }
        var ctx = canvas.getContext('2d');
        if (ctx === null) return;
        ctx.clearRect(0, 0, this.props.boardWidth * 2 * this.sideLength, this.props.boardHeight * 2 * this.sideLength);


        ctx.fillStyle = "#000000";
        ctx.strokeStyle = "#666666";
        ctx.lineWidth = 1;
        this.drawBoard(ctx, this.props.boardWidth, this.props.boardHeight);
        this.drawIconsOnBoard(ctx);
        return ctx;
    }
    findIconAtHex(x: number, y: number): Icon | undefined {
        for (var index in this.state.currentIcons) {
            var icon = this.state.currentIcons[index];
            var ix = icon.startX;
            var iy = icon.startY;
            if (x === ix && y === iy) return icon;
        }
        return undefined;
    }

    setVariables() {
        this.hexagonAngle = 0.523598776; // 30 degrees in radians
        this.hexHeight = Math.sin(this.hexagonAngle) * this.sideLength;
        this.hexRadius = Math.cos(this.hexagonAngle) * this.sideLength;
        this.hexRectangleHeight = this.sideLength + 2 * this.hexHeight;
        this.hexRectangleWidth = 2 * this.hexRadius;
    }

    drawIconsOnBoard(canvasContext: CanvasRenderingContext2D) {
        for (var index in this.state.currentIcons) {
            var icon = this.state.currentIcons[index];

            const { x, y } = this.getIconPosition(icon);

            if (this.state.currentIconsTurns === undefined) {
            }
            else if (icon.id === this.state.currentIconsTurns.id) {
                canvasContext.fillStyle = 'red';
                this.drawHexagon(canvasContext,
                    icon.startX * this.hexRectangleWidth + ((icon.startY % 2) * this.hexRadius),
                    icon.startY * (this.sideLength + this.hexHeight),
                    true);
            }

            canvasContext.font = "11px arial";
            canvasContext.fillStyle = "black";
            canvasContext.fillText(`${icon.symbol}`, x, y);

        }
    }

    convertXyToXYZ(x: number, y: number): string {
        return `${x};${y};${0 - (x + Math.floor(y * 0.5 + .5))}`;
    }

    drawBoard(ctx: CanvasRenderingContext2D, width: number, height: number) {

        const hexes: IHex[] = [];

        for (var x = 0; x < width; ++x) {
            for (var y = 0; y < height; ++y) {
                hexes.push({ x: x, y: y, z: 1 - (x + y) });
                this.drawHexagon(
                    ctx,
                    x * this.hexRectangleWidth + ((y % 2) * this.hexRadius),
                    y * (this.sideLength + this.hexHeight),
                    false, this.convertXyToXYZ(x, y)
                );
            }
        }
    }

    drawHexagon(canvasContext: CanvasRenderingContext2D, x: number, y: number, fill: boolean, str: string = '') {
        canvasContext.beginPath();
        canvasContext.moveTo(x + this.hexRadius, y);
        canvasContext.lineTo(x + this.hexRectangleWidth, y + this.hexHeight);
        canvasContext.lineTo(x + this.hexRectangleWidth, y + this.hexHeight + this.sideLength);
        canvasContext.lineTo(x + this.hexRadius, y + this.hexRectangleHeight);
        canvasContext.lineTo(x, y + this.sideLength + this.hexHeight);
        canvasContext.lineTo(x, y + this.hexHeight);
        canvasContext.closePath();

        if (str !== '') {
            canvasContext.fillStyle = '#CCCCCC';
            canvasContext.fillText(str, x + this.hexRadius / 2, y + this.hexRadius * 1.5);
        }
        if (fill) {
            canvasContext.fill();
        }
        canvasContext.stroke();
    }

    render() {
        return <table ><tbody>
            <tr><td>
                <div style={{ background: 'white', width: '650px', height: '600px', overflow: 'scroll' }}>
                    <canvas height={this.props.boardHeight * this.sideLength * 1.5} width={this.props.boardWidth * this.sideLength * 1.8} onContextMenu={(e) => e.preventDefault()} ref={ref => (this.mount = ref)}></canvas>
                </div></td>
                <td>
                    <Sequencer icons={this.props.initialIcons} onNext={(n) => { this.forceUpdate(); this.setState({ currentIconsTurns: n }); }} />
                </td>
            </tr></tbody></table>;
    }
}