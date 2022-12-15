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
    width: ColumnWidth;
};

export enum ColumnWidth {
    Auto = "column-width--auto",
    FitAll = "column-width--fit-all",
    FitBody = "column-width--fit-body",
    FitHead = "column-width--fit-head",
};

export enum TableWidth {
    Block = "table-width--block",
    FitAll = "table-width--fit-all",
    FitBody = "table-width--fit-body",
    FitHead = "table-width--fit-head",
};

export interface Fields extends fields { };