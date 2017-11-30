import { NgModule } from '@angular/core';

import { AppVendorModule } from '../../vendor/vendor.module';
import { AppPipeModule } from '../pipe/pipe.module';
import { AppDirectiveModule } from '../directive/directive.module';

import { HomeComponent } from './home/home.component';
import { SampleComponent } from './sample/sample.component';
import { PreviewComponent } from './preview/preview.component';
import { Page1Component } from './template/page1/page1.component';
import { SectionComponent } from './template/section/section.component';


@NgModule( {
    entryComponents: [
        Page1Component,
    ],
    declarations: [
        HomeComponent,
        SampleComponent,
        PreviewComponent,
        Page1Component,
        SectionComponent,
    ],
    imports: [
        AppVendorModule,
        AppPipeModule,
        AppDirectiveModule,
    ],
    exports: [
        HomeComponent,
        SampleComponent,
    ],
} )
export class AppViewModule { }
