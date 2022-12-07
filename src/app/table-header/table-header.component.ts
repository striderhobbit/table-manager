import { Component, Input } from '@angular/core';
import { Column, Table } from "../table";

@Component({
    selector: 'app-table-header',
    templateUrl: './table-header.component.html',
    styleUrls: ['./table-header.component.css']
})
export class TableHeaderComponent<Line extends object> {

    @Input() table?: Table<Line>;

    @Input() columns?: Column<Line>[];

    dragStart(event: DragEvent, column: Column<Line>): void {
        event.dataTransfer?.setData("sourceIndex", column.key as string);
    }

    drop(event: DragEvent, column: Column<Line>): void {
        if (event.dataTransfer) {
            event.preventDefault();

            this.table?.moveColumn(event.dataTransfer.getData("sourceIndex") as keyof Line, column.key);
        }
    }

};