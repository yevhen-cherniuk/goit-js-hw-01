function getSubstring(string, length) {
  const substring = string.slice(0, length) ; // Дополни эту строку

  return substring;
}
console.log(getSubstring('Привет мир', 3));
console.log(getSubstring('Привет мир', 6));
console.log(getSubstring('Привет мир', 8));
console.log(getSubstring('Привет мир', 10));
console.log(getSubstring('Привет мир', 0));