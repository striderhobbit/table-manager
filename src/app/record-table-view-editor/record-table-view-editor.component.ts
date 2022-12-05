import { Component } from '@angular/core';
import { RecordTableService } from "../record-table.service";

@Component({
    selector: 'app-record-table-view-editor',
    templateUrl: './record-table-view-editor.component.html',
    styleUrls: ['./record-table-view-editor.component.css']
})
export class RecordTableViewEditorComponent {

    constructor(public recordTableService: RecordTableService) { }

    recordTable = this.recordTableService.recordTable;

    columnRange = this.recordTable.newColumnRange()
        .set({ visible: false });

};