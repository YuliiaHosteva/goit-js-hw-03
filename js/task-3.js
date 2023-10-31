function filterArray(numbers, value) {
  // Створюємо порожній масив для підходящих чисел
  const filteredArray = [];

  // Ітеруємося по елементах масиву numbers
  for (let i = 0; i < numbers.length; i++) {
    // Перевіряємо, чи поточний елемент більший за значення value
    if (numbers[i] > value) {
      // Якщо так, додаємо його до масиву filteredArray
      filteredArray.push(numbers[i]);
    }
  }

  // Повертаємо новий масив з підходящими числами
  return filteredArray;
}

// Перевірка функції
console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
