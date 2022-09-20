/**
 * The program shows how to get input
 *   and deal with numbers
 * By:      Daria Bernice Calitis
 * Version: 1.0
 * Since:   2022-09-19
 */

import promptSync from 'prompt-sync'

const prompt = promptSync()

// T
let foodTime = 0

// Input object's mass
const food = prompt('Are you heating sub, pizza, or soup?: ')

switch (food) {
  case 'sub':
    foodTime = 60
    break
  case 'pizza':
    foodTime = 45
    break
  case 'soup':
    foodTime = 105
    break
  default:
    console.log('Invalid Input.')
}

if (foodTime !== 0) {
  const amountFood = prompt(`How many ${food}(s) are you cooking? (max:3): `)
  const amountFoodInt = parseInt(amountFood)

  if (isNaN(amountFoodInt) || amountFoodInt > 3) {
    console.log('Invalid Input.')
  } else {
    const microwaveTime = amountFoodInt * foodTime
    console.log(
      `The total cook time is ${Math.floor(microwaveTime / 60)} minutes and ${
        microwaveTime % 60
      } seconds.`
    )
  }
}

console.log('\nDone.')
