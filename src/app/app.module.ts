import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecordTableComponent } from './record-table/record-table.component';
import { RecordTableViewEditorComponent } from './record-table-view-editor/record-table-view-editor.component';

@NgModule({
    declarations: [
        AppComponent,
        RecordTableComponent,
        RecordTableViewEditorComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { };