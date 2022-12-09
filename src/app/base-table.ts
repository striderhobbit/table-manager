import { fields, lines } from "./data/table";

export default class implements BaseTable<Fields> {
    fields = new fields;
    lines = lines.slice();
};

export interface BaseTable<Fields> {
    fields: Fields;
    lines: Fields[];
};

export interface Column<Fields> {
    index: number;
    key: keyof Fields;
    toggle: (state?: boolean) => void;
    visible: boolean;
    width: "column-width--auto" | "column-width--fit-head" | "column-width--fit-body" | "column-width--fit-all";
};

export interface Fields extends fields { };