import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Page, Section } from '../domain/page.model';
import { Observable } from 'rxjs/Observable';


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
            section,
        );
    }
}
