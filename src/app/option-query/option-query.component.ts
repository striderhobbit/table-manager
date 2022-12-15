import { Component } from '@angular/core';
import { QueryComponent, QueryEvent, QuerySetup, QueryType } from "../query.component";
import { Record } from "../record";

export interface OptionQueryOption {
    checked: boolean;
    id: string;
    label: string;
};

type Result = OptionQueryOption[];

export interface OptionQuerySetup extends QuerySetup<Result> {
    multiple?: boolean;
    options: Record<OptionQueryOption>;
    type: QueryType.Option;
};

@Component({
    selector: 'app-option-query',
    templateUrl: './option-query.component.html',
    styleUrls: ['./option-query.component.css']
})
export class OptionQueryComponent extends QueryComponent<Result, OptionQuerySetup> {

    connect(): void {
        this.queryService.optionQueryComponent = this;
    };

    get result(): Result {
        return this.setup?.options.get() ?? [];
    };

    handleOptionClick(optionQueryOption: OptionQueryOption): void {
        this.toggleOption(optionQueryOption);

        if (this.setup?.resolve.on.includes(QueryEvent.Click)) {
            this.resolve();
        }
    };

    toggleOption(optionQueryOption: OptionQueryOption): void {
        this.setup?.options.get().forEach(option => {
            if (!this.setup?.multiple || option === optionQueryOption) {
                option.checked = option === optionQueryOption && !option.checked;
            }
        });
    };

};