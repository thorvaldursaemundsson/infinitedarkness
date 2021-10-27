import React from 'react';

interface IHexGridProps {
    gridHeight: number;
    gridWeidth: number;
    sideLength: number;
}

interface IHexGridState {
    thing: number;
}

export default class HexGrid extends React.Component<IHexGridProps, IHexGridState>{

    mount: HTMLCanvasElement | undefined | null;
    hexHeight: number;
    hexRadius: number;
    hexRectangleHeight: number;
    hexRectangleWidth: number;

    constructor(props: IHexGridProps) {
        super(props);
        this.state = {
            thing: 2
        };

        const hexagonAngle = 0.523598776; // 30 degrees in radians
        this.hexHeight = Math.sin(hexagonAngle) * this.props.sideLength;
        this.hexRadius = Math.cos(hexagonAngle) * this.props.sideLength;
        this.hexRectangleHeight = this.props.sideLength + 2 * this.hexHeight;
        this.hexRectangleWidth = 2 * this.hexRadius;
    }

    componentDidMount() {

    }

    drawHexagon(canvasContext: CanvasRenderingContext2D, x: number, y: number, fill: boolean, str: string = '') {
        canvasContext.beginPath();
        canvasContext.moveTo(x + this.hexRadius, y);
        canvasContext.lineTo(x + this.hexRectangleWidth, y + this.hexHeight);
        canvasContext.lineTo(x + this.hexRectangleWidth, y + this.hexHeight + this.props.sideLength);
        canvasContext.lineTo(x + this.hexRadius, y + this.hexRectangleHeight);
        canvasContext.lineTo(x, y + this.props.sideLength + this.hexHeight);
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
        return <div>
            <canvas height={this.props.gridHeight * this.hexRectangleHeight * 1.5} width={this.props.gridWeidth * this.hexRectangleWidth * 1.8} onContextMenu={(e) => e.preventDefault()} ref={ref => (this.mount = ref)}></canvas>
        </div>

    }
}