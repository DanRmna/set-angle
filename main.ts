for (let index = 0; index < 5; index++) {
    servos.P0.setAngle(135)
    basic.pause(500)
    servos.P0.setAngle(45)
    basic.pause(500)
}
