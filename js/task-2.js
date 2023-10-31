function makeArray(firstArray, secondArray, maxLength) {
  // Об'єднуємо обидва масиви
  const combinedArray = firstArray.concat(secondArray);

  // Перевіряємо, чи перевищує кількість елементів максимальну довжину
  if (combinedArray.length > maxLength) {
    // Вертаємо новий масив з обмеженою довжиною maxLength
    return combinedArray.slice(0, maxLength);
  }

  // Вертаємо весь новий масив
  return combinedArray;
}

// Перевірка функції
console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []
  