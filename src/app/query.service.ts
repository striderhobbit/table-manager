import { Injectable } from '@angular/core';
import { OptionQueryComponent, OptionQuerySetup } from "./option-query/option-query.component";
import { QuerySetup, QueryType } from "./query.component";

@Injectable({
    providedIn: 'root'
})
export class QueryService {

    optionQueryComponent?: OptionQueryComponent;

    prompt<Result>(querySetup: QuerySetup<Result>): void {
        switch (querySetup.type) {
            case QueryType.Option: {
                this.optionQueryComponent?.prompt(querySetup as OptionQuerySetup);
                break;
            }
        }
    };

};