let total = 1;

const scrabble = (numOfLetters) => {
  if (numOfLetters === 0) return total;
  total = total * numOfLetters;
  return scrabble(numOfLetters - 1);
}

console.log(scrabble(10));