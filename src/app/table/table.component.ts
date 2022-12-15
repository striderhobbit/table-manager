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
export class TableComponent {       // TODO scrollIntoView für contextMenu

    constructor(private tableService: TableService) { };

    table: Table<Fields> = this.tableService.table;

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

    handleColumnDragStart(dragEvent: DragEvent, column: Column<Fields>): void {
        dragEvent.dataTransfer?.setData("sourceIndex", column.key as string);
    };

    handleColumnDragEnter(dragEvent: DragEvent, column: Column<Fields>): void {
        this.dropColumn(dragEvent, column);
    };

    handleColumnDragOver(dragEvent: DragEvent, column: Column<Fields>): void {
        dragEvent.preventDefault();
    };

    handleColumnDrop(dragEvent: DragEvent, column: Column<Fields>): void {
        this.dropColumn(dragEvent, column);
    };

    handleColumnWidthSelectChange(columnWidthSelect: HTMLSelectElement, column: Column<Fields>): void {
        column.width = columnWidthSelect.value as typeof column.width;      // TODO
    };

};