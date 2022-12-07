import { Component } from '@angular/core';
import { TableService } from "../table.service";

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css']
})
export class TableComponent {

    constructor(public tableService: TableService) { }

    table = this.tableService.table;

    columnRecord = this.table.newColumnRecord()
        .setRange({ visible: true })
        .setCurrentKey("index");

};