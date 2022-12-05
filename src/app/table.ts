import { union } from "lodash";
import { Record } from "./record";

interface Column<Line extends object> {
    key: keyof Line,
    visible: boolean,
};

export class Table<Line extends object> {

    #lines: Line[];

    #columns: Column<Line>[];

    constructor(lines: Line[]) {

        this.#lines = lines.slice();

        this.#columns = union(...this.#lines.map(line => Object.keys(line) as (keyof Line)[])).map(key => ({
            key,
            visible: true,
        }));

    }

    get lines(): Line[] {
        return this.#lines.slice();
    }

    newColumnRange() {
        return new Record<Column<Line>>(this.#columns);
    }

    toggleColumn(column: Column<Line>): void {
        column.visible = !column.visible;
    }

};