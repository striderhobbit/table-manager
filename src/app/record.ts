import { filter, ListIterateeCustom, sortBy } from "lodash";

export class Record<Line extends object> {

    #lines: Line[];

    #keys?: (keyof Line)[];

    #filter?: ListIterateeCustom<Line, boolean>;

    constructor(lines: Line[]) {
        this.#lines = lines;
    }

    setRange(filter: ListIterateeCustom<Line, boolean>): Record<Line> {
        this.#filter = filter;  // TODO take only copy?

        return this;
    }

    setCurrentKey(...keys: (keyof Line)[]): Record<Line> {
        this.#keys = keys;

        return this;
    }

    get(): Line[] {
        return sortBy<Line>(filter<Line>(this.#lines, this.#filter), this.#keys ?? []);
    }

    get size(): number {
        return this.get().length;
    }

};