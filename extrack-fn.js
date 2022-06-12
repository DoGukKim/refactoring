// Before
const _printOwing = (invoice) => {
  let outstanding = 0;
  // 미해결 채무 계산
  for (const i of invoice) {
    outstanding += i.amount;
  }
  // 마감일 기록
  const today = new Date();
  invoice.dueDate = today.getMonth() + 30;

  // 세부 사항
  console.log(`${invoice.customer}`);
  console.log(`${outstanding}`);
  console.log(`${invoice.dueDate}`);
};

// After
const printOwing = (invoice) => {
  const outstanding = calcOutstanding(invoice);
  recordDueDate();
  printDetail(invoice, outstanding);
};

const calcOutstanding = (invoice) => {
  let outstanding = 0;
  for (const i of invoice) {
    outstanding += i.amount;
  }
  return outstanding;
};

const recordDueDate = () => {
  const today = new Date();
  invoice.dueDate = today.getMonth() + 30;
};

const printDetail = (invoice, outstanding) => {
  console.log(`${invoice.customer}`);
  console.log(`${outstanding}`);
  console.log(`${invoice.dueDate}`);
};
