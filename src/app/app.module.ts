import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OptionQueryComponent } from './option-query/option-query.component';
import { StatusbarComponent } from './statusbar/statusbar.component';
import { TableComponent } from './table/table.component';

@NgModule({
    declarations: [
        AppComponent,
        OptionQueryComponent,
        StatusbarComponent,
        TableComponent,
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { };