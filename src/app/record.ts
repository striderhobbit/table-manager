import { filter, ListIterateeCustom, sortBy } from "lodash";

export class Record<Fields> {

    constructor(private lines: Fields[]) { };

    private filter?: ListIterateeCustom<Fields, boolean>;   // TODO

    private keys: (keyof Fields)[] = [];

    setRange(filter: ListIterateeCustom<Fields, boolean>): Record<Fields> {
        return Object.assign(this, { filter });
    };

    setCurrentKey(...keys: (keyof Fields)[]): Record<Fields> {
        return Object.assign(this, { keys });
    };

    get(): Fields[] {
        return sortBy<Fields>(filter<Fields>(this.lines, this.filter), this.keys);
    };

    get size(): number {
        return this.get().length;
    };

};