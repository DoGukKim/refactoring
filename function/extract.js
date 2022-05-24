const invoice = {};
const printOwing = () => {
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

//////////////////////////////////////////////

const cleanPrintOwing = () => {
  const outstanding = calcOutstanding();
  printDetail();

  recordDueDate(invoice);

  function printDetail() {
    console.log(`${invoice.customer}`);
    console.log(`${outstanding}`);
    console.log(`${invoice.dueDate}`);
  }
};

const recordDueDate = (invoice) => {
  const today = new Date();
  invoice.dueDate = today.getMonth() + 30;
};

const calcOutstanding = () => {
  let outstanding = 0;
  for (const i of invoice) {
    outstanding += i.amount;
  }
  return outstanding;
};
