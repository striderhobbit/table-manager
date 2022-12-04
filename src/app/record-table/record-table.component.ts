import { Component } from '@angular/core';
import { RecordTableService } from "../record-table.service";

@Component({
    selector: 'app-record-table',
    templateUrl: './record-table.component.html',
    styleUrls: ['./record-table.component.css']
})
export class RecordTableComponent {

    constructor(public recordTableService: RecordTableService) { }

};