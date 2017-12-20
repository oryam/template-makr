import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from "rxjs/BehaviorSubject";

import { Page } from "../domain/page.model";


@Injectable()
export class DatabaseService {

    private _pages = new BehaviorSubject<Page[]>( [] );
    private _pages$: Observable<Page[]>;
    
    constructor() {
        this._pages$ = this._pages.asObservable();
    }
    
    getPages() {
        return this._pages.getValue();
    }
    
    savePages(name: string) {
        const values = this._pages.getValue();
        //values.findIndex((value)=> value.section.findChild(name))
    }

}
