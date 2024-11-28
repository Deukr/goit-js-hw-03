function slugify(title) {
  const str = title.toLowerCase().split(' '); // Преобразуем строку в нижний регистр и разбиваем на слова
  const slugStr = str.join('-');

  return slugStr;
}

console.log(slugify('Arrays for beginners')); // "arrays-for-beginners"
console.log(slugify('English for developer')); // "english-for-developer"
console.log(slugify('Ten secrets of JavaScript')); // "ten-secrets-of-javascript"
console.log(slugify('How to become a JUNIOR developer in TWO WEEKS')); // "how-to-become-a-junior-developer-in-two-weeks"
