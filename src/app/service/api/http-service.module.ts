import { NgModule } from '@angular/core';

import { SampleService } from './sample.service';
import { PageService } from './page.service';


@NgModule( {
    imports: [],
    exports: [],
    providers: [
        SampleService,
        PageService,
    ],
} )
export class AppHttpServiceModule { }
