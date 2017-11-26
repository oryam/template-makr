import { NgModule } from '@angular/core';

import { AppVendorModule } from './vendor/vendor.module';
import { AppHttpServiceModule } from './service/api/http-service.module';
import { AppPipeModule } from './component/pipe/pipe.module';
import { AppViewModule } from './component/view/view.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule( {
    declarations: [
        AppComponent,
    ],
    imports: [
        AppVendorModule,
        AppHttpServiceModule,
        AppPipeModule,
        AppRoutingModule,
        AppViewModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
} )
export class AppModule { }
