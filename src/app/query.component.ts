import { Directive, ElementRef, HostListener } from '@angular/core';
import { QueryService } from "./query.service";

export enum QueryEvent {
    Blur,
    Click,
};

export enum QueryType {
    Option,
};

export interface QuerySetup<Result> {
    resolve: {
        callback?: (result: Result) => void;
        on: QueryEvent[];
    };
    trigger: {
        enabled: boolean;
        label: string;
    };
    type: QueryType;
};

@Directive()
export abstract class QueryComponent<Result, Setup extends QuerySetup<Result>> {

    constructor(private queryContainer: ElementRef<HTMLElement>, protected queryService: QueryService) {
        this.connect();

        queryContainer.nativeElement.tabIndex = -1;
    };

    abstract connect(): void;

    abstract result: Result;

    protected open: boolean = false;

    protected setup?: Setup;

    @HostListener("blur") handleBlur() {
        if (this.setup?.resolve.on.includes(QueryEvent.Blur)) {
            this.resolve();
        }
    };

    resolve(): void {
        this.open = false;

        this.setup?.resolve.callback?.call(null, this.result);
    };

    prompt(setup: Setup): void {
        if (this.open) {
            throw new Error(`${QueryComponent.name} is already open`);
        }

        this.setup = setup;

        this.open = true;

        this.queryContainer.nativeElement.focus();
    };

};