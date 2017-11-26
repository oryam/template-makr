import { NgModule } from '@angular/core';

import { ColorPipe } from './color.pipe';


@NgModule( {
    declarations: [
        ColorPipe,
    ],
    imports: [],
    exports: [
        ColorPipe,
    ],
    providers: [
        ColorPipe,
    ],
} )
export class AppPipeModule { }
