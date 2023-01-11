input.onButtonPressed(Button.A, function () {
    num1 = randint(0, 10)
    num2 = randint(0, 10)
    basic.showNumber(num1)
    basic.showString("x")
    basic.showNumber(num2)
    nrjogadas += 1
    basic.pause(100)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    pontuacao += 1
    basic.showString("boa")
    basic.showIcon(IconNames.Happy)
    basic.pause(100)
    basic.clearScreen()
})
let num2 = 0
let num1 = 0
num1 = 0
num2 = 0
let nrjogadas = 0
let pontuacao = 0
