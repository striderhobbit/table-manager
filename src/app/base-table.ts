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
    width: "width-auto" | "width-fit-head" | "width-fit-body" | "width-fit-all" | "width-fixed";
};

export interface Fields extends fields { };