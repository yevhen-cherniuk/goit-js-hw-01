function isValidPassword(password) {
  const SAVED_PASSWORD = 'jqueryismyjam';
  // Пиши код ниже этой строки
  const isMatch = SAVED_PASSWORD === password ;

  // Пиши код выше этой строки
  return isMatch;
};
console.log(isValidPassword('mangodab3st'));
console.log(isValidPassword('kiwirul3z'));
console.log(isValidPassword('jqueryismyjam'));