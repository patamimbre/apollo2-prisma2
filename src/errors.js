import {ApolloError} from "apollo-server";

class WrongCredentialsError extends ApolloError {
    constructor(message) {
        super(message || "The provided credentials are invalid", "WRONG_CREDENTIAL_ERROR");
        Object.defineProperty(this, "name", {value: 'WrongCredentialsError'});
    }
}

class AuthenticationError extends ApolloError {
  constructor(message) {
      super(message || "You are not authenticated", "NOT_AUTHENTICATED");
      Object.defineProperty(this, "name", {value: 'AuthenticationError'});
  }
}

export {
  WrongCredentialsError,
  AuthenticationError,
}