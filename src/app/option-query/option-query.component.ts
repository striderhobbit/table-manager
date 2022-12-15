import { Component } from '@angular/core';
import { QueryComponent, QuerySetup } from "../query.component";
import { Record } from "../record";

export interface OptionQueryOption {
    checked: boolean;
    key: string;
    label: string;
};

type OptionQueryResult = OptionQueryOption[];

export enum OptionQuerySubtype {
    Multi,
    Single,
};

export interface OptionQuerySetup extends QuerySetup<OptionQueryResult> {
    options: Record<OptionQueryOption>;
    subtype: OptionQuerySubtype;
    type: "option";
};

@Component({
    selector: 'app-option-query',
    templateUrl: './option-query.component.html',
    styleUrls: ['./option-query.component.css']
})
export class OptionQueryComponent extends QueryComponent<OptionQueryResult, OptionQuerySetup> {

    connect(): void {
        this.queryService.optionQueryComponent = this;
    };

    get result(): OptionQueryResult {
        return this.setup?.options.get() ?? [];
    };

    handleOptionClick(optionQueryOption: OptionQueryOption): void {
        this.toggleOption(optionQueryOption);

        if (this.setup?.resolve.on.includes("click")) {
            this.resolve();
        }
    };

    toggleOption(optionQueryOption: OptionQueryOption): void {
        this.setup?.options.get().forEach(option => {
            if (this.setup?.subtype === OptionQuerySubtype.Single || option === optionQueryOption) {
                option.checked = option === optionQueryOption && !option.checked;
            }
        });
    };

};