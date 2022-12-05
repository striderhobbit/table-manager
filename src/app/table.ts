import { union } from "lodash";
import { Record } from "./record";

interface Column<Line> {
    key: keyof Line,
    visible: boolean,
};

export class Table<Line> {

    #lines: Line[];

    #columns: Column<Line>[];

    constructor(lines: Line[]) {

        this.#lines = lines.slice();

        const keys = this.#lines.map(line =>
            Object.keys(line as object) as (keyof Line)[]
        );

        this.#columns = union(...keys).map(key => ({
            key,
            visible: true,
        }));

    }

    get lines(): Line[] {
        return this.#lines.slice();
    }

    newColumnRecord(): Record<Column<Line>> {
        return new Record<Column<Line>>(this.#columns);
    }

    newLineRecord(): Record<Line> {
        return new Record<Line>(this.#lines);
    }

    toggleColumn(column: Column<Line>): void {
        column.visible = !column.visible;
    }

};