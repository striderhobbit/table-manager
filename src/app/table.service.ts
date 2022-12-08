import { Injectable } from '@angular/core';
import { Table } from "./table";

import baseTable, { Fields } from "./base-table";

@Injectable({
    providedIn: 'root'
})
export class TableService {

    table = new Table<Fields>(new baseTable);

};