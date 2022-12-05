import { Component } from '@angular/core';
import { TableService } from "../table.service";

@Component({
    selector: 'app-table-column-toggle',
    templateUrl: './table-column-toggle.component.html',
    styleUrls: ['./table-column-toggle.component.css']
})
export class TableColumnToggleComponent {

    constructor(public tableService: TableService) { }

    table = this.tableService.table;

    columnRange = this.table.newColumnRange()
        .set({ visible: false });

};