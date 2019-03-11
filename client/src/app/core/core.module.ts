import { Optional, SkipSelf, NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FireService } from './services/fire.service';
import { AuthModule } from '../auth/auth.module';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';

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
        BrowserModule,
        SharedModule
    ],
    providers: [
        FireService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true
        }
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