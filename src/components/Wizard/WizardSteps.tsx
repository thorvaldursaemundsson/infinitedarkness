import { Character } from "./../Character";

export default interface IStepProps {
    callback: (n: number, c: Character) => void;
    character: Character;
    currentNumber: number;
}