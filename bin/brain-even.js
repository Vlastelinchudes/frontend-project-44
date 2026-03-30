#!/usr/bin/env node
import {greeting} from '../src/cli.js'
import readlineSync from 'readline-sync'
console.log('Welcome to the Brain Games!')
const name = readlineSync.question('May I have your name? ')
console.log(`Hello, ${name}!`)
console.log('Answer "yes" if the number is even, otherwise answer "no".')
const congrats = (name) => {console.log(`Congratulations, ${name}!`)}
const gameover = (name) => {console.log(`Let's try again, ${name}!`)}
const calc = (ans, correct) => {
	if (ans !== correct) {console.log(`'${ans}' is wrong answer ;(. Correct answer was '${correct}'.`)
	return(0)
	} else {console.log('Correct!')
	return(1)
	}}
const game = () => {
	console.log('Question: 15')
	if(calc(readlineSync.question('Your answer:'), 'no') === 0){
		gameover(name)
		return 0}
	console.log('Question: 6')
	if(calc(readlineSync.question('Your answer:'), 'yes') === 0){
		gameover(name)
		return 0}
	console.log('Question: 7')
	if(calc(readlineSync.question('Your answer:'), 'no') === 0){
		gameover(name)
		return 0}
	congrats(name)
}
game();
