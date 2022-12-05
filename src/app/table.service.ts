import { Injectable } from '@angular/core';
import { Table } from "./table";

import lines from "./data/lines.json";

@Injectable({
    providedIn: 'root'
})
export class TableService {

    table = new Table<typeof lines[number]>(lines);

};