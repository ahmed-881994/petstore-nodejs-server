'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.createFundsDiversion = function createFundsDiversion (req, res, next) {
  var parameterId = req.swagger.params['parameterId'].value;
  var payload = req.swagger.params['payload'].value;
  var validate_only = req.swagger.params['validate_only'].value;
  var credentials = req.swagger.params['credentials'].value;
  var companyId = req.swagger.params['companyId'].value;
  Default.createFundsDiversion(parameterId,payload,validate_only,credentials,companyId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAccountBalanceMovement = function getAccountBalanceMovement (req, res, next) {
  var accountId = req.swagger.params['accountId'].value;
  var bookingDate = req.swagger.params['bookingDate'].value;
  var page_size = req.swagger.params['page_size'].value;
  var page_start = req.swagger.params['page_start'].value;
  var page_token = req.swagger.params['page_token'].value;
  var credentials = req.swagger.params['credentials'].value;
  var companyId = req.swagger.params['companyId'].value;
  Default.getAccountBalanceMovement(accountId,bookingDate,page_size,page_start,page_token,credentials,companyId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAccountBalanceToday = function getAccountBalanceToday (req, res, next) {
  var accountId = req.swagger.params['accountId'].value;
  var customerId = req.swagger.params['customerId'].value;
  var productId = req.swagger.params['productId'].value;
  var currencyId = req.swagger.params['currencyId'].value;
  var limitReferenceId = req.swagger.params['limitReferenceId'].value;
  var page_size = req.swagger.params['page_size'].value;
  var page_start = req.swagger.params['page_start'].value;
  var page_token = req.swagger.params['page_token'].value;
  var credentials = req.swagger.params['credentials'].value;
  var companyId = req.swagger.params['companyId'].value;
  Default.getAccountBalanceToday(accountId,customerId,productId,currencyId,limitReferenceId,page_size,page_start,page_token,credentials,companyId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAccountCards = function getAccountCards (req, res, next) {
  var accountId = req.swagger.params['accountId'].value;
  var cardIssueId = req.swagger.params['cardIssueId'].value;
  var issueDate = req.swagger.params['issueDate'].value;
  var expiryDate = req.swagger.params['expiryDate'].value;
  var cardStatus = req.swagger.params['cardStatus'].value;
  var page_size = req.swagger.params['page_size'].value;
  var page_start = req.swagger.params['page_start'].value;
  var page_token = req.swagger.params['page_token'].value;
  var credentials = req.swagger.params['credentials'].value;
  var companyId = req.swagger.params['companyId'].value;
  Default.getAccountCards(accountId,cardIssueId,issueDate,expiryDate,cardStatus,page_size,page_start,page_token,credentials,companyId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAccountClosure = function getAccountClosure (req, res, next) {
  var accountId = req.swagger.params['accountId'].value;
  var credentials = req.swagger.params['credentials'].value;
  var companyId = req.swagger.params['companyId'].value;
  Default.getAccountClosure(accountId,credentials,companyId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAccountList = function getAccountList (req, res, next) {
  var accountId = req.swagger.params['accountId'].value;
  var page_size = req.swagger.params['page_size'].value;
  var page_start = req.swagger.params['page_start'].value;
  var page_token = req.swagger.params['page_token'].value;
  var credentials = req.swagger.params['credentials'].value;
  var companyId = req.swagger.params['companyId'].value;
  Default.getAccountList(accountId,page_size,page_start,page_token,credentials,companyId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAccountTransactions = function getAccountTransactions (req, res, next) {
  var accountId = req.swagger.params['accountId'].value;
  var bookingDate = req.swagger.params['bookingDate'].value;
  var processingDate = req.swagger.params['processingDate'].value;
  var valueDate = req.swagger.params['valueDate'].value;
  var description = req.swagger.params['description'].value;
  var reversalMarker = req.swagger.params['reversalMarker'].value;
  var includeSubAcct = req.swagger.params['includeSubAcct'].value;
  var page_size = req.swagger.params['page_size'].value;
  var page_start = req.swagger.params['page_start'].value;
  var page_token = req.swagger.params['page_token'].value;
  var credentials = req.swagger.params['credentials'].value;
  var companyId = req.swagger.params['companyId'].value;
  Default.getAccountTransactions(accountId,bookingDate,processingDate,valueDate,description,reversalMarker,includeSubAcct,page_size,page_start,page_token,credentials,companyId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAccounts = function getAccounts (req, res, next) {
  var accountId = req.swagger.params['accountId'].value;
  var customerId = req.swagger.params['customerId'].value;
  var productId = req.swagger.params['productId'].value;
  var currencyId = req.swagger.params['currencyId'].value;
  var limitReference = req.swagger.params['limitReference'].value;
  var arrangementId = req.swagger.params['arrangementId'].value;
  var page_size = req.swagger.params['page_size'].value;
  var page_start = req.swagger.params['page_start'].value;
  var page_token = req.swagger.params['page_token'].value;
  var credentials = req.swagger.params['credentials'].value;
  var companyId = req.swagger.params['companyId'].value;
  Default.getAccounts(accountId,customerId,productId,currencyId,limitReference,arrangementId,page_size,page_start,page_token,credentials,companyId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getNostroBalances = function getNostroBalances (req, res, next) {
  var currencyId = req.swagger.params['currencyId'].value;
  var nostroId = req.swagger.params['nostroId'].value;
  var page_size = req.swagger.params['page_size'].value;
  var page_start = req.swagger.params['page_start'].value;
  var page_token = req.swagger.params['page_token'].value;
  var credentials = req.swagger.params['credentials'].value;
  var companyId = req.swagger.params['companyId'].value;
  Default.getNostroBalances(currencyId,nostroId,page_size,page_start,page_token,credentials,companyId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getNostroCurrencyPositions = function getNostroCurrencyPositions (req, res, next) {
  var currencyId = req.swagger.params['currencyId'].value;
  var page_size = req.swagger.params['page_size'].value;
  var page_start = req.swagger.params['page_start'].value;
  var page_token = req.swagger.params['page_token'].value;
  var credentials = req.swagger.params['credentials'].value;
  var companyId = req.swagger.params['companyId'].value;
  Default.getNostroCurrencyPositions(currencyId,page_size,page_start,page_token,credentials,companyId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getNostroForwardBalances = function getNostroForwardBalances (req, res, next) {
  var valueDate = req.swagger.params['valueDate'].value;
  var accountId = req.swagger.params['accountId'].value;
  var longPositionSign = req.swagger.params['longPositionSign'].value;
  var page_size = req.swagger.params['page_size'].value;
  var page_start = req.swagger.params['page_start'].value;
  var page_token = req.swagger.params['page_token'].value;
  var credentials = req.swagger.params['credentials'].value;
  var companyId = req.swagger.params['companyId'].value;
  Default.getNostroForwardBalances(valueDate,accountId,longPositionSign,page_size,page_start,page_token,credentials,companyId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getNostroPositions = function getNostroPositions (req, res, next) {
  var currencyId = req.swagger.params['currencyId'].value;
  var longPositionSign = req.swagger.params['longPositionSign'].value;
  var page_size = req.swagger.params['page_size'].value;
  var page_start = req.swagger.params['page_start'].value;
  var page_token = req.swagger.params['page_token'].value;
  var credentials = req.swagger.params['credentials'].value;
  var companyId = req.swagger.params['companyId'].value;
  Default.getNostroPositions(currencyId,longPositionSign,page_size,page_start,page_token,credentials,companyId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateAccountClosure = function updateAccountClosure (req, res, next) {
  var accountId = req.swagger.params['accountId'].value;
  var payload = req.swagger.params['payload'].value;
  var validate_only = req.swagger.params['validate_only'].value;
  var credentials = req.swagger.params['credentials'].value;
  var companyId = req.swagger.params['companyId'].value;
  Default.updateAccountClosure(accountId,payload,validate_only,credentials,companyId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateAccountEmergencyBlock = function updateAccountEmergencyBlock (req, res, next) {
  var accountId = req.swagger.params['accountId'].value;
  var payload = req.swagger.params['payload'].value;
  var validate_only = req.swagger.params['validate_only'].value;
  var credentials = req.swagger.params['credentials'].value;
  var companyId = req.swagger.params['companyId'].value;
  Default.updateAccountEmergencyBlock(accountId,payload,validate_only,credentials,companyId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateAccountFundsAuthStatus = function updateAccountFundsAuthStatus (req, res, next) {
  var accountId = req.swagger.params['accountId'].value;
  var payload = req.swagger.params['payload'].value;
  var validate_only = req.swagger.params['validate_only'].value;
  var credentials = req.swagger.params['credentials'].value;
  var companyId = req.swagger.params['companyId'].value;
  Default.updateAccountFundsAuthStatus(accountId,payload,validate_only,credentials,companyId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateFundsDiversion = function updateFundsDiversion (req, res, next) {
  var parameterId = req.swagger.params['parameterId'].value;
  var payload = req.swagger.params['payload'].value;
  var validate_only = req.swagger.params['validate_only'].value;
  var credentials = req.swagger.params['credentials'].value;
  var companyId = req.swagger.params['companyId'].value;
  Default.updateFundsDiversion(parameterId,payload,validate_only,credentials,companyId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
