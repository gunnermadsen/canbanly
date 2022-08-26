import { ActionReducerMap } from "@ngrx/store";
import { boardsReducer } from "../modules/board/store/reducers/board.reducer";

export interface AppState {}

export const reducers: ActionReducerMap<AppState> = {
    boards: boardsReducer
}