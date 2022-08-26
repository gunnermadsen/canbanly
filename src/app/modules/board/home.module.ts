import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CardComponent } from './components/card/card.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
    imports: [SharedModule],
    exports: [],
    declarations: [HomeComponent, CardComponent],
    providers: [],
})
export class HomeModule { }
