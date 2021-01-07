function checkIfCanAccessContent(subType) {
  const canAccessContent = subType === 'pro' || subType === 'vip' ; // дополни эту строку

  return canAccessContent;
}
console.log(checkIfCanAccessContent('pro'));
console.log(checkIfCanAccessContent('starter'));
console.log(checkIfCanAccessContent('vip'));
console.log(checkIfCanAccessContent('free'));