var Formatter = function() {
  var self = this;
  self.toMoney = toMoney;

  function toMoney(money, locale, currencyCode) {
    var formattedMoney;
    if (isNumber(money)) {
      formattedMoney = money.toLocaleString(locale, {
        style: "currency",
        currency: currencyCode,
        currencyDisplay: "code",
        minimumFractionDigits: 2
      });
    }
    if (isString(money)) {
      var asFloat = parseFloat(money);
      formattedMoney = asFloat.toLocaleString(locale, {
        style: "currency",
        currency: currencyCode,
        currencyDisplay: "code",
        minimumFractionDigits: 2
      });
    }
    return formattedMoney;
  }


  function isString(value) {
    return (typeof value === 'string' || value instanceof String);
  }


  function isNumber(value) {
    return (typeof value === 'number');
  }

};
