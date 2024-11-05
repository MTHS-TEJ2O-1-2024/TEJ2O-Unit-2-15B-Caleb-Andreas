/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Caleb Andreas
 * Created on: Nov 2024
 * This program is a turtle logo program.
*/

// Variables.
let countOne: number
let countTwo: number
let sprite: game.LedSprite = null

// Cleanup.
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// Make sprite go arount perimeter on A button press.
input.onButtonPressed(Button.A, function() {
    countOne = 4
    sprite = game.createSprite(0, 0)
    basic.pause(200)

    // Set countTwo to 0 if countOne > 0 then turn sprite 
    // and subract 1 from countOne when nested while is done.
    while (countOne > 0){
        countTwo = 0
        // If countTwo > 4 move sprite forwards 1 and 
        // add 1 to countTwo.
        while (countTwo < 4){
            sprite.move(1)
            countTwo = countTwo + 1
            basic.pause(200)
        }
        sprite.turn(Direction.Right, 90)
        countOne = countOne - 1
    }
    // Back to happy face.
    sprite.delete()
    basic.showIcon(IconNames.Happy)
})
