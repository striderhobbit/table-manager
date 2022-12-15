import { Injectable } from '@angular/core';
import { OptionQueryComponent, OptionQuerySetup } from "./option-query/option-query.component";
import { QuerySetup } from "./query.component";

@Injectable({
    providedIn: 'root'
})
export class QueryService {

    optionQueryComponent?: OptionQueryComponent;

    prompt<Result>(querySetup: QuerySetup<Result>): void {
        if (querySetup.type === "option") {
            this.optionQueryComponent?.prompt(querySetup as OptionQuerySetup);
        }
    };

};