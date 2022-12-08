import { Column, Fields } from "../base-table";
import { Component } from '@angular/core';
import { Record } from "../record";
import { Table } from "../table";
import { TableService } from "../table.service";

@Component({
    selector: 'app-table-column-toggle',
    templateUrl: './table-column-toggle.component.html',
    styleUrls: ['./table-column-toggle.component.css']
})
export class TableColumnToggleComponent {

    constructor(public tableService: TableService) { };

    table: Table<Fields> = this.tableService.table;

    columnRecord: Record<Column<Fields>> = this.table.newColumnRecord()
        .setRange({ visible: false });

};