input.onButtonPressed(Button.A, function () {
    if (state == 0) {
        no1 += 1
        basic.showNumber(no1)
    } else {
        no2 += 1
        basic.showNumber(no2)
    }
})
input.onButtonPressed(Button.B, function () {
    if (state == 0) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . . # . .
            . . # . .
            `)
        state = 1
    } else {
        result = no1 + no2
        basic.showNumber(result)
        music.playMelody("G B A G F E D C ", 240)
        basic.showIcon(IconNames.Happy)
        state = 0
        no1 = 0
        no2 = 0
        result = 0
    }
})
let state = 0
let result = 0
let no2 = 0
let no1 = 0
no1 = 0
no2 = 0
result = 0
state = 0
basic.showIcon(IconNames.Square)
basic.forever(function () {
	
})
