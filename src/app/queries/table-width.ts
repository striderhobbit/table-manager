import { Fields, TableWidth } from "src/app/base-table";
import { OptionQueryOption, OptionQuerySetup } from "src/app/option-query/option-query.component";
import { Record } from "src/app/record";
import { Table } from "src/app/table";
import { QueryEvent, QueryType } from "../query.component";

export class TableWidthQuery {

    constructor(private table: Table<Fields>) { };

    private labels: (keyof typeof TableWidth)[] = ["Block", "FitHead", "FitBody", "FitAll"];

    setup: OptionQuerySetup = (() => {
        const { table } = this;

        return {
            options: new Record<OptionQueryOption>(this.labels.map(label => new class {
                get checked() {
                    return table.width === TableWidth[label];
                };
                set checked(value) {
                    if (value) {
                        table.width = TableWidth[label];
                    }
                };
                id = TableWidth[label];
                label = label;
            })),
            resolve: {
                callback: result => {
                    const optionChecked = result.find(option => option.checked);

                    if (optionChecked) {
                        table.width = optionChecked.id as TableWidth;
                    }
                },
                on: [QueryEvent.Blur, QueryEvent.Click],
            },
            trigger: {
                enabled: true,
                label: "Table width",
            },
            type: QueryType.Option,
        };
    })();

};