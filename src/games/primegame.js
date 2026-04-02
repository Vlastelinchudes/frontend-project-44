import startGay, { random } from "../index.js";
const desc = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (num) => {
  if (num <= 1) return "no";

  if (num <= 3) return "yes";

  if (num % 2 === 0 || num % 3 === 0) return "no";

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return "no";
  }

  return "yes";
};
const primeGame = () => {
  let question = random(100);
  let correctAnswer = isPrime(question);
  const out = [question, correctAnswer];
  return out;
};
export default () => startGay(desc, primeGame);
