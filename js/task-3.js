function checkForSpam(message) {
    // Переводимо рядок до нижнього регістру для однорідності порівнянь
    const lowercasedMessage = message.toLowerCase();
    
    // Перевіряємо, чи містить рядок заборонені слова
    if (lowercasedMessage.includes("spam") || lowercasedMessage.includes("sale")) {
      return true;
    } else {
      return false;
    }
  }
  
  console.log(checkForSpam("Latest technology news")); // false
  console.log(checkForSpam("JavaScript weekly newsletter")); // false
  console.log(checkForSpam("Get best sale offers now!")); // true
  console.log(checkForSpam("Amazing SalE, only tonight!")); // true
  console.log(checkForSpam("Trust me, this is not a spam message")); // true
  console.log(checkForSpam("Get rid of sPaM emails. Our book is on sale!")); // true
  console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
  