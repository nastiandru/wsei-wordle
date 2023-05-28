import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {LetterState} from "../components/LetterState";
import {LetterStatus} from "../components/LetterStatus";

interface GameState {
    hiddenWord: string,
    board: LetterState[][],
    rowIndex: number,
    columnIndex: number,
    isWon: boolean
}

const initialState: GameState = {
    hiddenWord: "NIGHT",
    board: initializeBoard(5, 6),
    rowIndex: 0,
    columnIndex: 0,
    isWon: false
}

function initializeBoard(columns: number, rows: number): LetterState[][] {
    return Array.from({ length: rows },
        () => Array.from({ length: columns }, () => {
            return { letter: '', status: LetterStatus.DEFAULT }
        })
    );
}

function getWordFromRow(board: LetterState[][], rowIndex: number): string {
    return board[rowIndex].map((value: LetterState) => value.letter).join('');
}

const gameSlice = createSlice({
    name: "game",
    initialState,
    reducers: {
        addLetter(state, action: PayloadAction<string>): void {
            if(state.columnIndex < 5 && !state.isWon) {
                state.board[state.rowIndex][state.columnIndex].letter = action.payload
                state.columnIndex++
            }
        },
        deleteLetter(state): void {
            if(state.columnIndex > 0 && !state.isWon) {
                state.board[state.rowIndex][state.columnIndex - 1].letter = ''
                state.columnIndex--
            }
        },
        submitWord(state): void {
            if(state.columnIndex < 5) {
                alert('Too small word')
                return
            }

            for(let i: number = 0; i < 5; i++) {
                if(state.hiddenWord.includes(state.board[state.rowIndex][i].letter)) {
                    if(state.hiddenWord.indexOf(state.board[state.rowIndex][i].letter) == i) {
                        state.board[state.rowIndex][i].status = LetterStatus.CORRECT
                    } else {
                        state.board[state.rowIndex][i].status = LetterStatus.PRESENT
                    }
                } else {
                    state.board[state.rowIndex][i].status = LetterStatus.ABSENT
                }
            }

            if(getWordFromRow(state.board, state.rowIndex) === state.hiddenWord) {
                state.isWon = true
                alert('You won!')
                return;
            }

            if(state.rowIndex < 5) {
                state.rowIndex++
                state.columnIndex = 0;
            }
            else {
                alert("You lost. Correct word is " + state.hiddenWord)
            }
        }
    }
})

export const {
    addLetter,
    deleteLetter,
    submitWord
} = gameSlice.actions

export default gameSlice.reducer