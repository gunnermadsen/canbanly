import { createReducer, on, Action } from '@ngrx/store';
import { BoardList } from '../../models/list';
import { createNewBoardAction } from '../actions/board.actions';

export interface BoardState {
    boards: BoardList[];
}

export const initialBoardState: BoardState = {
    boards: []
}

const reducer = createReducer(
    initialBoardState,
    on(createNewBoardAction, (state: BoardState, { boards }) => {
        return {
            ...state,
            ...boards
        };
    })
)

export function boardsReducer(state: BoardState | undefined, action: Action) {
    return reducer(state, action)
}
