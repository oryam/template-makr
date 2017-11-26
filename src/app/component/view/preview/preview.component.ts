import { Component, OnInit, ViewChild, ComponentFactoryResolver } from '@angular/core';

import { Page } from '../../../domain/page.model';
import { DataService } from '../../../service/data.service';
import { PageDirective } from '../../directive/page.directive';
import { Page1Component } from '../template/page1/page1.component';

@Component( {
    selector: 'app-preview',
    templateUrl: './preview.component.html',
    styleUrls: ['./preview.component.scss']
} )
export class PreviewComponent implements OnInit {


    @ViewChild( PageDirective ) appPage: PageDirective;

    page: Page;

    constructor(
        private componentFactoryResolver: ComponentFactoryResolver,
        private dataService: DataService,
    ) { }

    ngOnInit() {
        this.loadPage();
    }

    private loadPage() {
        this.page = this.mockPage();
        this.injectPageComponent( this.appPage, this.page );
    }

    private mockPage(): Page {
        return new Page(
            Page1Component,
            { label: 'page template 1', value: 'Hello World!' },
        );
    }

    private injectPageComponent( target: PageDirective, page: Page ) {

        let viewContainerRef = target.viewContainerRef;
        viewContainerRef.clear();

        let componentFactory = this.componentFactoryResolver.resolveComponentFactory( page.component );
        let componentRef = viewContainerRef.createComponent( componentFactory );
        ( <Page>componentRef.instance ).data = page.data;
    }

}
