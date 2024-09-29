const ClickError = {
  Success: 0,
  SignFailed: -1,
  InvalidAmount: -2,
  ActionNotFound: -3,
  AlreadyPaid: -4,
  UserNotFound: -5,
  TransactionNotFound: -6,
  BadRequest: -8,
  TransactionCanceled: -9,
};

const ClickAction = {
  Prepare: 0,
  Complete: 1,
};

const TransactionStatus = {
  Pending: "PENDING",
  Paid: "PAID",
  Canceled: "CANCELED",
};

module.exports = {
  ClickError,
  ClickAction,
  TransactionStatus,
};
