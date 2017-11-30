import { Page } from '../../domain/page.model';

export interface PageComponent {
    page: Page;
}

export class PageRenderer {
    constructor(
        public component: any,
        public data: Page,
    ) { }
}
