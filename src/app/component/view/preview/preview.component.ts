import { Component, OnInit, ViewChild, ComponentFactoryResolver } from '@angular/core';

import { Page, Section, ICommonSection } from '../../../domain/page.model';
import { PageService } from '../../../service/api/page.service';
import { PageDirective } from '../../directive/page.directive';
import { Page1Component } from '../template/page1/page1.component';
import { PageRenderer, PageComponent } from '../../model/component.model';


@Component( {
    selector: 'app-preview',
    templateUrl: './preview.component.html',
    styleUrls: ['./preview.component.scss']
} )
export class PreviewComponent implements OnInit {


    @ViewChild( PageDirective ) appPage: PageDirective;

    page: PageRenderer;

    constructor(
        private componentFactoryResolver: ComponentFactoryResolver,
        private pageService: PageService,
    ) { }

    ngOnInit() {
        this.loadPage();
    }

    private loadPage() {
        this.pageService.getPage('page1').subscribe((page: Page)=> this.page = new PageRenderer(Page1Component, page));
        this.injectPageComponent( this.appPage, this.page );
    }

    private injectPageComponent( target: PageDirective, renderer: PageRenderer ) {

        let viewContainerRef = target.viewContainerRef;
        viewContainerRef.clear();

        let componentFactory = this.componentFactoryResolver.resolveComponentFactory( renderer.component );
        let componentRef = viewContainerRef.createComponent( componentFactory );
        (<PageComponent>componentRef.instance).page = renderer.data;
    }

}
