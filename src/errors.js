import {ApolloError} from "apollo-server";

class WrongCredentialsError extends ApolloError {
    constructor(message) {
        super(message || "The provided credentials are invalid", "WRONG_CREDENTIALS");
        Object.defineProperty(this, "name", {value: 'WrongCredentialsError'});
    }
}

export {
  WrongCredentialsError,
}