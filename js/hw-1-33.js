function formatMessage(message, maxLength) {
  let result;
// Пиши код ниже этой строки
if (message.length <= maxLength) {
result = message;
}
  else {
  result = message.slice(0, maxLength) + '...';
  }
// Пиши код выше этой строки
  return result;
}
console.log(formatMessage('Curabitur ligula sapien', 16));
console.log(formatMessage('Curabitur ligula sapien', 23));
console.log(formatMessage('Vestibulum facilisis purus nec', 20));
console.log(formatMessage('Vestibulum facilisis purus nec', 30));
console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 15));
console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 41));
