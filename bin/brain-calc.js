#!/usr/bin/env node
import {greeting} from '../src/cli.js'
import readlineSync from 'readline-sync'
console.log('Welcome to the Brain Games!')
let name = readlineSync.question('May I have your name? ')
console.log(`Hello, ${name}!`)
console.log('What is the result of the expression?')
const congrats = (name) => {console.log(`Congratulations, ${name}!`)}
const gameover = (name) => {console.log(`Let's try again, ${name}!`)}
const isEqual = (cor, ans) => ans === cor
const game = () => {
	const operands = ['+', '-', '*']
	for (let i = 0; i<3; i++){
		let a = Math.floor(Math.random()*100)	
		let b = Math.floor(Math.random()*100)
		let correct = 0
		let answer
		switch (operands[Math.floor(Math.random()*operands.length)]){
		case "+":
		correct = a + b
		console.log(`Question: ${a} + ${b}`)
		answer = Number(readlineSync.question('Your answer: '))
		if (isEqual(correct, answer)) {console.log('Correct!')
		break
		}
		else {
			console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correct}'.`)
			gameover(name)
			return 0
		}
		case "-":
		correct = a - b
		console.log(`Question: ${a} - ${b}`)
		answer = Number(readlineSync.question('Your answer: '))
		if (isEqual(correct, answer)) {console.log('Correct!')
		break
		}
		else {
			console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correct}'.`)
			gameover(name)
			return 0
		}
		case "*":
		correct = a * b
		console.log(`Question: ${a} * ${b}`)
		answer = Number(readlineSync.question('Your answer: '))
		if (isEqual(correct, answer)) {console.log('Correct!')
		break
		}
		else {
			console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correct}'.`)
			gameover(name)
			return 0
		}}



	}

	
	congrats(name)
	
}
game()
