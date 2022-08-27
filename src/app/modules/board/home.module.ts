import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from 'src/app/shared/shared.module';
import { CardComponent } from './components/card/card.component';
import { HomeComponent } from './components/home/home.component';
import { boardsReducer } from './store/reducers/board.reducer';

@NgModule({
    imports: [
        StoreModule.forFeature('boards', boardsReducer),
        SharedModule
    ],
    exports: [],
    declarations: [HomeComponent, CardComponent],
    providers: [],
})
export class HomeModule { }
