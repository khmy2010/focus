import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

const exportingComponents = [];
const exportingModules = [
    CommonModule,
    RouterModule
];

@NgModule({
    declarations: [...exportingComponents],
    imports: [
        ...exportingModules
    ],
    exports: [
        ...exportingModules
    ]
})
export class SharedModule {

}