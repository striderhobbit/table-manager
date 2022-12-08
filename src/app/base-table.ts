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
    toggle: () => void;
    visible: boolean;
};

export interface Fields extends fields { };