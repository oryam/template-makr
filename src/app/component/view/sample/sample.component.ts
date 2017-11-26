import { Component, OnInit } from '@angular/core';

import { Sample } from '../../../domain/sample';
import { SampleService } from '../../../service/api/sample.service';


@Component( {
    selector: 'app-sample',
    templateUrl: './sample.component.html',
    styleUrls: ['./sample.component.scss']
} )
export class SampleComponent implements OnInit {

    samples: Sample[];

    constructor( private service: SampleService ) { }

    ngOnInit() {
        this.service.list().subscribe(( values: Sample[] ) => this.samples = values );
    }

}
