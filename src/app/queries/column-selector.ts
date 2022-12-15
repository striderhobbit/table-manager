import { Fields } from "src/app/base-table";
import { OptionQueryOption, OptionQuerySetup, OptionQuerySubtype } from "src/app/option-query/option-query.component";
import { Record } from "src/app/record";
import { Table } from "src/app/table";

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
        get key() {
            return column.key;
        };
        get label() {
            return column.key;
        };
    })).setCurrentKey("key");

    setup: OptionQuerySetup = (() => {
        const { options, range } = this;

        return {
            options: options.setRange(range === ColumnSelectorQueryRange.Hidden
                ? { checked: false }
                : {}
            ),
            resolve: {
                on: ["blur"],
            },
            subtype: OptionQuerySubtype.Multi,
            trigger: new class {
                get enabled() {
                    return options.size > 0;
                };
                get key() {
                    return range === ColumnSelectorQueryRange.Hidden
                        ? `${options.size} hidden columns`
                        : "Select columns";
                };
            },
            type: "option",
        };
    })();

};