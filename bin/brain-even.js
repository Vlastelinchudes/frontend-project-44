#!/usr/bin/env node
import {greeting} from '../src/cli.js'
import readlineSync from 'readline-sync'
console.log('Welcome to the Brain Games!')
const name = readlineSync.question('May I have your name? ')
console.log(`Hello, ${name}!`)
console.log('Answer "yes" if the number is even, otherwise answer "no".')
const congrats = (name) => {console.log(`Congratulations, ${name}!`)}
const gameover = (name) => {console.log(`Let's try again, ${name}!`)}
const isEven = (num) => num%2===0;
const game = () => {
	for (let i = 0; i<3; i++){
		let a = Math.floor(Math.random()*100)
		let correct = ''
		if (isEven(a)){correct='yes'}
		else {correct='no'}
		console.log(`Question: ${a}`)
		let b = readlineSync.question('Your answer: ')
		if (b === correct) {console.log('Correct!')}
		else {console.log(`'${b}' is wrong answer ;(. Correct answer was '${correct}'`)
		gameover(name)
		return 0}

	}
	congrats(name)
	return 0
}
game()
