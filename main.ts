input.onButtonPressed(Button.A, function () {
    ssr = 0
    basic.showIcon(IconNames.Yes)
})
input.onButtonPressed(Button.B, function () {
    ssr = 1
    basic.showIcon(IconNames.No)
})
let ssr = 0
ssr = 1
basic.showIcon(IconNames.No)
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P0, ssr)
})
