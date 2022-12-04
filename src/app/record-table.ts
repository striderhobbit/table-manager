import { filter, ListIterateeCustom, union } from "lodash";

interface Column<Record extends object> {
    key: keyof Record,
    toggleId: string,
    visible: boolean,
};

export class RecordTable<Record extends object> {

    #records: Record[];

    #columns: Column<Record>[];

    constructor(records: Record[]) {

        this.#records = records.slice();

        this.#columns = union(...this.#records.map(record => Object.keys(record) as (keyof Record)[])).map((key, i) => ({
            key,
            toggleId: `column-toggle-${i}`,
            visible: true,
        }));

    }

    get records(): Record[] {
        return this.#records.slice();
    }

    columns(predicate?: ListIterateeCustom<Column<Record>, boolean>): Column<Record>[] {
        return filter<Column<Record>>(this.#columns, predicate);
    }

};