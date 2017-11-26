import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppMaterialModule } from './material.module';


@NgModule( {
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule,
        FormsModule,
        HttpClientModule,
        FlexLayoutModule,
        AppMaterialModule,
    ],
    exports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule,
        FormsModule,
        HttpClientModule,
        FlexLayoutModule,
        AppMaterialModule,
    ],
} )
export class AppVendorModule { }
