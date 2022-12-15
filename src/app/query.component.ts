import { Directive, ElementRef, HostListener } from '@angular/core';
import { QueryService } from "./query.service";

export interface QuerySetup<QueryResult> {
    resolve: {
        callback?: (result: QueryResult) => void;
        on: ("blur" | "click")[];
    };
    trigger: {
        enabled: boolean;
        key: string;
    };
    type: "option";
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
        if (this.setup?.resolve.on.includes("blur")) {
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