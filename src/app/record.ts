import { filter, ListIterateeCustom } from "lodash";

export class Record<Line extends object> {

    #lines: Line[];

    #predicate?: ListIterateeCustom<Line, boolean>;

    constructor(lines: Line[]) {
        this.#lines = lines;
    }

    set(predicate: ListIterateeCustom<Line, boolean>): Record<Line> {
        this.#predicate = predicate;

        return this;
    }

    get(): Line[] {
        return filter<Line>(this.#lines, this.#predicate);
    }

    get size(): number {
        return this.get().length;
    }

};