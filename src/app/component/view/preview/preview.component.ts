import { Component, OnInit, ViewChild, ComponentFactoryResolver } from '@angular/core';

import { Page, Section } from '../../../domain/page.model';
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

        const header = new Section(
            {
                name: 'header',
                title: 'My header',
                content: '<p>Super <strong>header!</strong>',
                photos: [
                    {
                        id: '123',
                        name: 'main_photo',
                        title: 'Main photo',
                        content: 'https://www.google.fr/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
                        imageType: 'album',
                        imageQuality: 'S',
                        imageOrientation: 'P',
                    },
                ],
            }, [] );

        const footer = new Section(
            {
                title: 'My footer',
                name: 'footer',
                content: '<p>Hyper <strong>footer!</strong>',
                photos: [
                    {
                        id: '123',
                        name: 'main_photo',
                        title: 'Main photo',
                        content: 'https://www.google.fr/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
                        imageType: 'album',
                        imageQuality: 'S',
                        imageOrientation: 'P',
                    },
                ],
            }, [] );

        const section1 = new Section(
            {
                name: 'section1',
                title: 'My section 1',
                content: '<p>Lovely <strong>section 1!</strong>',
                photos: [
                    {
                        id: '123',
                        name: 'main_photo',
                        title: 'Main photo',
                        content: 'https://www.google.fr/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
                        imageType: 'album',
                        imageQuality: 'S',
                        imageOrientation: 'P',
                    },
                ],
            }, [] );

        const section2 = new Section(
            {
                name: 'section2',
                title: 'My section 2',
                content: '<p>Huge <strong>section 2!</strong>',
                photos: [
                    {
                        id: '123',
                        name: 'main_photo',
                        title: 'Main photo',
                        content: 'https://www.google.fr/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
                        imageType: 'album',
                        imageQuality: 'S',
                        imageOrientation: 'P',
                    },
                ],
            }, [] );

        const section3 = new Section(
            {
                name: 'section3',
                title: 'My section 3',
                content: '<p>Quick <strong>section 3!</strong>',
                photos: [
                    {
                        id: '123',
                        name: 'main_photo',
                        title: 'Main photo',
                        content: 'https://www.google.fr/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
                        imageType: 'album',
                        imageQuality: 'S',
                        imageOrientation: 'P',
                    },
                ],
            }, [] );

        const main = new Section(
            {
                name: 'main',
                title: 'My main content',
                content: '<p>Extra <strong>main content!</strong>',
                photos: [
                    {
                        id: '123',
                        name: 'main_photo',
                        title: 'Main photo',
                        content: 'https://www.google.fr/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
                        imageType: 'album',
                        imageQuality: 'S',
                        imageOrientation: 'P',
                    },
                ],
            },
            [
                section1,
                section2,
                section3,
            ] );

        const page = new Section(
            {
                name: 'page',
                title: 'My site',
                content: '<p>Hello <strong>World!</strong>',
                photos: [
                    {
                        id: '123',
                        name: 'main_photo',
                        title: 'Main photo',
                        content: 'https://www.google.fr/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
                        imageType: 'album',
                        imageQuality: 'S',
                        imageOrientation: 'P',
                    },
                ],
            },
            [
                header,
                footer,
                main,
            ] );

        return new Page(
            Page1Component,
            page,
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
