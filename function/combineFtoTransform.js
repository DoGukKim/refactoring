const reading = { customer: "eval", quantity: 10, month: 10, year: 2017 };
// const aReading = acquireReading();
const baseCharge = baseRate(aReading.month, aReading.year) * aReading.quantity;

////// 위의 것들이 중복되어 호출된다 생각해보자

const rawReading = acquireReading();
const aReading = enrichReading(rawReading);
const baseChargeAmount = aReading.baseCharge;
const enrichReading = (original) => {
  const result = _.cloneDeep(original);
  result.baseCharge = calculateBaseCharge(result);
  return result;
};
