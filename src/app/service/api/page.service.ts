import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Page, Section, SectionLayout } from '../../domain/page.model';


@Injectable()
export class PageService {

    constructor( private http: HttpClient ) { }

    getPage( name: string ): Observable<Page> {
        return Observable.of( this.mockPage() );
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
                        url: 'https://www.google.fr/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
                        imageType: 'album',
                        imageQuality: 'S',
                        imageOrientation: 'P',
                    },
                ],
                layout: null,
            }, [], null );

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
                        url: 'https://www.google.fr/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
                        imageType: 'album',
                        imageQuality: 'S',
                        imageOrientation: 'P',
                    },
                ],
                layout: null,
            }, [], null );

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
                        url: 'https://www.google.fr/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
                        imageType: 'album',
                        imageQuality: 'S',
                        imageOrientation: 'P',
                    },
                ],
                layout: null,
            }, [], null );

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
                        url: 'https://www.google.fr/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
                        imageType: 'album',
                        imageQuality: 'S',
                        imageOrientation: 'P',
                    },
                ],
                layout: null,
            }, [], null );

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
                        url: 'https://www.google.fr/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
                        imageType: 'album',
                        imageQuality: 'S',
                        imageOrientation: 'P',
                    },
                ],
                layout: null,
            }, [], null );

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
                        url: 'https://www.google.fr/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
                        imageType: 'album',
                        imageQuality: 'S',
                        imageOrientation: 'P',
                    },
                ],
                layout: null,
            },
            [
                section1,
                section2,
                section3,
            ],
            new SectionLayout('row', 'space-around start', null) );

        const section = new Section(
            {
                name: 'page',
                title: 'My site',
                content: '<p>Hello <strong>World!</strong>',
                photos: [
                    {
                        id: '123',
                        name: 'main_photo',
                        title: 'Main photo',
                        url: 'https://www.google.fr/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
                        imageType: 'album',
                        imageQuality: 'S',
                        imageOrientation: 'P',
                    },
                    {
                        id: '',
                        name: 'main_photo',
                        title: 'Main photo',
                        url: 'https://www.google.fr/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
                        imageType: 'album',
                        imageQuality: 'S',
                        imageOrientation: 'P',
                    },
                ],
                layout: null,
            },
            [
                header,
                footer,
                main,
            ],
            null );

        return new Page(
            section,
        );
    }
}
