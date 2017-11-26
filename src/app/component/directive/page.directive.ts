import { Directive, ViewContainerRef, ElementRef } from '@angular/core';

@Directive( {
    selector: '[app-page]'
} )
export class PageDirective {

    constructor(
        public viewContainerRef: ViewContainerRef,
        el: ElementRef,
    ) { }

}
