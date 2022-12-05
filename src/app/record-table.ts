import { union } from "lodash";
import { Range } from "./range";

interface Column<Record extends object> {
    key: keyof Record,
    visible: boolean,
};

export class RecordTable<Record extends object> {

    #records: Record[];

    #columns: Column<Record>[];

    constructor(records: Record[]) {

        this.#records = records.slice();

        this.#columns = union(...this.#records.map(record => Object.keys(record) as (keyof Record)[])).map(key => ({
            key,
            visible: true,
        }));

    }

    get records(): Record[] {
        return this.#records.slice();
    }

    newColumnRange() {
        return new Range<Column<Record>>(this.#columns);
    }

    toggleColumn(column: Column<Record>): void {
        column.visible = !column.visible;
    }

};