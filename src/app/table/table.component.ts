import { Column, Fields } from "../base-table";
import { Component } from '@angular/core';
import { Record } from "../record";
import { Table } from "../table";
import { TableService } from "../table.service";

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css']
})
export class TableComponent {

    constructor(public tableService: TableService) { }

    table: Table<Fields> = this.tableService.table;

    columnRecord: Record<Column<Fields>> = this.table.newColumnRecord()
        .setRange({ visible: true })
        .setCurrentKey("index");

    columnDragStartHandler(dragEvent: DragEvent, column: Column<Fields>): void {
        dragEvent.dataTransfer?.setData("sourceIndex", column.key as string);
    }

    dropColumn(dragEvent: DragEvent, column: Column<Fields>): void {
        if (dragEvent.dataTransfer) {
            dragEvent.preventDefault();

            this.table.moveColumn(dragEvent.dataTransfer.getData("sourceIndex") as keyof Fields, column.key);
        }
    }

};