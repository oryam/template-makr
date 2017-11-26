import { NgModule } from '@angular/core';

import { AppVendorModule } from '../../vendor/vendor.module';
import { AppPipeModule } from '../pipe/pipe.module';

import { HomeComponent } from './home/home.component';
import { SampleComponent } from './sample/sample.component';


@NgModule( {
    declarations: [
        HomeComponent,
        SampleComponent,
    ],
    imports: [
        AppVendorModule,
        AppPipeModule,
    ],
    exports: [
        HomeComponent,
        SampleComponent,
    ],
} )
export class AppViewModule { }
