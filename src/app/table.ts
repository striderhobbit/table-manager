import { BaseTable, Column, ColumnWidth, TableWidth } from "./base-table";
import { Record } from "./record";

export class Table<Fields extends object> {

    constructor(baseTable: BaseTable<Fields>) {

        this.#lines = baseTable.lines.slice();

        this.#keys = Object.keys(baseTable.fields) as (keyof Fields)[];

        this.#columns = this.#keys.map((key, _, keys) => new class {
            get index(): number {
                return keys.indexOf(key);
            };
            key = key;
            toggle(): void {
                this.visible = !this.visible;
            };
            visible = true;
            width = ColumnWidth.Auto;
        });

    };

    width: TableWidth = TableWidth.Block;   // TODO get/set / responsiveness

    #lines: Fields[];

    #keys: (keyof Fields)[];

    #columns: Column<Fields>[];

    get columns(): Column<Fields>[] {
        return this.#columns.slice();
    };

    get lines(): Fields[] {
        return this.#lines.slice();
    };

    newColumnRecord(): Record<Column<Fields>> {
        return new Record<Column<Fields>>(this.#columns);
    };

    newLineRecord(): Record<Fields> {
        return new Record<Fields>(this.#lines);
    };

    moveColumn(sourceKey: keyof Fields, targetKey: keyof Fields): void {
        if (sourceKey !== targetKey) {
            const sourceIndex: number = this.#keys.indexOf(sourceKey);
            const targetIndex: number = this.#keys.indexOf(targetKey);

            this.#keys.splice(sourceIndex, 1)
            this.#keys.splice(targetIndex, 0, sourceKey);
        }
    };

};