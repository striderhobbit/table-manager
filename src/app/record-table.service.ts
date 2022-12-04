import { Injectable } from '@angular/core';
import { RecordTable } from "./record-table";

import records from "./data/records.json";

@Injectable({
    providedIn: 'root'
})
export class RecordTableService {

    recordTable = new RecordTable<typeof records[number]>(records);

};