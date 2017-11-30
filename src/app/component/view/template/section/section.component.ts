import { Component, OnInit, Input } from '@angular/core';
import { ICommonSection } from "../../../../domain/page.model";


@Component( {
    selector: 'app-section',
    templateUrl: './section.component.html',
    styleUrls: ['./section.component.scss']
} )
export class SectionComponent implements OnInit {

    @Input() section: ICommonSection;

    constructor() { }

    ngOnInit() {
    }

}
