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

    constructor(public tableService: TableService) { };

    table: Table<Fields> = this.tableService.table;

    tableWidth: "table-width--block" | "table-width--fit-head" | "table-width--fit-body" | "table-width--fit-all" = "table-width--block";

    columnRecord: Record<Column<Fields>> = this.table.newColumnRecord()
        .setRange({ visible: true })
        .setCurrentKey("index");

    private dropColumn(dragEvent: DragEvent, column: Column<Fields>): void {
        if (dragEvent.dataTransfer) {
            dragEvent.preventDefault();

            this.table.moveColumn(
                dragEvent.dataTransfer.getData("sourceIndex") as keyof Fields,
                column.key
            );
        }
    };

    columnDragStartHandler(dragEvent: DragEvent, column: Column<Fields>): void {
        dragEvent.dataTransfer?.setData("sourceIndex", column.key as string);
    };

    columnDragEnterHandler(dragEvent: DragEvent, column: Column<Fields>): void {
        this.dropColumn(dragEvent, column);
    }

    columnDragOverHandler(dragEvent: DragEvent, column: Column<Fields>): void {
        dragEvent.preventDefault();
    }

    columnDropHandler(dragEvent: DragEvent, column: Column<Fields>): void {
        this.dropColumn(dragEvent, column);
    }

    columnWidthSelectChangeHandler(columnWidthSelect: HTMLSelectElement, column: Column<Fields>) {
        column.width = columnWidthSelect.value as typeof column.width;
    }

    tableWidthSelectChangeHandler(tableWidthSelect: HTMLSelectElement) {
        this.tableWidth = tableWidthSelect.value as typeof this.tableWidth;
    }

};