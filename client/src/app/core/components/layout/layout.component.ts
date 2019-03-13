import { Component, OnInit } from '@angular/core';
import { FireService } from '../../services/fire.service';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-layout', 
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit{
    constructor(private fireService: FireService) {

    }

    ngOnInit() {
        this.fireService.init();
    }
}