import { Unit, UnitType, UnitTeam } from "./Unit";

class VerifyMove {
    private Pawn(pos: {y: number, x: number}, des: {y: number, x: number}, board: Unit[][]): boolean {
        let possibleMoves: {y: number, x: number}[] = [];

        if(pos.y == 6 && board[pos.y - 2][pos.x].type == UnitType.None) possibleMoves.push({ y: pos.y - 2, x: pos.x });

        if(pos.y > 0 && board[pos.y - 1][pos.x].type == UnitType.None) possibleMoves.push({ y: pos.y - 1, x: pos.x });

        

        return true;
    }
}