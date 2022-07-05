import {DomainError} from "./DomainError";

export class NotExpectedError extends DomainError {
    constructor(message: string) {
        super(message);
    }
}