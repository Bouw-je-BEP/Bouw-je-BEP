input.onButtonPressed(Button.A, function on_button_pressed_a() {
    BEP.setLedColor(0xFF0000)
    basic.pause(1000)
    BEP.setLedColor(0x00FF00)
    basic.pause(1000)
    BEP.setLedColor(0x0000FF)
    basic.pause(1000)
})
input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    BEP.ledClear()
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    BEP.startFlash(0xFF8000, 500)
})
basic.forever(function on_forever() {
    basic.showIcon(IconNames.Heart)
    BEP.setLedColor(0xFF0000)
    BEP.servoWrite(BEP.Servos.Rechteroog, 0)
    BEP.servoWrite(BEP.Servos.Linkeroog, 0)
    BEP.servoWrite(BEP.Servos.Geletandwiel, 0)
    BEP.servoWrite(BEP.Servos.Rechterwenkbrauw, 0)
    BEP.servoWrite(BEP.Servos.Linkerwenkbrauw, 0)
    basic.pause(1000)
    basic.showIcon(IconNames.Yes)
    BEP.setLedColor(0x00FF00)
    BEP.servoWrite(BEP.Servos.Rechteroog, 2)
    BEP.servoWrite(BEP.Servos.Linkeroog, 2)
    BEP.servoWrite(BEP.Servos.Geletandwiel, 2)
    BEP.servoWrite(BEP.Servos.Rechterwenkbrauw, 2)
    BEP.servoWrite(BEP.Servos.Linkerwenkbrauw, 2)
    basic.pause(1000)
})
