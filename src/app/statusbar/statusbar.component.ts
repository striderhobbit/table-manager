import { ColumnSelectorQuery, ColumnSelectorQueryRange } from "../queries/column-selector";
import { Component } from '@angular/core';
import { Fields } from "../base-table";
import { QueryService } from "../query.service";
import { QuerySetup } from "../query.component";
import { Record } from "../record";
import { Table } from "../table";
import { TableService } from "../table.service";
import { TableWidthQuery } from "../queries/table-width";

@Component({
    selector: 'app-statusbar',
    templateUrl: './statusbar.component.html',
    styleUrls: ['./statusbar.component.css']
})
export class StatusbarComponent {

    constructor(private tableService: TableService, protected queryService: QueryService) { };

    table: Table<Fields> = this.tableService.table;

    querySetupRecord: Record<QuerySetup<any>> = new Record<QuerySetup<any>>([
        new ColumnSelectorQuery(this.table, ColumnSelectorQueryRange.All)
            .setup,
        new ColumnSelectorQuery(this.table, ColumnSelectorQueryRange.Hidden)
            .setup,
        new TableWidthQuery(this.table)
            .setup
    ]).setRange({ trigger: { enabled: true } });

};