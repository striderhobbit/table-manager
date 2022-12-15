import { Fields } from "src/app/base-table";
import { OptionQueryOption, OptionQuerySetup } from "src/app/option-query/option-query.component";
import { Record } from "src/app/record";
import { Table } from "src/app/table";
import { QueryEvent, QueryType } from "../query.component";

export enum ColumnSelectorQueryRange { All, Hidden };

export class ColumnSelectorQuery {

    constructor(private table: Table<Fields>, private range: ColumnSelectorQueryRange) { };

    options: Record<OptionQueryOption> = new Record<OptionQueryOption>(this.table.columns.map(column => new class {
        get checked() {
            return column.visible;
        };
        set checked(value) {
            column.visible = value;
        };
        get id() {
            return column.key;
        };
        get label() {
            return column.key;
        };
    })).setCurrentKey("id");

    setup: OptionQuerySetup = (({ options, range }) => ({
        options: options.setRange(range === ColumnSelectorQueryRange.Hidden
            ? { checked: false }
            : {}
        ),
        resolve: {
            on: [QueryEvent.Blur],
        },
        multiple: true,
        trigger: new class {
            get enabled() {
                return options.size > 0;
            };
            get label() {
                return range === ColumnSelectorQueryRange.Hidden
                    ? `${options.size} hidden columns`
                    : "Select columns";
            };
        },
        type: QueryType.Option,
    }))(this);

};