import { filter, ListIterateeCustom } from "lodash";

export class Range<T extends object> {

    #items: T[];

    #predicate?: ListIterateeCustom<T, boolean>;

    constructor(items: T[]) {
        this.#items = items;
    }

    set(predicate: ListIterateeCustom<T, boolean>): Range<T> {
        this.#predicate = predicate;

        return this;
    }

    get(): T[] {
        return filter<T>(this.#items, this.#predicate);
    }

    get size(): number {
        return this.get().length;
    }

}