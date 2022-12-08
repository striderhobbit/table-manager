import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { TableColumnToggleComponent } from './table-column-toggle/table-column-toggle.component';

@NgModule({
    declarations: [
        AppComponent,
        TableComponent,
        TableColumnToggleComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { };