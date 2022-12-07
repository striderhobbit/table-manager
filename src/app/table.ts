import { union } from "lodash";
import { Record } from "./record";

export interface Column<Line> {     // TODO "extends object" strangely breaks @ runtime
    index: number,
    key: keyof Line,
    toggle: () => void,
    visible: boolean,
};

export class Table<Line extends object> {

    #lines: Line[];

    #keys: (keyof Line)[];

    #columns: Column<Line>[];

    constructor(lines: Line[]) {

        this.#lines = lines.slice();

        this.#keys = union(...this.#lines.map(line =>
            Object.keys(line) as (keyof Line)[]
        ));

        this.#columns = this.#keys.map((key, _, keys) => new class {
            get index(): number {
                return keys.indexOf(key);
            }
            key = key;
            toggle() {
                this.visible = !this.visible;
            }
            visible = true;
        });
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

    moveColumn(sourceKey: keyof Line, targetKey: keyof Line): void {
        if (sourceKey !== targetKey) {
            const sourceIndex: number = this.#keys.indexOf(sourceKey);
            const targetIndex: number = this.#keys.indexOf(targetKey);

            this.#keys.splice(sourceIndex, 1)
            this.#keys.splice(targetIndex, 0, sourceKey);
        }
    }

};