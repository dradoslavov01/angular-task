import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from "@progress/kendo-angular-charts";
import { GridModule } from '@progress/kendo-angular-grid';

import { AppComponent } from './app.component';
@NgModule({
    declarations: [AppComponent],
    imports: [
        HttpClientModule,
        BrowserModule,
        BrowserAnimationsModule,
        ChartsModule,
        ReactiveFormsModule,
        GridModule
    ],
 
    bootstrap: [AppComponent]
})
export class AppModule {}
