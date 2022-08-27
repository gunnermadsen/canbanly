import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { metaReducers, reducers } from '../reducers/index';
import { environment } from '../../environments/environment'

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forRoot(reducers, { metaReducers }),
        !environment.production ? StoreDevtoolsModule.instrument() : []
    ],
    providers: [
        
    ]
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        // if the module is declared
        if (parentModule) {
            throw new Error(`${parentModule} has already been loaded. Import Core modules in the AppModule only.`)
        }
    }

    public static forRoot(): ModuleWithProviders<CoreModule> {
        return {
            ngModule: CoreModule,
            providers: []
        }
    }
    public static forChild(): ModuleWithProviders<CoreModule> {
        return {
            ngModule: CoreModule,
            providers: []
        }
    }
}