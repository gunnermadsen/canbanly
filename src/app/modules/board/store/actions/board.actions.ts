import { createAction, props } from '@ngrx/store';
import { BoardList } from '../../models/list';

export const createNewBoardAction = createAction('[Counter Component] Increment', props<{ boards: BoardList[] }>());