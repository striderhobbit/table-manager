import { Component } from '@angular/core';
import { union } from "lodash";
import records from "../data/records.json";

interface Key<Record> {
    value: keyof Record,
    visible: boolean,
};

@Component({
    selector: 'app-record-table',
    templateUrl: './record-table.component.html',
    styleUrls: ['./record-table.component.css']
})
export class RecordTableComponent {

    records = records;

    keys: Key<typeof records[number]>[] =
        union(...records.map(record => Object.keys(record) as (keyof typeof record)[])).map(key => ({
            value: key,
            visible: true,
        }));

};