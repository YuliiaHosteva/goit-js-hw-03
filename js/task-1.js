function slugify(title) {
  // Перетворення рядка в нижній регістр
  const lowerCaseTitle = title.toLowerCase();

  // Розділення рядка на слова за допомогою пробілів
  const words = lowerCaseTitle.split(' ');

  // Об'єднання слів тире
  const slug = words.join('-');

  return slug;
}

// Перевірка функції
console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"
