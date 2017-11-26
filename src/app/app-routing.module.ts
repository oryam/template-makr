import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './component/view/home/home.component';
import { SampleComponent } from './component/view/sample/sample.component';
import { PreviewComponent } from './component/view/preview/preview.component';


const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
    },
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: 'sample',
        component: SampleComponent,
    },
    {
        path: 'preview',
        component: PreviewComponent,
    },
];


@NgModule( {
    imports: [RouterModule.forRoot( routes )],
    exports: [RouterModule]
} )
export class AppRoutingModule { }
