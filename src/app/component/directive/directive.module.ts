import { NgModule } from '@angular/core';

import { AppVendorModule } from '../../vendor/vendor.module';
import { AppPipeModule } from '../pipe/pipe.module';

import { PageDirective } from './page.directive';


@NgModule( {
    declarations: [
        PageDirective,
    ],
    imports: [
    ],
    exports: [
        PageDirective,
    ],
} )
export class AppDirectiveModule { }
