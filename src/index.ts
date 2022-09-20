/**
 * The program shows how to get input
 *   and deal with numbers
 * By:      Daria Bernice Calitis
 * Version: 1.0
 * Since:   2022-09-19
 */

import promptSync from 'prompt-sync'

const prompt = promptSync()

// Constants
const SUB_TIME = 60
const PIZZA_TIME = 45
const SOUP_TIME = 105
const MINUTE = 60

// Microwave time
let foodTime = 0

// Input object's mass
const food = prompt('Are you heating sub, pizza, or soup?: ')

switch (food) {
  case 'sub':
    foodTime = SUB_TIME
    break
  case 'pizza':
    foodTime = PIZZA_TIME
    break
  case 'soup':
    foodTime = SOUP_TIME
    break
  default:
    console.log('Invalid Input.')
}

if (foodTime !== 0) {
  const amountFood = prompt(
    `How many ${String(food)}(s) are you cooking? (max:3): `
  )
  const amountFoodInt = parseInt(amountFood)

  if (isNaN(amountFoodInt) || amountFoodInt > 3) {
    console.log('Invalid Input.')
  } else {
    const microwaveTime = amountFoodInt * foodTime
    console.log(
      `The total cook time is ${Math.floor(
        microwaveTime / MINUTE
      )} minutes and ${microwaveTime % MINUTE} seconds.`
    )
  }
}

console.log('\nDone.')
