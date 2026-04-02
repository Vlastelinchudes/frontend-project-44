import startGay, { random } from "../index.js";
const desc = 'Answer "yes" if the number is even, otherwise answer "no".';
const evengame = () => {
  const question = random(100);
  let correctAnswer = "";
  if (question % 2 === 0) {
    correctAnswer = "yes";
  } else {
    correctAnswer = "no";
  }
  const out = [question, correctAnswer];
  return out;
};
export default () => startGay(desc, evengame);
