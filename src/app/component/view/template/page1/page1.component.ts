import { Component, OnInit } from '@angular/core';

import { ICommonSection } from "../../../../domain/page.model";


@Component( {
    selector: 'app-page1',
    templateUrl: './page1.component.html',
    styleUrls: ['./page1.component.scss']
} )
export class Page1Component implements OnInit {

    protected _data: ICommonSection;
    header: ICommonSection;
    footer: ICommonSection;
    main: ICommonSection;


    constructor() { }

    ngOnInit() {
    }

    set data( value: ICommonSection ) {
        this._data = value;
        this.header = value.findChild( 'header' );
        this.footer = value.findChild( 'footer' );
        this.main = value.findChild( 'main' );
    }

    get data() { return this._data; }

}
