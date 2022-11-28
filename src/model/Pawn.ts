export class pawn {
    position: number; //Current Position
    isPlayer: boolean; //Who owns it

    constructor(position: number, isPlayer: boolean){
        this.position = position;
        this.isPlayer = isPlayer;
    }
}