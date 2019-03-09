import { Optional, SkipSelf, NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { Type } from '@angular/compiler';

const components: Array<any> = [
    LayoutComponent,
    HeaderComponent
];

@NgModule({
    declarations: [
        ...components
    ],
    exports: [
        ...components
    ],
    imports: [
        SharedModule
    ]
})
export class CoreModule {
    // making sure that core module is imported only once.
    constructor(@Optional() @SkipSelf() core: CoreModule) {
        if (core) {
        throw new Error(
            'CoreModule should only be instantiated ONCE, in AppModule.'
        );
        }
    }

    static forRoot() {
        return {
        ngModule: CoreModule,
        providers: []
        };
    }
}