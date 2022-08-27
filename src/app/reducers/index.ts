import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { environment } from "src/environments/environment";
import { boardsReducer } from "../modules/board/store/reducers/board.reducer";
import { storeFreeze } from 'ngrx-store-freeze';

export interface AppState {}

export const reducers: ActionReducerMap<AppState> = {
    boards: boardsReducer
}

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [storeFreeze] : []