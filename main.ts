for (let index = 0; index < 4; index++) {
    pins.digitalWritePin(DigitalPin.P5, 1)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P5, 0)
}
