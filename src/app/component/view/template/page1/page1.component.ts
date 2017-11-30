import { Component, OnInit } from '@angular/core';

import { ICommonSection, Page } from '../../../../domain/page.model';


@Component( {
    selector: 'app-page1',
    templateUrl: './page1.component.html',
    styleUrls: ['./page1.component.scss']
} )
export class Page1Component implements OnInit {

    protected _page: Page;
    header: ICommonSection;
    footer: ICommonSection;
    main: ICommonSection;


    constructor() { }

    ngOnInit() {
    }

    set page( page: Page ) {
        this._page = page;
        this.header = page.section.findChild( 'header' );
        this.footer = page.section.findChild( 'footer' );
        this.main = page.section.findChild( 'main' );
    }

    get page() { return this._page; }

}
