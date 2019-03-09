import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { TimeCountComponent } from './components/time-count/time-count.component';

export const routes: Routes = [
    { path: '', component: TimeCountComponent }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TimeRoutingModule {

}