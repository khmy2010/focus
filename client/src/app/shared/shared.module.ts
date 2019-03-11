import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

const exportingComponents = [];
const exportingModules = [
    CommonModule,
    HttpClientModule,
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