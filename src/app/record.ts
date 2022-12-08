import { filter, ListIterateeCustom, sortBy } from "lodash";

export class Record<Fields> {

    #lines: Fields[];

    #filter?: ListIterateeCustom<Fields, boolean>;

    #keys: (keyof Fields)[] = [];

    constructor(lines: Fields[]) {
        this.#lines = lines;
    }

    setRange(filter: ListIterateeCustom<Fields, boolean>): Record<Fields> {
        return this.#filter = filter,
            this;
    }

    setCurrentKey(...keys: (keyof Fields)[]): Record<Fields> {
        return this.#keys = keys,
            this;
    }

    get(): Fields[] {
        return sortBy<Fields>(filter<Fields>(this.#lines, this.#filter), this.#keys);
    }

    get size(): number {
        return this.get().length;
    }

};