/**
 *  Pair programming effort by:
 *    - Joshua Tan
 *    - Alfonso Lotina
 *    - Saad Islam
 */

const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));

  for (const l of horizontalJoin) {
    if (l.includes(word)) return true;
  }

  let verticalLetters = [];
  const colSize = letters.length;

  for (let i = 0; i < colSize; i++) {
    let wordArr = [];

    for (const array of letters) {
      wordArr.push(array[i]);
    }

    verticalLetters.push(wordArr);
  }

  const verticalJoin = verticalLetters.map(ls => ls.join(''));

  for (const l of verticalJoin) {
    if (l.includes(word)) return true;
  }

  return false;
};

module.exports = wordSearch;