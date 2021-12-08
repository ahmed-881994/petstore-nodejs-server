'use strict';


/**
 * Creates conditions for funds diversion
 * Allows creation of funds diversion conditions for a company to manage the behavior of booking funds against any account in the company that has the auto pay account defined
 *
 * parameterId String Identifies the record key of a Parameter table,that acts as a key to access the information specific to them. This holds system or a company as its value.
 * payload FundsDiversion body Payload
 * validate_only Boolean The identifier to indicate if it is set to only validate or not. (optional)
 * credentials String Username and password to authenticate the API against core-banking. (optional)
 * companyId String The identifier of the underlying Entity/Company/Branch. (optional)
 * returns FundsDiversionResponse
 **/
exports.createFundsDiversion = function(parameterId,payload,validate_only,credentials,companyId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {"empty": false};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieves balances movements of Account
 * Retrieves the credit, debit and gross balance movements for an Account for the requested booking date
 *
 * accountId String Identifier of the account. Often referred to as the account number, yet for consistency this is always referred to as accountId. Accepts both IBAN & BBAN
 * bookingDate String Business date on which the accounting entry was generated.
 * page_size Integer The total number of records per page (optional)
 * page_start Integer The record from which the response should be displayed (optional)
 * page_token String Unique id expected to get as part of response from t24 on every enquiry request. (optional)
 * credentials String Username and password to authenticate the API against core-banking. (optional)
 * companyId String The identifier of the underlying Entity/Company/Branch. (optional)
 * returns AccountBalanceMovementResponse
 **/
exports.getAccountBalanceMovement = function(accountId,bookingDate,page_size,page_start,page_token,credentials,companyId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {"empty": false};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieves list of Account balances
 * Retrieves various types of balances such as Cleared, Online, Locked & Usabale Balance of the Account
 *
 * accountId String Identifier of the account. Often referred to as the account number, yet for consistency this is always referred to as accountId. Accepts both IBAN & BBAN (optional)
 * customerId String Identifier of the customer (optional)
 * productId String Contains the unique identifier of the product, e.g. the product id of the arrangement account. (optional)
 * currencyId String Identifier of the currency. This is the 3-letter ISO 4217 code of the currency. (optional)
 * limitReferenceId String Limit reference identifier for the limit order. (optional)
 * page_size Integer The total number of records per page (optional)
 * page_start Integer The record from which the response should be displayed (optional)
 * page_token String Unique id expected to get as part of response from t24 on every enquiry request. (optional)
 * credentials String Username and password to authenticate the API against core-banking. (optional)
 * companyId String The identifier of the underlying Entity/Company/Branch. (optional)
 * returns AccountBalanceTodayResponse
 **/
exports.getAccountBalanceToday = function(accountId,customerId,productId,currencyId,limitReferenceId,page_size,page_start,page_token,credentials,companyId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {"empty": false};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieves available Card details
 * Retrieves the Card details of the Account such as Card Number, Card Type & Status of the Card
 *
 * accountId String Identifier of the account. Often referred to as the account number, yet for consistency this is always referred to as accountId. Accepts both IBAN & BBAN
 * cardIssueId String The identifier of the issued card formatted as cardType '.' cardNumber. E.g. VISA.1234567887654321 GC.1111222233334444 AB21.1111111122222222 (optional)
 * issueDate String The date the item was issued. (optional)
 * expiryDate String The date an agreement such as an arrangement, product, credit facility or limit is due to expire (optional)
 * cardStatus String Current status of the Card and following are the possible statuses are  - CARD.ISSUED - CARD.RETURNED - CARD.SCRAP - CARD.CANCEL - NOT.ACTIVATED - NOT.RECEIVED - ACTIVE - BLOCKED - EXPIRED (optional)
 * page_size Integer The total number of records per page (optional)
 * page_start Integer The record from which the response should be displayed (optional)
 * page_token String Unique id expected to get as part of response from t24 on every enquiry request. (optional)
 * credentials String Username and password to authenticate the API against core-banking. (optional)
 * companyId String The identifier of the underlying Entity/Company/Branch. (optional)
 * returns AccountCardsResponse
 **/
exports.getAccountCards = function(accountId,cardIssueId,issueDate,expiryDate,cardStatus,page_size,page_start,page_token,credentials,companyId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {"empty": false};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieves the Account Closure Information
 * Retrieves the Account Closure Information of the Account such as Closure Date and Reason, Mode of Closure, Balances on the date of Closing and Pending Charges
 *
 * accountId String Identifier of the account. Often referred to as the account number, yet for consistency this is always referred to as accountId. Accepts both IBAN & BBAN
 * credentials String Username and password to authenticate the API against core-banking. (optional)
 * companyId String The identifier of the underlying Entity/Company/Branch. (optional)
 * returns AccountClosureResponse
 **/
exports.getAccountClosure = function(accountId,credentials,companyId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {"empty": false};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieves the List of Accounts Basic Information
 * Retrieves the List of Accounts Basic Information such as Account Name, Customer, Currency, Category and Balance
 *
 * accountId String Identifier of the account. Often referred to as the account number, yet for consistency this is always referred to as accountId. Accepts both IBAN & BBAN (optional)
 * page_size Integer The total number of records per page (optional)
 * page_start Integer The record from which the response should be displayed (optional)
 * page_token String Unique id expected to get as part of response from t24 on every enquiry request. (optional)
 * credentials String Username and password to authenticate the API against core-banking. (optional)
 * companyId String The identifier of the underlying Entity/Company/Branch. (optional)
 * returns AccountListResponse
 **/
exports.getAccountList = function(accountId,page_size,page_start,page_token,credentials,companyId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {"empty": false};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieves Account transaction details
 * Retrieves the Transaction details of the Account such as Transaction references, Opening & Closing Balances, date of Transaction and Amount based on the range of date of specified
 *
 * accountId String Identifier of the account. Often referred to as the account number, yet for consistency this is always referred to as accountId. Accepts both IBAN & BBAN
 * bookingDate String Business date on which the accounting entry was generated. (optional)
 * processingDate String The date when payment instruction is processed in system. (optional)
 * valueDate String Indicates the value date on which the underlying accounting entry is to be given value (for interest purposes) (optional)
 * description String Contains the description of purpose of the payment. (optional)
 * reversalMarker String Denotes the flag which is set whenever any credit or reversal debit entries with future exposure dates are processed (optional)
 * includeSubAcct String Denotes the flag which needs to be set in order to allow the automatic creation of sub-accounts and the automatic distribution of transactions over sub-accounts (optional)
 * page_size Integer The total number of records per page (optional)
 * page_start Integer The record from which the response should be displayed (optional)
 * page_token String Unique id expected to get as part of response from t24 on every enquiry request. (optional)
 * credentials String Username and password to authenticate the API against core-banking. (optional)
 * companyId String The identifier of the underlying Entity/Company/Branch. (optional)
 * returns AccountTransactionsResponse
 **/
exports.getAccountTransactions = function(accountId,bookingDate,processingDate,valueDate,description,reversalMarker,includeSubAcct,page_size,page_start,page_token,credentials,companyId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {"empty": false};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieves list of Account details
 * Retrieves the Currency, Balances, Limit details and Arrangement details of an account
 *
 * accountId String Identifier of the account. Often referred to as the account number, yet for consistency this is always referred to as accountId. Accepts both IBAN & BBAN (optional)
 * customerId String Identifier of the customer (optional)
 * productId String Contains the unique identifier of the product, e.g. the product id of the arrangement account. (optional)
 * currencyId String Identifier of the currency. This is the 3-letter ISO 4217 code of the currency. (optional)
 * limitReference String Identifies the credit limit reference for the underlying account. (optional)
 * arrangementId String Identifies the arrangement for the account. (optional)
 * page_size Integer The total number of records per page (optional)
 * page_start Integer The record from which the response should be displayed (optional)
 * page_token String Unique id expected to get as part of response from t24 on every enquiry request. (optional)
 * credentials String Username and password to authenticate the API against core-banking. (optional)
 * companyId String The identifier of the underlying Entity/Company/Branch. (optional)
 * returns AccountsResponse
 **/
exports.getAccounts = function(accountId,customerId,productId,currencyId,limitReference,arrangementId,page_size,page_start,page_token,credentials,companyId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {"empty": false};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieves nostro balances for a Specific Currency Accounts
 * Retrieves the date wise balances of the Nostro Accounts that falls under a specific Currency
 *
 * currencyId String Identifier of the currency. This is the 3-letter ISO 4217 code of the currency.
 * nostroId String Nostro account id (optional)
 * page_size Integer The total number of records per page (optional)
 * page_start Integer The record from which the response should be displayed (optional)
 * page_token String Unique id expected to get as part of response from t24 on every enquiry request. (optional)
 * credentials String Username and password to authenticate the API against core-banking. (optional)
 * companyId String The identifier of the underlying Entity/Company/Branch. (optional)
 * returns NostroBalancesResponse
 **/
exports.getNostroBalances = function(currencyId,nostroId,page_size,page_start,page_token,credentials,companyId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {"empty": false};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieves consolidated nostro account balances for a specific currency
 * Retrieves consolidated balances of the nostro accounts in a given currency from the current date to the next five days.
 *
 * currencyId String Identifier of the currency. This is the 3-letter ISO 4217 code of the currency.
 * page_size Integer The total number of records per page (optional)
 * page_start Integer The record from which the response should be displayed (optional)
 * page_token String Unique id expected to get as part of response from t24 on every enquiry request. (optional)
 * credentials String Username and password to authenticate the API against core-banking. (optional)
 * companyId String The identifier of the underlying Entity/Company/Branch. (optional)
 * returns NostroCurrencyPositionsResponse
 **/
exports.getNostroCurrencyPositions = function(currencyId,page_size,page_start,page_token,credentials,companyId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {"empty": false};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieves consolidated nostro account balances
 * Retrieves forward balances of nostro accounts considering the transaction effective dates.
 *
 * valueDate String Indicates the value date on which the underlying accounting entry is to be given value (for interest purposes)
 * accountId String Identifier of the account. Often referred to as the account number, yet for consistency this is always referred to as accountId. Accepts both IBAN & BBAN (optional)
 * longPositionSign String Polarity (sign) used to denote buy position balance.   (optional)
 * page_size Integer The total number of records per page (optional)
 * page_start Integer The record from which the response should be displayed (optional)
 * page_token String Unique id expected to get as part of response from t24 on every enquiry request. (optional)
 * credentials String Username and password to authenticate the API against core-banking. (optional)
 * companyId String The identifier of the underlying Entity/Company/Branch. (optional)
 * returns NostroForwardBalancesResponse
 **/
exports.getNostroForwardBalances = function(valueDate,accountId,longPositionSign,page_size,page_start,page_token,credentials,companyId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {"empty": false};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieves consolidated nostro account Positions of Currency
 * Retrieves nostro account balances for a given currency from the current date to the next five days.Provides nostro-to-nostro account transfer facility within the same currency.
 *
 * currencyId String Identifier of the currency. This is the 3-letter ISO 4217 code of the currency.
 * longPositionSign String Polarity (sign) used to denote buy position balance.   (optional)
 * page_size Integer The total number of records per page (optional)
 * page_start Integer The record from which the response should be displayed (optional)
 * page_token String Unique id expected to get as part of response from t24 on every enquiry request. (optional)
 * credentials String Username and password to authenticate the API against core-banking. (optional)
 * companyId String The identifier of the underlying Entity/Company/Branch. (optional)
 * returns NostroPositionsResponse
 **/
exports.getNostroPositions = function(currencyId,longPositionSign,page_size,page_start,page_token,credentials,companyId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {"empty": false};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Updates Account Closure Information
 * Updates Account Closure Information for the specific Account such as Closure Date and Reason, Mode of Closure & Closing Charges
 *
 * accountId String Identifier of the account. Often referred to as the account number, yet for consistency this is always referred to as accountId. Accepts both IBAN & BBAN
 * payload AccountClosure body Payload
 * validate_only Boolean The identifier to indicate if it is set to only validate or not. (optional)
 * credentials String Username and password to authenticate the API against core-banking. (optional)
 * companyId String The identifier of the underlying Entity/Company/Branch. (optional)
 * returns AccountClosureResponse
 **/
exports.updateAccountClosure = function(accountId,payload,validate_only,credentials,companyId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {"empty": false};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update Emergency block in Account
 * Updates emergency block status & reason for the account
 *
 * accountId String Identifier of the account. Often referred to as the account number, yet for consistency this is always referred to as accountId. Accepts both IBAN & BBAN
 * payload AccountEmergencyBlock body Payload
 * validate_only Boolean The identifier to indicate if it is set to only validate or not. (optional)
 * credentials String Username and password to authenticate the API against core-banking. (optional)
 * companyId String The identifier of the underlying Entity/Company/Branch. (optional)
 * returns AccountEmergencyBlockResponse
 **/
exports.updateAccountEmergencyBlock = function(accountId,payload,validate_only,credentials,companyId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {"empty": false};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update Funds Authorisation status
 * Update the funds authorisation status for the account, for example SYNC or ERROR
 *
 * accountId String 
 * payload AccountFundsAuthStatus body Payload
 * validate_only Boolean The identifier to indicate if it is set to only validate or not. (optional)
 * credentials String Username and password to authenticate the API against core-banking. (optional)
 * companyId String The identifier of the underlying Entity/Company/Branch. (optional)
 * returns AccountFundsAuthStatusResponse
 **/
exports.updateAccountFundsAuthStatus = function(accountId,payload,validate_only,credentials,companyId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {"empty": false};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Updates funds diversion parameter
 * Updates the funds diversion conditions for a company to manage the behavior of booking funds against any account in the company that has the auto pay account defined
 *
 * parameterId String Identifies the record key of a Parameter table,that acts as a key to access the information specific to them. This holds system or a company as its value.
 * payload FundsDiversion body Payload
 * validate_only Boolean The identifier to indicate if it is set to only validate or not. (optional)
 * credentials String Username and password to authenticate the API against core-banking. (optional)
 * companyId String The identifier of the underlying Entity/Company/Branch. (optional)
 * returns FundsDiversionResponse
 **/
exports.updateFundsDiversion = function(parameterId,payload,validate_only,credentials,companyId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {"empty": false};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

