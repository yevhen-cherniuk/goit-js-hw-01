function makeMessage (name, price) {
  // Пиши код ниже этой строки
 
   const message = `Вы выбрали ${name}, цена за штуку ${price} кредитов`;
  // Пиши код выше этой строки
  return message;
};
console.log( makeMessage ('Радар', 6150));
console.log( makeMessage ('Сканер', 3500));
console.log( makeMessage ('Двигатель', 4070));