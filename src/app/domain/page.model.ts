export class Page {
    constructor(
        public section: ICommonSection,
    ) { }
}

export interface ICommonSection {
    element: ICommonElement;
    children: ICommonSection[];
    findChild( name: string ): ICommonSection;
}

export class Section implements ICommonSection {
    constructor(
        public element: ICommonElement,
        public children: ICommonSection[],
    ) { }

    findChild( name: string ): ICommonSection {
        const headerIndex = this.children.findIndex(( child: ICommonSection ) => child.element.name === name );
        if ( headerIndex !== -1 ) {
            return this.children[headerIndex];
        }
        return null;
    }
}

export interface ICommonElement {
    name: string;
    title: string;
    content: string;
    photos: PhotoElement[];
}

export class TextElement implements ICommonElement {
    constructor(
        public name: string,
        public title: string,
        public content: string,
        public photos: PhotoElement[],
    ) { }
}

export class NewsElement {

}

export class OfferElement {

}

export class HeaderElement {

}

export class FooterElement {

}

export class PhotoElement {
    /** uid */
    id: string;
    /** generated name and can be renamed by user */
    name: string;
    title: string;
    content: string;
    /** panoramic, album, ... */
    imageType: string;
    /** S:small, L:large, HD:hd */
    imageQuality: string
    /** P:portrait, L:landscape */
    imageOrientation: string;
}
