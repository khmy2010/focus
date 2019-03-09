import { NgModule } from "@angular/core";
import { SharedModule } from '../shared/shared.module';
import { TimeCountComponent } from './components/time-count/time-count.component';
import { TimeRoutingModule } from './time.routing.module';
// import { SharedModule } from '';
// import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        SharedModule,
        TimeRoutingModule
    ],
    declarations: [
        TimeCountComponent
    ],
    providers: [

    ]
})
export class TimeModule {

}